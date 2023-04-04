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
    headerStyle: "center",
    imageStyle: "roundedThumbnail",
    skillDisplay: "stars",
    skillColor: "",
    layout: "",
  });
  const [contactInfo, setContactInfo] = useState({
    address: "Auerstr. 41, 10249",
    city: "Berlin",
    phone: "+49 151 6618 4606",
    email: "daniel.murphy.berlin@gmail.com",
  });
  const [skills, setSkills] = useState([
    { title: "React.js", level: 5 },
    { title: "Node.js", level: 4 },
    { title: "Next.js", level: 3 },
  ]);
  const [personal, setPersonal] = useState({
    text: "Prolific, full stack web developer with a passion for metrics and beating former best-yets. Prototyped 25 new product features per year for Flexor, Inc. Decreased rework by 22% and costs by 15%. Consistently receive high user experience scores for all web development projects, including a 55% increase for Flexor, Inc. Passionate about building world class web applications. One of my sites received a 2015 Webby for Best Navigation and Structure.",
    icon: null,
  });
  const [experience, setExperience] = useState([
    {
      title: "Position",
      companyName: "Company Name",
      location: "Location",
      dates: ["Jan 2022", "Present"],
      bullets: [
        "Planned, developed, tested, maintained and deployed web applications.",
        "Provided troubleshooting and remediation for core products.",
        "Drove best practice implementation in a team of 22 employees.",
      ],
    },
  ]);

  return (
    <GlobalContext.Provider
      value={{
        header,
        setHeader,
        style,
        setStyle,
        contactInfo,
        setContactInfo,
        skills,
        setSkills,
        personal,
        setPersonal,
        experience,
        setExperience,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProviderWrapper };
