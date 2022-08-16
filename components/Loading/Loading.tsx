import React, { useState, useEffect } from "react";
import Image from "next/image";
import myGif from "../../public/images/Final.gif";
import Header from "../../components/Header/Header";
function Loading() {
  const [LoadingPage, setLoadingPage] = useState(false);
  useEffect(() => {
    setLoadingPage(true);
    setTimeout(() => {
      setLoadingPage(false);
    }, 7500);
  }, []);
  return <>{LoadingPage ? <Image src={myGif} alt="" /> }</>;
}

export default Loading;
