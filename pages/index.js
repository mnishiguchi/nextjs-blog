import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "../components/layout";
import cssUtils from "../styles/utils.module.scss";

export default () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={cssUtils.headingMd}>
        <p>Hello, I am Masa.</p>

        <Link href="/posts/first-post">
          First Post
        </Link>
      </section>
    </Layout>
  );
}
