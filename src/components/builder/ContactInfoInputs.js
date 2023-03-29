import { useContext } from "react";
import { GlobalContext } from "../../context";

const ContactInfoInputs = () => {
  const { setContactInfo, contactInfo } = useContext(GlobalContext);
  const infoFields = [
    { placeholder: "Auerstr. 41, 10249", target: "address" },
    { placeholder: "Berlin", target: "city" },
    { placeholder: "+4915166184606", target: "phone" },
    { placeholder: "daniel.murphy.berlin@gmail.com", target: "email" },
  ];
  return (
    <form>
      <div className="mb-3 mt-3">
        {infoFields.map((field, i) => {
          return (
            <input
              key={i}
              placeholder={field.placeholder}
              className="form-control my-2"
              onChange={(e) => {
                setContactInfo({
                  ...contactInfo,
                  [field.target]: e.target.value,
                });
              }}
            />
          );
        })}
      </div>
    </form>
  );
};

export default ContactInfoInputs;
