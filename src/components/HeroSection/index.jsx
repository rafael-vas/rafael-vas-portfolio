import "./styles.css"

import avatar from "../../assets/avatar.png"

import { DownloadSimple } from "@phosphor-icons/react"

export function Hero() {
    return (
        <section className="hero active">
            <div className="hero-inner">
                <img
                className="avatar"
                src={avatar}
                alt="A avatar picture of me"
                />
                <article className="article">
                    <h1 className="title">Hey! I&apos;m <span>Rafael</span></h1>
                    <p className="text">Welcome to my digital sanctuary, explore it to witness the fusion of creativity and precision, where every click tells a story, and every design speaks in stereo.</p>
                    <a className="btn" target="_blank" href="https://drive.google.com/file/d/1LoEPMgwWAh4BoRtNWx7ZyBGqlNCBDc_q/view?usp=sharing" rel="noreferrer">
                        Download CV
                        <DownloadSimple size={20} />
                    </a>
                </article>
            </div>
        </section>
    )
}