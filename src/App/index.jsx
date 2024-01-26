import "./styles.css";

// import avatar from "../assets/avatar.png";

import { DownloadSimple } from "@phosphor-icons/react";

import { Design } from "../components/Design";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Section } from "../components/Section";

export function App() {
  return (
    <div className="app">
      <Design />
      <Header />
      <Navbar />

      <Section name="home" active>
        {/* <img className="avatar" src={avatar} alt="A avatar picture of me" /> */}
        <article className="article">
          <p className="greeting">Hey, there!</p>
          <h1 className="title">
            I&apos;m <span>Rafael Vas</span>.
          </h1>
          <p className="text">
            As a <span>Front-End Developer</span>, I merge design and
            development to create exceptional digital experiences. My focus is
            on quality work, where web development meets innovation.
          </p>
          <a
            className="btn"
            target="_blank"
            href="https://drive.google.com/file/d/1LoEPMgwWAh4BoRtNWx7ZyBGqlNCBDc_q/view?usp=sharing"
            rel="noreferrer"
          >
            Download CV
            <DownloadSimple size={20} />
          </a>
        </article>
      </Section>

      <Section name="about">
        <h1 className="title">
          This is <span>About</span> Section
        </h1>
      </Section>

      <Section name="technologies">
        <h1 className="title">
          This is <span>Technologies</span> Section
        </h1>
      </Section>

      <Section name="projects">
        <h1 className="title">
          This is <span>Projects</span> Section
        </h1>
      </Section>

      <Section name="certificates">
        <h1 className="title">
          This is <span>Certificates</span> Section
        </h1>
      </Section>

      <Section name="contact">
        <h1 className="title">
          This is <span>Contact</span> Section
        </h1>
      </Section>
    </div>
  );
}
