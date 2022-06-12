import { getPostData } from "../lib/md";
import utilStyles from "../assets/css/index.module.css";
import Navbar from "./navbar";

export async function getStaticProps() {
    const postData = await getPostData("licence");
    return {
      props: {
        postData
      }
    };
}

export default function Licence({ postData }) {
  return (
    <div>
      <Navbar />
      <div 
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        className={utilStyles.licence}
      />
    </div>
  );
}