import { ThemeContext } from "../../ThemeContext";
import HeaderSoc from "./HeaderSoc";
import headerPageStyled from "./headerPageStyled.css";
import React, { useContext, useRef, useState } from "react";
import { Link } from "react-scroll";
const HeaderMenuOpen = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const headerNavWraper = `header-menu-wraper ${
        theme === "dark" ? "light-theme-menu" : "dark-theme"
    }`;
    return (
        <div onClick={props.onClickOpenMenu} className={props.clasname}>
            <div className={headerNavWraper}>
                <div className="menu-nav-bar">
                    <nav>
                        <ul>
                            <li>
                                <a
                                    href="#AboutMe"
                                    onClick={() => {
                                        document.body.style.overflowY =
                                            "scroll";
                                    }}
                                >
                                    About me
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#project"
                                    onClick={() => {
                                        document.body.style.overflowY =
                                            "scroll";
                                    }}
                                >
                                    Project
                                </a>
                            </li>
                            <li>
                                {" "}
                                <a
                                    href="#skilllist"
                                    onClick={() => {
                                        document.body.style.overflowY =
                                            "scroll";
                                    }}
                                >
                                    Skill
                                </a>
                            </li>
                            {/* <li>THOUGHTS</li> */}
                            <li>
                                <a
                                    href="#contact"
                                    onClick={() => {
                                        document.body.style.overflowY =
                                            "scroll";
                                    }}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <HeaderSoc id="work" />
                </div>
            </div>
        </div>
    );
};
export default HeaderMenuOpen;
