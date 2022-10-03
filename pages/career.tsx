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
        <title>{`Join our amazing team.`}</title>
      </Head>
      <Careers />
    </div>
  );
};

export default Career;
