import "./styles.css";

export function Section({ active = false, name, children }) {
  return (
    <section className={`${name} ${active ? 'active' : 'hidden'}`}>
      <div className={`${name}-inner`}>
        {children}
      </div>
    </section>
  );
}
