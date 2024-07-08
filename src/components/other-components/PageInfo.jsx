import { useEffect, useState } from "react";
import "../../styles/PageInfo.css";
import Divider from "../divider-components/Divider";

export default function PageInfo({ title, subTitle, description }) {
  

  return (
    <>
      <div className="page-info-container">
        {/* <div id="page-info-text-container">
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
          <p className="roboto-regular">{description}</p>
        </div> */}
        <div id="page-info-image-container">
          <div className="page-info-image-background"></div>
          {/* <img
            src="./images/home/mumbai-2.jpg"
            alt="Mumbai"
            className={`page-info-image active`}
          /> */}
          <Divider>
            <div className="page-info-text">
              <h1 className="page-info-heading">{title}</h1>
              <h2>{subTitle}</h2>
              <p className="roboto-regular">{description}</p>
            </div>
          </Divider>
        </div>
      </div>
    </>
  );
}
