import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import ProgressBar from "../ProgressBar";

const PersonalInfo = () => {
  const { skills, style } = useContext(GlobalContext);

  return (
    <div className="text-center lh-1">
      <h5 className="mb-4 mt-5 text-muted">○ Skills ○</h5>
      {skills.map((skill, i) => (
        <div key={i}>
          <p className="mt-2">{skill.title}</p>

          {style.skillDisplay === "stars" ? (
            [...Array(5)].map((star, i) => {
              return (
                <span className={i <= skill.level ? "on" : "off"} key={i}>
                  &#9733;
                </span>
              );
            })
          ) : style.skillDisplay === "dots" ? (
            [...Array(5)].map((star, i) => {
              return (
                <span
                  className={i <= skill.level ? "onDot px-1" : "offDot px-1"}
                  key={i}
                >
                  ⬤
                </span>
              );
            })
          ) : (
            <div className="px-5">
              <ProgressBar rating={skill.level} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PersonalInfo;
