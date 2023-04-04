import { useContext } from "react";
import { GlobalContext } from "../../context";
import ColorPicker from "./ColorPicker";

const ExperienceInputs = () => {
  const { setExperience, experience, setStyle, style } =
    useContext(GlobalContext);
  const inputs = [
    { type: "text", title: "position" },
    { type: "text", title: "location" },
    { type: "date", title: "dates" },
  ];
  console.log(experience);
  return (
    <form>
      {inputs.map((input, i) => {
        return (
          <div className="mb-3 mt-3">
            <input
              placeholder={input.title}
              type={input.type}
              className="form-control"
              onChange={(e) =>
                setExperience({ ...experience, [input.title]: e.target.value })
              }
            />
          </div>
        );
      })}
    </form>
  );
};

export default ExperienceInputs;
