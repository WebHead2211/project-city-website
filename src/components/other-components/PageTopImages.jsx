import { useState, useEffect } from "react";
import PageTop from "./PageTop";

let currentImageIndex = 0;

export default function PageTopImages({pageTitle, pageSubTitle, id = undefined, children}) {
  // const [pageImageArray, setPageImageArray] = useState();

  // setInterval(() => {
  //   if (document.documentElement.scrollTop > 500) return;
  //   if (pageImageArray) {
  //     let nextImageIndex = currentImageIndex == pageImageArray.length - 1 ? 0 : currentImageIndex + 1;
  //     pageImageArray[currentImageIndex].className = "home-image home-image-inactive";
  //     pageImageArray[nextImageIndex].className = "home-image home-image-active";
  //     currentImageIndex = nextImageIndex;
  //   }
  // }, 3000);

  // useEffect(() => {
  //   setPageImageArray(document.querySelectorAll(".home-image"));
  // }, []);
  return (
    <>
      <PageTop title={pageTitle} subTitle={pageSubTitle} id={id}>
        {children}
      </PageTop>
    </>
  );
}
