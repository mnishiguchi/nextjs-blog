import Link from "next/link";
import Head from "next/head";

import css from "./layout.module.scss";
import cssUtils from "../styles/utils.module.scss";

const name = "Masa";
export const siteTitle = "Masatoshi Nishiguchi";

export default ({ children, home }) => {
  return (
    <div className={css.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
      </Head>

      <header className={css.header}>
        {home ? (
          <>
            <img
              src="/images/logo.png"
              className={`${css.headerHomeImage} ${cssUtils.borderCircle}`}
              alt={name}
            />
            <h1 className={cssUtils.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <img
                src="/images/logo.png"
                className={`${css.headerImage} ${cssUtils.borderCircle}`}
                alt={name}
              />
            </Link>
            <h2 className={cssUtils.headingLg}>
              <Link href="/">
                <a className={cssUtils.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>

      <main>{children}</main>

      {!home && (
        <div className={css.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};
