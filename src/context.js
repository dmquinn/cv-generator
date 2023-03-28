import { createContext, useState } from "react";

const GlobalContext = createContext();

function GlobalProviderWrapper(props) {
  const [header, setHeader] = useState({
    image:
      "https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post.jpg",
    name: "John Doe",
    tagline: "Full-Stack Web Developer",
  });
  const [style, setStyle] = useState({
    headerColor: "black",
    imageStyle: "roundedThumbnail",
  });
  const [personalInfo, setPersonalInfo] = useState({
    address: "",
    city: "",
    phone: "",
    email: "",
  });

  return (
    <GlobalContext.Provider
      value={{
        header,
        setHeader,
        style,
        setStyle,
        personalInfo,
        setPersonalInfo,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProviderWrapper };
