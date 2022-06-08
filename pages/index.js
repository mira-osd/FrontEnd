import utilStyles from "./index.module.css";

import Head from "next/head";

import { getPostData } from "../lib/md";

export async function getStaticProps() {
  const postData = await getPostData("index");

  return {
    props: {
      postData
    }
  };
}

export default function Post({ postData }) {
  return (
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
}
