import { useRef, useState } from "react";
import HeaderMenuOpen from "../header-section/HeaderMenuOpen";
import HeaderSection from "../header-section/HeaderSection";
import { Link } from "react-scroll";
import mainPage from "./mainPageStyled.css";
import AbuotMe from "../section-about-my/AboutMy";
import Project from "../section-about-my/Project";
import SkillList from "../section-about-my/SkillList";
import Contact from "../section-about-my/Contact";
import Footer from "../section-about-my/Footer";
const MainPage = () => {
    // const workRef = useRef(null);

    // const scrollToWork = () => {
    //     workRef.current.scrollIntoView({ behavior: "smooth" });
    // };

    // const widthInPixels = viewportSize.width + "px";

    // console.log("სიგანი:", widthInPixels, "სიმაღლე:", heightInPixels);

    // if (heightInPixels !== "100vh") {
    //     document.body.style.overflowY = "auto";
    // } else {
    //     document.body.style.overflowY = "hidden";
    // }
    return (
        <div className="main-page-wraper">
            <HeaderSection />
            {/* <div ref={workRef}></div> */}
            <div className="test" id="AboutMe">
                <div className="title">
                    <h2>Abuot Me</h2>
                </div>
                <AbuotMe />
            </div>
            <div className="test" id="project">
                <div className="title">
                    <h2>Projects</h2>
                </div>
                <Project />
            </div>
            <div className="test" id="skilllist">
                <div className="title">
                    <h2>Skill</h2>
                </div>
                <SkillList />
            </div>
            <div className="test" id="contact">
                <div className="title">
                    <h2>Contact</h2>
                </div>
                <Contact />
            </div>
            <Footer />
        </div>
    );
};
export default MainPage;
