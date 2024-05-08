import "./styles.css";

export function SummaryItem({ label, icon, textLabel, textDescription }) {
    return (
        <li className={label}>
            {icon}
            <p className="text">
              <span className="label">{textLabel}</span>
              <span className="description">{textDescription}</span>
            </p>
        </li>
    )
}