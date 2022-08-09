import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="prose">
        <p>
          Itaque vel dolore distinctio ut a modi hic possimus modi. Id et dicta
          molestias exercitationem temporibus enim voluptates rerum. Sit magnam
          reprehenderit saepe maiores suscipit. Culpa at voluptate sint corporis
          similique itaque in. Esse omnis pariatur facilis dignissimos similique
          commodi unde nobis ut. Vel expedita quas rerum cumque. Et vel sunt
          minima. Cumque debitis sint. Dicta ipsa molestiae sed omnis.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className="text-xl leading-6 pt-px mt-6">
        <h2 className="text-3xl font-semibold leading-6 mb-6">Blog</h2>
        <ul className="space-y-4">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="flex flex-col space-y-2">
              <Link href={`/posts/${id}`}>
                <a className="text-blue-500 hover:text-blue-600 font-medium hover:underline">
                  {title}
                </a>
              </Link>

              <small className="text-sm text-gray-500">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default Home;
