import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "../components/layout";
import cssUtils from "../styles/utils.module.scss";
import { getPostsData } from "../lib/posts";

export async function getStaticProps() {
  return {
    props: {
      postsData: getPostsData(),
    },
  };
}

export default function HomePage({ postsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={cssUtils.headingMd}>
        <p>Hello, I am Masa.</p>
      </section>

      <section className={`${cssUtils.headingMd} ${cssUtils.padding1px}`}>
        <h2 className={cssUtils.headingLg}>Blog</h2>
        <ul className={cssUtils.list}>
          {postsData.map(({ id, date, title }) => (
            <li className={cssUtils.listItem} key={id}>
              <h4>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small>{date}</small>
              </h4>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
