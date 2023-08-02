import { useContext, useState } from "react";
import headerPageStyled from "./headerPageStyled.css";
import { ThemeContext } from "../../ThemeContext";

const HeaderNavBar = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [menubtn1, setMenuBtn1] = useState("menu-line-1");
    const [menubtn2, setMenuBtn2] = useState("menu-line-2");
    const handleChangeClassName = () => {
        if (menubtn1 == "menu-line-1") {
            setMenuBtn1("menu-line-3");
            setMenuBtn2("menu-line-4");
        } else {
            setMenuBtn1("menu-line-1");
            setMenuBtn2("menu-line-2");
        }
    };
    const headerNavWraper = `header-nav-bar ${
        theme === "dark" ? "light-theme-nav" : "dark-theme"
    }`;
    return (
        <div onClick={props.onClick} className={headerNavWraper}>
            <nav onClick={handleChangeClassName}>
                <ul>
                    <li>
                        <div className="menu-log-m">M</div>
                    </li>
                    <li className="menu-line-box">
                        <div className={menubtn1}></div>
                        <div className={menubtn2}></div>
                    </li>
                    <li>
                        <div>
                            <p>01</p>
                            <p>/</p>
                            <p>08</p>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default HeaderNavBar;
