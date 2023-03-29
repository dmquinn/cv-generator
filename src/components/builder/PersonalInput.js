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

const ContactInfoInputs = () => {
  const [color, setColor] = useState("black");

  const { personal, setPersonal } = useContext(GlobalContext);
  const iconPicker = [
    <MdPerson2 size={30} color={color} />,
    <MdOutlinePersonOutline size={30} />,
    <MdAccountCircle size={30} />,
    <MdInfoOutline size={30} />,
    <MdRocketLaunch size={30} />,
    <MdOutlineSurfing size={30} />,
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
      <p className="mt-2">Choose an icon for your personal section</p>
      <div className="d-flex flex-row justify-content-around">
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
      <button onClick={() => setColor("blue")}>go</button>
    </div>
  );
};

export default ContactInfoInputs;
