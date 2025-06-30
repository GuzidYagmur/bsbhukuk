import { allAttorneys } from "contentlayer/generated";
import Content from "./Content";
import CTA from "@/components/CTA";



export async function generatedStaticParams() {
  const attorneys = await allAttorneys;

  return attorneys.map((attorney) => ({ slug: attorney.slug }));
}

export const generateMetadata = async ({ params }) => {
  const attorney = allAttorneys.find((attorney) => attorney._raw.flattenedPath === 'attorneys/' + params.slug);

  return { title: attorney?.name + ' - JoefreyCodes' };
}

const ContentLayout = ({ params }) => {
  const attorney = allAttorneys.find((attorney) => attorney._raw.flattenedPath === 'attorneys/' + params.slug);

  return (
    <>
      <div className="py-32 bg-primary">
        <Content attorney={attorney} />
      </div>
      <CTA />
    </>
  )
}
export default ContentLayout;