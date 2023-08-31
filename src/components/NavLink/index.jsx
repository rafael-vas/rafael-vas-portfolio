import "./styles.css"

export function NavLink({ Icon, text, active = false }) {

    function handleShowClickedSection(e) {
        const activeLink = e.currentTarget
        const links = document.querySelectorAll(".nav-link");
        const sections = document.querySelectorAll(".app > section")

        links.forEach((link, index) => {
            if (link == activeLink) {
                link.classList.add("active")
                sections[index].classList.add("active")
                sections[index].classList.remove("hidden")
            } else {
                link.classList.remove("active")
                sections[index].classList.remove("active")
                sections[index].classList.add("hidden")
            }
        })
    }


    return (
        <a
         href="#"
         className={`nav-link ${text} ${active ? "active" : ""}`}
         onClick={handleShowClickedSection}
        >
            {<Icon className="nav-icon" size={32}/>}
            <strong className="nav-text">{text}</strong>
        </a>
    )
}