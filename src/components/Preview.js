import React from "react";
import HeaderDisplay from "./infoFields/HeaderDisplay";
import PersonalInfo from "./infoFields/PersonalInfo";

const Preview = () => {
  return (
    <div
      className="col-8 px-5"
      style={{ backgroundColor: "#d3d3d3", minHeight: "100vh" }}
    >
      <div
        className="bg-white mt-5"
        style={{ height: " 100vh", boxShadow: "0px 0px 32px 2px #6767" }}
      >
        <HeaderDisplay />
        <div className="container p-4">
          <div className="row mt-5">
            <div className="col-4">
              <PersonalInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
