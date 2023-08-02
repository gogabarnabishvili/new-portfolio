import Footer from "./Footer";
import sectionAboutStyled from "./sectionAboutStyled.css";
const Contact = () => {
    return (
        <div className="contact-info">
            <ul>
                <li>
                    Phone :<a href="tel:599085333">599-08-53-33</a>
                </li>
                <li>
                    Linkedin :
                    <a href="https://www.linkedin.com/in/goga-barnabishvili-564398252/">
                        goga barnabishvili
                    </a>
                </li>
                <li>
                    Github :
                    <a href="https://github.com/gogabarnabishvili">
                        gogabarnabishvili
                    </a>
                </li>
                <li>
                    Email :
                    <a href="goga.barnabishvili96@gmail.com?subject=Mail from you portfolio">
                        goga.barnabishvili96@gmail.com
                    </a>
                </li>
            </ul>
            {/* <Footer /> */}
        </div>
    );
};
export default Contact;
