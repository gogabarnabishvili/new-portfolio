import { useRef, useState } from "react";
import HeaderNavBar from "./HeaderNavBar";
import headerPageStyled from "./headerPageStyled.css";
import HeaderMenuOpen from "./HeaderMenuOpen";
import HeaderLogoDark from "./HeaderLogoDark";
import HeaderMyInfo from "./HeaderMyInfo";
import HeaderBody from "./HeaderBody";

const HeaderSection = () => {
    // const [openMenu, setOpenMenu] = useState(null);
    const [openMenu, setOpenMenu] = useState("header-menu-close");
    const handleChangeClassName = () => {
        if (openMenu == "header-menu-close") {
            setOpenMenu("header-menu-open");
        } else {
            setOpenMenu("header-menu-close");
        }
    };
    return (
        <div className="header-section">
            <div>
                <HeaderNavBar onClick={handleChangeClassName} />
                <HeaderLogoDark />
                <HeaderMenuOpen
                    // onClikWork={scrollToWork}
                    onClickOpenMenu={handleChangeClassName}
                    clasname={openMenu}
                />
            </div>
            <HeaderBody />
        </div>
    );
};
export default HeaderSection;
