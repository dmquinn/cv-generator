import React, { useContext } from "react";
import { GlobalContext } from "../../context";

const PersonalInfo = () => {
  const { personal } = useContext(GlobalContext);

  return (
    <div className="row">
      <div className="col-1">{personal.icon}</div>
      <div className="col-10">{personal.text}</div>
    </div>
  );
};

export default PersonalInfo;
