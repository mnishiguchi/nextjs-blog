import Link from "next/link";
import Head from "next/head";

import Layout from "../../components/layout.js";
import Date from "../../components/date";
import { getPostIds, getPostData } from "../../lib/posts";
import cssUtils from '../../styles/utils.module.scss'

// Return a list of possible value for id
export async function getStaticPaths() {
  return {
    paths: getPostIds(),
    fallback: false,
  };
}

// Fetch necessary data for the blog post using params.id
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function PostPage({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className={cssUtils.headingXl}>{postData.title}</h1>
        <div className={cssUtils.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
