import brazilFlag from "../../assets/brazil.png"
import canadaFlag from "../../assets/canada.png"
import spainFlag from "../../assets/spain.png"

import htmlSvg from "../../assets/html.svg";
import cssSvg from "../../assets/css.svg";
import javascriptSvg from "../../assets/javascript.svg";
import typescriptSvg from "../../assets/typescript.svg";
import reactSvg from "../../assets/react.svg";
import bootstrapSvg from "../../assets/bootstrap.svg";
import figmaSvg from "../../assets/figma.svg";
import tailwindSvg from "../../assets/tailwind.svg";
import vscodeSvg from "../../assets/vscode.svg";
import gitSvg from "../../assets/git.svg";
// import photoshopSvg from "../../assets/photoshop.svg";

import { Briefcase, GraduationCap, AirplaneTilt, ChatCircleDots, Lightbulb, UsersFour, SealCheck, Brain, UserSwitch } from "@phosphor-icons/react"

export const lists = {
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
  hardSkills: [
    {
      icon: <img className="icon" src={htmlSvg} alt="html icon" />,
      textLabel: "HTML",
      textDescription: null,
    },
    {
      icon: <img className="icon" src={cssSvg} alt="html icon" />,
      textLabel: "CSS",
      textDescription: null,
    },
    {
      icon: <img className="icon" src={javascriptSvg} alt="html icon" />,
      textLabel: "JavaScript",
      textDescription: null,
    },
    {
      icon: <img className="icon" src={typescriptSvg} alt="html icon" />,
      textLabel: "TypeScript",
      textDescription: null,
    },
    {
      icon: <img className="icon" src={reactSvg} alt="html icon" />,
      textLabel: "React",
      textDescription: null,
    },
    {
      icon: <img className="icon" src={bootstrapSvg} alt="html icon" />,
      textLabel: "Bootstrap",
      textDescription: null,
    },
    {
      icon: <img className="icon" src={tailwindSvg} alt="html icon" />,
      textLabel: "Tailwind",
      textDescription: null,
    },
    {
      icon: <img className="icon" src={gitSvg} alt="html icon" />,
      textLabel: "Git",
      textDescription: null,
    },
    {
      icon: <img className="icon" src={figmaSvg} alt="html icon" />,
      textLabel: "Figma",
      textDescription: null,
    },
    {
      icon: <img className="icon" src={vscodeSvg} alt="html icon" />,
      textLabel: "VScode",
      textDescription: null,
    },
  ],
  softSkills: [
    {
      icon: <ChatCircleDots className="icon" weight="fill" />,
      textLabel: "Communication",
      textDescription: null,
    },
    {
      icon: <Lightbulb className="icon" weight="fill" />,
      textLabel: "Creativity",
      textDescription: null,
    },
    {
      icon: <Brain className="icon" weight="fill" />,
      textLabel: "Critical Thinking",
      textDescription: null,
    },
    {
      icon: <SealCheck className="icon" weight="fill" />,
      textLabel: "Problem-Solving",
      textDescription: null,
    },
    {
      icon: <UsersFour className="icon" weight="fill" />,
      textLabel: "Teamwork",
      textDescription: null,
    },
    {
      icon: <UserSwitch className="icon" weight="fill" />,
      textLabel: "Adaptability",
      textDescription: null,
    },
  ]
}