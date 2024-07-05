import { useState } from "react";

// const accordionStyles = {
//   maxWidth: "600px",
// };

// const accordionTitleStyles = {
//   display: "flex",
//   justifyContent: "space-between",
//   cursor: "pointer",
//   padding: "5px",
//   background: "#21aeca",
// };

// const accordionContentStyles = {
//   padding: "5px",
//   background: "#39b9d2",
// };

const AccordionSection = ({
  section,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={toggleSection}>
        <div>{section.title}</div>
        <button className={isActiveSection ? "accordion-button accordion-button-active" : "accordion-button"} type="button"></button>
      </div>
      {isActiveSection && (
        <div className="accordion-content">{section.content}</div>
      )}
    </div>
  );
};

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(4);
  return (
    <div className="accordion">
      {sections.map((section, index) => (
        <AccordionSection
          section={section}
          key={index}
          isActiveSection={index === activeIndex}
          setActiveIndex={setActiveIndex}
          sectionIndex={index}
        />
      ))}
    </div>
  );
};

export default Accordion;
