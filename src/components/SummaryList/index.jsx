import "./styles.css";

import { SummaryItem } from "../SummaryItem";

export function SummaryList({ active=false, listName, listContent }) {
    return (
        <ul className={`${listName}-list ${active ? "active" : "hidden"}`}>
          {
            listContent.map((content, i) => {
                return (
                    <SummaryItem
                      key={i}
                      label={listName}
                      icon={content.icon}
                      textLabel={content.textLabel}
                      textDescription={content.textDescription}
                    />
                )
            })
          }
        </ul>
    )
}