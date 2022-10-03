import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import OurserviceDetail from "../components/OurserviceDetail/OurserviceDetail";

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
        <title>{`Our Service | We work for customer satisfaction`}</title>
      </Head>
      <OurserviceDetail />
    </div>
  );
};

export default Ourproject;
