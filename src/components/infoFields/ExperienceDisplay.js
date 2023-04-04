import React, { useContext } from "react";
import { MdWork } from "react-icons/md";
import { GlobalContext } from "../../context";

const ExperienceDisplay = () => {
  const { experience, style } = useContext(GlobalContext);
  const { title, location, dates, bullets } = experience[0];
  return (
    <div className="row mt-5">
      <div className="col-1">
        <MdWork />
      </div>
      <div className="col-10">
        <div className="d-flex flex-row justify-content-between">
          <p className="fw-bold">{title}</p>
          <p className="fw-bold text-muted">{location}</p>
        </div>{" "}
        <p className="text-muted" style={{ marginTop: "-12px" }}>
          {dates[0]} - {dates[1]}
        </p>
        <ul className="smallText">
          {bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceDisplay;
