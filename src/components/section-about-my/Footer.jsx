import copyRite from "../../image/Copyright-Symbol.png";
import sectionAboutStyled from "./sectionAboutStyled.css";

const Footer = () => {
    return (
        <footer>
            <div>
                Copyright
                <img src={copyRite} alt="" width={20} />
                2023 goga barnabishvili
            </div>
        </footer>
    );
};
export default Footer;
