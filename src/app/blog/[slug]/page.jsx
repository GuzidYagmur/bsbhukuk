import { allPosts } from "contentlayer/generated";
import Content from "./Content";
import CTA from "@/components/CTA";



export async function generateStaticParams() {
  const posts = await allPosts;

  return posts.map((post) => ({ slug: post.slug }));
}

export const generateMetadata = async ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === 'blog/' + params.slug);

  return { title: post?.title + ' - JoefreyCodes' };
}

const ContentLayout = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === 'blog/' + params.slug);

  return (
    <>
      <div className="py-32 pb-0 bg-primary">
        <Content blog={post} />
      </div>
      <CTA />
    </>
  )
}
export default ContentLayout;