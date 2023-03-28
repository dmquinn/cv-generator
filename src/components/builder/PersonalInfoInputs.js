import { useContext } from "react";
import { GlobalContext } from "../../context";

const Personal = () => {
  const { setPersonalInfo, personalInfo, setStyle, style } =
    useContext(GlobalContext);
  const { address, city, email, phone } = personalInfo;
  const infoFields = [
    { placeholder: "41 Auerstr. 10249", target: address },
    { placeholder: "Berlin", target: city },
    { placeholder: "+4915166184606", target: phone },
    { placeholder: "daniel.murphy.berlin@gmail.com", target: email },
  ];
  return (
    <form>
      <div className="mb-3 mt-3">
        {infoFields.map((field, i) => {
          const targ = field.target;
          return (
            <input
              key={i}
              placeholder={field.placeholder}
              className="form-control"
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, tar: e.target.value })
              }
            />
          );
        })}
      </div>
    </form>
  );
};

export default Personal;
