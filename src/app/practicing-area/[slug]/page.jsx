import { allPracticings } from "contentlayer/generated";
import Content from "./Content";
import CTA from "@/components/CTA";



export async function generateStaticParams() {
  const practicings = await allPracticings;

  return practicings.map((practicing) => ({ slug: practicing.slug }));
}

export const generateMetadata = async ({ params }) => {
  const practicing = allPracticings.find((practicing) => practicing._raw.flattenedPath === 'practicing-area/' + params.slug);

  return { title: practicing?.title + ' - JoefreyCodes' };
}

const ContentLayout = ({ params }) => {
  const practicing = allPracticings.find((practicing) => practicing._raw.flattenedPath === 'practicing-area/' + params.slug);

  return (
    <>
      <div className="py-32 bg-primary">
        <Content practicing={practicing} />
      </div>
      <CTA />
    </>
  )
}
export default ContentLayout;