import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import OurprojectDetail from "../components/OurprojectDetail/OurprojectDetail";

const Ourproject: NextPage = () => {
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
      <OurprojectDetail />
    </div>
  );
};

export default Ourproject;
