import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "../components/layout";
import cssUtils from "../styles/utils.module.scss";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function HomePage({ allPostsData }) {
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
          {allPostsData.map(({ id, date, title }) => (
            <li className={cssUtils.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
