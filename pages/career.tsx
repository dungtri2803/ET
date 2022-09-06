import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Careers from "../components/Career/Career"

const Career: NextPage = () => {
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
      <Careers />
    </div>
  );
};

export default Career;
