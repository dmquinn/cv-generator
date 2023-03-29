import React, { useContext } from "react";
import { GlobalContext } from "../context";

const StarRating = ({ skill, hover, setHover, rating }) => {
  const { skills, setSkills } = useContext(GlobalContext);
  return (
    <div className="star-rating">
      {skill &&
        [...Array(5)].map((star, i) => {
          const target = skills.filter((item) => item.title === skill.title);
          return (
            <button
              type="button"
              key={i}
              className={
                i <= (hover || target[0].level || rating) ? "on" : "off"
              }
              onClick={() => {
                const skillIndex = skills.findIndex(
                  (item) => item.title === skill.title
                );
                let newArr = [...skills];
                newArr[skillIndex].level = i;
                setSkills(newArr);
              }}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(skill?.level)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
    </div>
  );
};
export default StarRating;
