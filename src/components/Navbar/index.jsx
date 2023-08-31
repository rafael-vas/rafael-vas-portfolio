import "./styles.css"

import { User, Suitcase, Certificate, House } from "@phosphor-icons/react"

import { NavLink } from "../../components/NavLink"

export function Navbar() {

    return (
        <nav className="navbar">
            <NavLink Icon={House} text="home" active />
            <NavLink Icon={User} text="about" />
            <NavLink Icon={Suitcase} text="projects" />
            <NavLink Icon={Certificate} text="certificates" />
        </nav>
    )
}