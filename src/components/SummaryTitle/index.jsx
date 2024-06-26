import "./styles.css"

export function SummaryTitle({ active=false, titleName, titleContent, forSection }) {

    function handleShowClickedList(e) {
        const activeList = e.currentTarget
        const listsTitle = document.querySelectorAll(
            `.${forSection} .summary-header > strong`
        );

        const lists = document.querySelectorAll(
            `.${forSection} .summary-content > ul`
        );

        listsTitle.forEach((listTitle, index) => {
            if (listTitle == activeList) {
                listTitle.classList.add("active")
                lists[index].classList.add("active")
                lists[index].classList.remove("hidden")
            } else {
                listTitle.classList.remove("active")
                lists[index].classList.remove("active")
                lists[index].classList.add("hidden")
            }
        })
    }

    return (
        <strong
            onClick={handleShowClickedList}
            className={`${titleName}-title ${active ? "active" : ""}`}
        >
            {titleContent}
        </strong>
    )
}