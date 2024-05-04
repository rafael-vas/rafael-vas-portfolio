import "./styles.css";

const cvLink = "https://drive.google.com/file/d/1LoEPMgwWAh4BoRtNWx7ZyBGqlNCBDc_q/view?usp=sharing"

// import avatar from "../assets/avatar.png";
import illustration from "../assets/illustration.png";

import { DownloadSimple, CheckCircle, LinkedinLogo, GithubLogo, WhatsappLogo, InstagramLogo, MicrosoftOutlookLogo } from "@phosphor-icons/react";

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
        {/* <img className="avatar" src={avatar} alt="An avatar of me" /> */}
        <article className="article">
          <p className="greeting">Hey, there!</p>
          <h1 className="title">
            I&apos;m <span>Rafael Vas</span>.
            {/* Great to see you! */}
          </h1>
          <p className="text">
            {/* As a <span>Front-End Developer</span>, I merge design and
            development to create exceptional digital experiences. My focus is
            on quality work, where web development meets innovation. */}
            I&apos;m a <span>Front-end Developer</span> with years of experience in web development, working with both large and small companies as a freelancer and in teams.
          </p>
          <a
            className="btn"
            target="_blank"
            href={cvLink}
            rel="noreferrer"
          >
            Download CV
            <DownloadSimple size={18} />
          </a>
        </article>
      </Section>

      <Section name="about">
        <div className="info">
            <figure>
              <img className="illustration" src={illustration} alt="An illustration of me" />
            </figure>
            <article className="article">
              <h2 className="title"><span>About me</span></h2>
              <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, modi tempore nam expedita tempora possimus pariatur fugit magnam, esse impedit neque? Veritatis commodi a aliquam ratione ipsam dicta asperiores minus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor similique vitae esse, reiciendis eos, fugiat repellat animi quod pariatur accusamus laboriosam modi, dicta accusantium facilis consequatur. Mollitia quibusdam inventore neque.</p>
              <div className="social-media-container">
                <h3 className="subtitle">Reach me out:</h3>
                <ul className="social-media-list">
                    <li className="social-media">
                      <a href="https://www.linkedin.com/in/rafaelvas" target="_blank" rel="noopener noreferrer">
                        <LinkedinLogo className="icon" />
                      </a>
                    </li>
                    <li className="social-media">
                      <a href="mailto:rafaelvas2011@hotmail.com" target="_blank" rel="noopener noreferrer">
                        <MicrosoftOutlookLogo className="icon" />
                      </a>
                    </li>
                    <li className="social-media">
                      <a href="https://github.com/rafael-vas" target="_blank" rel="noopener noreferrer">
                        <GithubLogo className="icon" />
                      </a>
                    </li>
                    <li className="social-media">
                      <a href="https://www.instagram.com/hafaeeu" target="_blank" rel="noopener noreferrer">
                        <InstagramLogo className="icon" />
                      </a>
                    </li>
                    <li className="social-media">
                      <a href="https://wa.me/5581987665063?text=Olá, gostaria de entrar em contato com Rafael Vasconcelos." target="_blank" rel="noopener noreferrer">
                        <WhatsappLogo className="icon" />
                      </a>
                    </li>
                </ul>
              </div>
          </article>
        </div>
        <ul className="roles">
          <li className="role">
            <CheckCircle className="icon" />
            <p className="role-text">
              <strong>Front-end Developer</strong>
              <span>Websites & E-commerce</span>
            </p>
          </li>
          {/* <li className="role">
            <CheckCircle className="icon" />
            <p className="role-text">
              <strong>Web Designer</strong>
              <span>Websites, Landing Pages & E-commerce</span>
            </p>
          </li> */}
          <li className="role">
            <CheckCircle className="icon" />
            <p className="role-text">
              <strong>UX/UI Designer</strong>
              <span>UX Research & UI Design</span>
            </p>
          </li>
        </ul>
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
