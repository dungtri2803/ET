import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import CareerApplys from "../components/CareerDetail/CareerApply"

const CareerApply: NextPage = () => {
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
      <CareerApplys />
    </div>
  );
};

export default CareerApply;
