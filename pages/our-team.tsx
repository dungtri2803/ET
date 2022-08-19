import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import OurteamDetail from "../components/OurteamDetail/OurteamDetail";

const Ourteam: NextPage = () => {
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
      <OurteamDetail />
    </div>
  );
};

export default Ourteam;
