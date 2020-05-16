import Link from "next/link";
import Head from "next/head";

import Layout from "../../components/layout.js";
import { getPostIds, getPostData } from "../../lib/posts";

// Return a list of possible value for id
export async function getStaticPaths() {
  return {
    paths: getPostIds(),
    fallback: false,
  };
}

// Fetch necessary data for the blog post using params.id
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default function PostPage({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <h1>{postData.title}</h1>
      <p>{postData.id}</p>
      <p>{postData.date}</p>
    </Layout>
  );
}
