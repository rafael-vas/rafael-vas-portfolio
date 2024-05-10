import "./styles.css";

export function SocialMediaItem({ icon, label, link }) {
  return (
    <li className="social-media">
      <a className="link" href={link} target="_blank" rel="noopener noreferrer">
        {icon}
        <span className="label">{label}</span>
      </a>
    </li>
  );
}
