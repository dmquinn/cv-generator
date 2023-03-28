import React, { useContext } from "react";
import { GlobalContext } from "../../context";

const PersonalInfo = () => {
  const { header, style } = useContext(GlobalContext);
  return <div class="row justify-content-center">PersonalInfo</div>;
};

export default PersonalInfo;
