import "./styles.css";

import brazilFlag from "../../assets/brazil.png"
import canadaFlag from "../../assets/canada.png"
import spainFlag from "../../assets/spain.png"

import { Briefcase, GraduationCap, AirplaneTilt } from "@phosphor-icons/react"

import { SummaryList } from "../SummaryList";
import { SummaryTitle } from "../SummaryTitle";

const lists = {
  experiences: [
    {
      icon: <AirplaneTilt className="icon" />,
      textLabel: "Exchange Student in Canada",
      textDescription: "NB International Student Program",
    },
    {
      icon: <Briefcase className="icon" />,
      textLabel: "Web Designer",
      textDescription: "Atimo US",
    },
    {
      icon: <Briefcase className="icon" />,
      textLabel: "Programming Monitor",
      textDescription: "Federal Institute of Pernambuco",
    },
  ],
  courses: [
    {
      icon: <GraduationCap className="icon" />,
      textLabel: "Front-end Programming Course",
      textDescription: "DevQuest",
    },
    {
      icon: <GraduationCap className="icon" />,
      textLabel: "UX Design Fundamentals Course",
      textDescription: "Google",
    },
    {
      icon: <GraduationCap className="icon" />,
      textLabel: "Bachelor of Technology in Software Development",
      textDescription: "Tiradentes University",
    },
  ],
  idioms: [
    {
      icon: <img className="icon" src={brazilFlag} alt="brazilian flag" />,
      textLabel: "Portuguese",
      textDescription: "Native",
    },
    {
      icon: <img className="icon" src={canadaFlag} alt="canadian flag" />,
      textLabel: "English",
      textDescription: "Fluent",
    },
    {
      icon: <img className="icon" src={spainFlag} alt="spanish flag" />,
      textLabel: "Spanish",
      textDescription: "Intermediate",
    },
  ],
}

export function Summary() {
  return (
    <div className="summary">
      <header className="summary-header">
        <SummaryTitle titleName="experience" titleContent="Experiences" active/>
        <SummaryTitle titleName="course" titleContent="Education" />
        <SummaryTitle titleName="idiom" titleContent="Idioms" />
      </header>
      <div className="summary-content">
        <SummaryList
          active
          listName="experience"
          listContent={lists.experiences}
        />
        <SummaryList
          listName="course"
          listContent={lists.courses}
        />
        <SummaryList
          listName="idiom"
          listContent={lists.idioms}
        />
      </div>
    </div>
  );
}
