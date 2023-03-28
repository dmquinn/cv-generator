import React from "react";
import HeaderInputs from "./HeaderInputs";
import PersonalInfoInputs from "./PersonalInfoInputs";

const Builder = () => {
  const accordionSections = [
    {
      component: <HeaderInputs />,
      title: "Header Section",
      indexText: "One",
    },
    {
      component: <PersonalInfoInputs />,
      title: "Personal Information",
      indexText: "Two",
    },
  ];
  return (
    <div className="col-4">
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
