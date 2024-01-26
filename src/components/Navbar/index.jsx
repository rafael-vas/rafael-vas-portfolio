import "./styles.css"

import { User, Suitcase, Certificate, House, Atom, PaperPlaneTilt } from "@phosphor-icons/react"

import { NavLink } from "../../components/NavLink"

export function Navbar() {

    return (
        <nav className="navbar">
            <NavLink Icon={House} text="home" active />
            <NavLink Icon={User} text="about" />
            <NavLink Icon={Atom} text="technologies" />
            <NavLink Icon={Suitcase} text="projects" />
            <NavLink Icon={Certificate} text="certificates" />
            <NavLink Icon={PaperPlaneTilt} text="contact" />
        </nav>
    )
}