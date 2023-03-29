import React from "react";
import HeaderInputs from "./HeaderInputs";
import ContactInfoInputs from "./ContactInfoInputs";
import SkillsInputs from "./SkillsInputs";
import PersonalInput from "./PersonalInput";

const Builder = () => {
  const accordionSections = [
    {
      component: <HeaderInputs />,
      title: "Header Section",
      indexText: "One",
    },
    {
      component: <ContactInfoInputs />,
      title: "Contact Information",
      indexText: "Two",
    },
    {
      component: <SkillsInputs />,
      title: "Skills",
      indexText: "Three",
    },
    {
      component: <PersonalInput />,
      title: "Personal Introduction",
      indexText: "Four",
    },
  ];
  return (
    <div className="col-4 p-5">
      <div
        className="accordion accordion-flush mt-3"
        id="accordionFlushExample"
      >
        {accordionSections.map((section, i) => {
          return (
            <div className="accordion-item" key={i}>
              <h2
                className="accordion-header"
                id={`flush-heading${section.indexText}`}
              >
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse${section.indexText}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapse${section.indexText}`}
                >
                  {section.title}
                </button>
              </h2>
              <div
                id={`flush-collapse${section.indexText}`}
                className="accordion-collapse collapse"
                aria-labelledby={`flush-heading${section.indexText}`}
                // data-bs-parent="#accordionFlushExample"
              >
                {section.component}
              </div>
            </div>
          );
        })}
      </div>{" "}
    </div>
  );
};

export default Builder;
