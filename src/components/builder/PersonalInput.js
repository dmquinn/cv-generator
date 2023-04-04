import { useContext, useState } from "react";
import { GlobalContext } from "../../context";
import {
  MdPerson2,
  MdOutlinePersonOutline,
  MdAccountCircle,
  MdRocketLaunch,
  MdInfoOutline,
  MdOutlineSurfing,
} from "react-icons/md";
import ColorPicker from "./ColorPicker";

const ContactInfoInputs = () => {
  const [color, setColor] = useState("black");
  const colors = ["black", "#376692", "#802626", "#c36314", "#0c8333"];
  const { personal, setPersonal, setStyle, style } = useContext(GlobalContext);
  const iconPicker = [
    <MdPerson2 size={20} color={color} />,
    <MdOutlinePersonOutline size={20} color={color} />,
    <MdAccountCircle size={20} color={color} />,
    <MdInfoOutline size={20} color={color} />,
    <MdRocketLaunch size={20} color={color} />,
    <MdOutlineSurfing size={20} color={color} />,
  ];
  return (
    <div className="mb-3 mt-3">
      <textarea
        className="form-control"
        placeholder={personal.text}
        id="floatingTextarea2"
        style={{ height: "200px" }}
        onChange={(e) => {
          setPersonal({ ...personal, text: e.target.value });
        }}
      ></textarea>
      <p className="mt-4">Choose an icon for your personal section</p>
      <div className="d-flex flex-row justify-content-around px-5">
        {iconPicker.map((icon, i) => (
          <div
            onClick={() => {
              setPersonal({ ...personal, icon: icon });
            }}
            key={i}
          >
            {icon}
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default ContactInfoInputs;
