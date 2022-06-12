import utilStyles from "../assets/css/index.module.css";

import { getPostData } from "../lib/md";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import Link from "next/link";

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
      <Navbar />
      <article>
        <h1 className={utilStyles.homeTitle}>{postData.title}</h1>
        <h2 className={utilStyles.homeSubtitle}>{postData.homeSubtitle}</h2>
        <div className={utilStyles.homeDescription}>{postData.homeDescription}</div>
        <div className={utilStyles.center}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href={"/gallery"}>
              <a className={utilStyles.homeBtn}>
                Discover
              </a>
            </Link>
          </motion.div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
}
