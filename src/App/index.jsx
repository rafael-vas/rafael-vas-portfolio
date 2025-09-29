import "./styles.css";

const cvLink = "#"

import illustration from "../assets/blue-profile.png";

import { DownloadSimple, CheckCircle, LinkedinLogo, GithubLogo, WhatsappLogo, InstagramLogo, MicrosoftOutlookLogo } from "@phosphor-icons/react";

import { Design } from "../components/Design";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Section } from "../components/Section";

import { lists } from "../components/Summary/data";

import { Summary } from "../components/Summary";
import { SummaryHeader } from "../components/SummaryHeader";
import { SummaryTitle } from "../components/SummaryTitle";
import { SummaryContent } from "../components/SummaryContent";
import { SummaryList } from "../components/SummaryList";
import { ContactForm } from "../components/ContactForm";
import { SocialMediaItem } from "../components/SocialMediaItem";
import { RoleItem } from "../components/RoleItem";

export function App() {

  return (
    <div className="app">
      <Design />
      <Header />
      <Navbar />

      <Section name="home" active>
        <article className="article">
          <p className="greeting">Hey, there!</p>
          <h1 className="title">
            I&apos;m <span>Rafael Vas</span>.
          </h1>
          <p className="text">
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
            <div className="info-wrapper">
              <Summary>
                <SummaryHeader>
                  <SummaryTitle
                    forSection="about"
                    titleName="experience"
                    titleContent="Experiences"
                    active
                  />
                  <SummaryTitle
                    forSection="about"
                    titleName="course"
                    titleContent="Education"
                  />
                  <SummaryTitle
                    forSection="about"
                    titleName="idiom"
                    titleContent="Idioms"
                  />
                </SummaryHeader>
                <SummaryContent>
                  <SummaryList
                    active
                    listName="experience"
                    listContent={lists.experiences}
                  />
                  <SummaryList
                    listName="course"
                    listContent={lists.courses}
                  />
                  <SummaryList
                    listName="idiom"
                    listContent={lists.idioms}
                  />
                </SummaryContent>
              </Summary>
              <div className="social-media-container">
                <h3 className="subtitle">Reach me out:</h3>
                <ul className="social-media-list">
                    <SocialMediaItem
                      link="https://www.linkedin.com/in/rafaelvas"
                      label="LinkedIn"
                      icon={<LinkedinLogo className="icon" />}
                    />
                    <SocialMediaItem
                      link="mailto:rafaelvas2011@hotmail.com"
                      label="Email"
                      icon={<MicrosoftOutlookLogo className="icon" />}
                    />
                    <SocialMediaItem
                      link="https://github.com/rafael-vas"
                      label="GitHub"
                      icon={<GithubLogo className="icon" />}
                    />
                    <SocialMediaItem
                      link="https://www.instagram.com/hafaeeu"
                      label="Instagram"
                      icon={<InstagramLogo className="icon" />}
                    />
                    <SocialMediaItem
                      link="https://wa.me/5581987665063?text=Olá, gostaria de entrar em contato com Rafael Vasconcelos."
                      label="WhatsApp"
                      icon={<WhatsappLogo className="icon" />}
                    />
                </ul>
              </div>
          </div>
        </div>
        <div className="article">
        <h2 className="title"><span>About me</span></h2>
              <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, modi tempore nam expedita tempora possimus pariatur fugit magnam, esse impedit neque? Veritatis commodi a aliquam ratione ipsam dicta asperiores minus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor similique vitae esse, reiciendis eos, fugiat repellat animi quod pariatur accusamus laboriosam modi, dicta accusantium facilis consequatur. Mollitia quibusdam inventore neque.</p>
        </div>
        <ul className="roles">
          <RoleItem
            icon={<CheckCircle className="icon" />}
            label="Front-end Developer"
            description="Websites & E-commerce"
          />
          <RoleItem
            icon={<CheckCircle className="icon" />}
            label="UX/UI Designer"
            description="UX Research & UI Design"
          />
        </ul>

      </Section>

      <Section name="technologies">
        <Summary>
          <SummaryHeader>
              <SummaryTitle
                forSection="technologies"
                titleName="hard-skill"
                titleContent="Hard Skills"
                active
              />
              <SummaryTitle
                forSection="technologies"
                titleName="soft-skill"
                titleContent="Soft Skills"
              />
          </SummaryHeader>
          <SummaryContent>
            <SummaryList
              active
              listName="hard-skill"
              listContent={lists.hardSkills}
            />
            <SummaryList
              listName="soft-skill"
              listContent={lists.softSkills}
            />
          </SummaryContent>
        </Summary>
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
        <ContactForm />
      </Section>
    </div>
  );
}
