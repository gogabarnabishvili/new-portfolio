import sectionAboutStyled from "./sectionAboutStyled.css";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { IoLogoCss3, IoLogoReact } from "react-icons/io5";
import { MdOutlineDoneOutline } from "react-icons/md";
import { TbBrandJavascript } from "react-icons/tb";
import useFlag from "../../image/us-flag-icon-png-16.jpg";
import russ from "../../image/russia-flag-png-xl.png";
import georgia from "../../image/georgia-flag-jpg-xl.jpg";
const SkillList = () => (
    <div className="skill-list-wraper">
        <table>
            <tr>
                <th className="html-icon">
                    <p className="html-text">HTML</p>
                    <AiFillHtml5 color="#fff" />
                </th>
                <th>
                    <p>CSS</p>
                    <IoLogoCss3 color="#fff" />
                </th>
                <th>
                    <p>JavaScript</p>
                    <TbBrandJavascript color="#fff" />
                </th>
                <th>
                    <p>React</p>
                    <IoLogoReact color="#fff" />
                </th>
                <th>
                    <p>GitHub</p>
                    <AiFillGithub color="#fff" />
                </th>
            </tr>
            <tr>
                <td>
                    <MdOutlineDoneOutline color="green" />
                </td>
                <td>
                    <MdOutlineDoneOutline color="green" />
                </td>
                <td>
                    <MdOutlineDoneOutline color="green" />
                </td>
                <td>
                    <MdOutlineDoneOutline color="green" />
                </td>
                <td>
                    <MdOutlineDoneOutline color="green" />
                </td>
            </tr>
        </table>
        <table>
            <tr>
                <th>
                    <img src={useFlag} alt="Use" width={20} />
                </th>
                <th>
                    <img src={russ} alt="russia" width={20} />
                </th>
                <th>
                    <img src={georgia} alt="georgia" width={20} />
                </th>
            </tr>
            <tr>
                <td>proficient</td>
                <td>reading proficiency</td>
                <td>native</td>
            </tr>
        </table>
    </div>
);
export default SkillList;
