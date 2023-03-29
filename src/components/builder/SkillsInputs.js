import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context";
import StarRating from "../StarRating";
import {
  MdRemoveCircle,
  MdStarRate,
  MdBarChart,
  MdAddCircle,
} from "react-icons/md";
const SkillsInputs = () => {
  const [hover, setHover] = useState(0);

  const { skills, setSkills, setStyle, style } = useContext(GlobalContext);

  const stylePicker = [
    { title: "stars", icon: <MdStarRate size={40} className="icon m-4" /> },
    { title: "bars", icon: <MdBarChart size={40} className="icon m-4" /> },
    { title: "dots", icon: <h2 className="icon m-4 ">⬤</h2> },
  ];

  return (
    <>
      {skills.map((skill, i) => {
        return (
          <div
            className="d-flex flex-row justify-content-around mt-4 mb-3"
            key={i}
          >
            <>
              <input
                placeholder={skill.title}
                className="form-control"
                onChange={(e) => {
                  let newArr = [...skills];
                  newArr[i].title = e.target.value;
                  setSkills(newArr);
                }}
                style={{ width: "50%" }}
              />
              <StarRating hover={hover} skill={skill} setHover={setHover} />{" "}
              <MdRemoveCircle
                size={40}
                color="#ff7979"
                onClick={() => {
                  setSkills(
                    skills.filter((item) => item.title !== skill.title)
                  );
                }}
                style={{ cursor: "pointer" }}
              />
            </>{" "}
          </div>
        );
      })}
      <div className="d-flex flex-row-reverse me-1">
        <MdAddCircle
          size={40}
          color="009b8c"
          onClick={() => {
            setSkills([...skills, {}]);
          }}
        />
      </div>
      <p>How would you like your skills displayed?</p>
      <div className="d-flex flex-row px-5">
        {stylePicker.map((skillStyle, i) => (
          <div
            onClick={() => {
              setStyle({ ...style, skillDisplay: skillStyle.title });
            }}
            key={i}
          >
            {skillStyle.icon}
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillsInputs;
