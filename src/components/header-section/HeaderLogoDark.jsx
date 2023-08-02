import { useContext, useState } from "react";
import headerPageStyled from "./headerPageStyled.css";
import { ThemeContext } from "../../ThemeContext";
import geo from "../../image/georgia-flag-jpg-xl.jpg";
const HeaderLogoDark = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [changeModul, setChangeModul] = useState("change-mode-wraper");

    const changeModulehend = () => {
        if (changeModul === "change-mode-wraper") {
            setChangeModul("change-mode-wraper-2");
        } else {
            setChangeModul("change-mode-wraper");
        }
    };
    const wrapperClassName = `header-logo-wraper ${
        theme === "dark" ? "light-theme" : "dark-theme"
    }`;
    const changeModuleClasname = `${changeModul} ${
        theme === "dark" ? "light-theme-module" : "dark-theme-module"
    }`;
    return (
        <div className={wrapperClassName}>
            <div>
                <div>
                    <h1>PorTfolio.</h1>
                </div>
                <div className="header-logo-ringth">
                    <p>
                        <a href="#">Github</a>
                    </p>

                    <div
                        className={changeModuleClasname}
                        onClick={() => {
                            changeModulehend();
                            toggleTheme();
                        }}
                    >
                        <div className="cahnge-mode-box"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderLogoDark;
