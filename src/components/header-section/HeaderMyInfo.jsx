import avatar from "../../image/viber_image_2023-08-02_19-37-48-748.jpg";
import headerPageStyled from "./headerPageStyled.css";
import { BsArrowDownShort } from "react-icons/bs";
const HeaderMyInfo = () => {
    function getViewportSize() {
        const width = Math.max(
            document.documentElement.clientWidth || 0,
            window.innerWidth || 0
        );

        const height = Math.max(
            document.documentElement.clientHeight || 0,
            window.innerHeight || 0
        );

        return { width, height };
    }
    const viewportSize = getViewportSize();
    const heightInPixels = viewportSize.height + "px";
    function scrollToPosition() {
        window.scrollBy({
            top: 500,
            left: 0,
            behavior: "smooth",
        });

        if (heightInPixels !== "100vh") {
            document.body.style.overflowY = "scroll";
        } else {
            document.body.style.overflowY = "hidden";
        }
    }
    return (
        <div className="info-avatar">
            <div>
                <h2>I am</h2>
                <p>Goga Barnabishvili</p>
                <p>a Web-Developers</p>
            </div>
            <div className="scroll-icon">
                <BsArrowDownShort onClick={() => scrollToPosition()} />
            </div>
            <img src={avatar} alt="" />
        </div>
    );
};
export default HeaderMyInfo;
