import React from "react";
import HeaderDisplay from "./infoFields/HeaderDisplay";
import ContactInfoDisplay from "./infoFields/ContactInfoDisplay";
import SkillsDisplay from "./infoFields/SkillsDisplay";
import PersonalDisplay from "./infoFields/PersonalDisplay";
import ExperienceDisplay from "./infoFields/ExperienceDisplay";

const Preview = () => {
  return (
    <div
      className="col-8 px-5"
      style={{ backgroundColor: "#d3d3d3", minHeight: "100vh" }}
    >
      <div
        className="bg-white mt-5 fixed-left"
        style={{ boxShadow: "0px 0px 32px 2px #6767" }}
      >
        <HeaderDisplay />
        <div className="container p-4">
          <div className="row mt-4">
            <div className="col-4">
              <ContactInfoDisplay />
              <SkillsDisplay />
            </div>
            <div className="col-8">
              <PersonalDisplay />
              <ExperienceDisplay />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
