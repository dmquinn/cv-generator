import React, { useContext } from "react";
import { GlobalContext } from "../../context";

const ContactInfo = () => {
  const { contactInfo } = useContext(GlobalContext);
  const { address, city, phone, email } = contactInfo;
  return (
    <div className="text-center lh-1">
      <h5 className="mb-4 text-muted">○ Contact Details ○</h5>
      <p>{address}</p>
      <p>{city}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
};

export default ContactInfo;
