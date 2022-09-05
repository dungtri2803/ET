import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Blogs from "../components/Blog/Blog";

const Blog: NextPage = () => {
  const [LoadingPage, setLoadingPage] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 5000);
  }, []);
  return (
    <div>
      <Head>
        <title>{`ET`}</title>
      </Head>
      <Blogs />
    </div>
  );
};

export default Blog;
