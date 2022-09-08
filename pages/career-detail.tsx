import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Careerdetail from "../components/CareerDetail/CareerDetail"

const CareerDetail: NextPage = () => {
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
      <Careerdetail />
    </div>
  );
};

export default CareerDetail;
