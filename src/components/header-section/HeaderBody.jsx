import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import HeaderMyInfo from "./HeaderMyInfo";
import headerPageStyled from "./headerPageStyled.css";
const HeaderBody = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const headerNavWraper = `header-body-wraper ${
        theme === "dark" ? "light-theme-body" : "dark-theme"
    }`;
    return (
        <div className={headerNavWraper}>
            <HeaderMyInfo />
        </div>
    );
};
export default HeaderBody;
