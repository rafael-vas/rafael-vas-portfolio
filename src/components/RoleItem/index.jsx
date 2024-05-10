import "./styles.css";

export function RoleItem({ icon, label, description }) {
  return (
    <li className="role">
      {icon}
      <p className="role-text">
        <strong>{label}</strong>
        <span>{description}</span>
      </p>
    </li>
  );
}
