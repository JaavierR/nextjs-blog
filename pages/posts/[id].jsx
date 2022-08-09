import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article className="mt-6">
        <h1 className="text-3xl font-bold">{postData.title}</h1>
        <div className="mt-4 text-gray-500">
          <Date dateString={postData.date} />
        </div>
        <br />
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  );
}

export default Post;
