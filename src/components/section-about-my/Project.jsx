import discord from "../../image/discord1.jpg";
import weather from "../../image/Screenshot 2023-07-26 183627.jpg";
import monkey from "../../image/monky1.jpg";
import loading from "../../image/ingilizce-loading-ne-demek-ingilizce-bilgisayar-terimleri.jpg";
import sectionAboutStyled from "./sectionAboutStyled.css";

const Project = () => {
    return (
        <div className="section-project-wraper">
            <a
                target="_blank"
                href="https://main.dzxh449w290b7.amplifyapp.com/landigPage"
            >
                <div className="section-project-box-discord">
                    <img
                        className="discord-cover-img"
                        src={discord}
                        alt="Discord Clone"
                    />

                    <div className="image-in-title">
                        <h3>Discord cloen</h3>
                        <div className="discord-info">
                            <p>
                                JavaScript <span>72.9%</span>
                            </p>
                            <p>
                                CSS <span>25.2%</span>
                            </p>
                            <p>
                                HTML <span>1.9%</span>
                            </p>
                        </div>
                    </div>
                </div>
            </a>

            <a
                target="_blank"
                href="https://gogabarnabishvili.github.io/Weather/?fbclid=IwAR3KBveg7uW9zXVtvJgiVPxBtNZbc4-MmerZw6kZtSCiAbOdXLaiu3fdR48"
            >
                <div className="section-project-box-discord">
                    <img
                        className="discord-cover-img"
                        src={weather}
                        alt="weather"
                    />

                    <div className="image-in-title">
                        <h3>Weather</h3>
                        <div className="discord-info">
                            <p>
                                JavaScript <span>57.9%</span>
                            </p>
                            <p>
                                CSS <span>30.3%</span>
                            </p>
                            <p>
                                HTML <span>11.8%</span>
                            </p>
                        </div>
                    </div>
                </div>
            </a>

            <a
                target="_blank"
                href="https://gogabarnabishvili.github.io/NFT-Stores/"
            >
                <div className="section-project-box-discord">
                    <img
                        className="discord-cover-img"
                        src={monkey}
                        alt="nft-stores"
                    />

                    <div className="image-in-title">
                        <h3>NFT-Stores</h3>
                        <div className="discord-info">
                            <p>
                                JavaScript <span>0.8%</span>
                            </p>
                            <p>
                                CSS <span>45.1%</span>
                            </p>
                            <p>
                                HTML <span>54.1%</span>
                            </p>
                        </div>
                    </div>
                </div>
            </a>

            <div className="section-project-box-discord">
                <img
                    className="discord-cover-img"
                    src={loading}
                    alt="work wise"
                />

                <div className="image-in-title">
                    <h3>Work Wise</h3>
                    <div className="discord-info">
                        <p>
                            JavaScript <span>67.6%</span>
                        </p>
                        <p>
                            CSS <span>19.2%</span>
                        </p>
                        <p>
                            HTML <span>19.2%</span>
                        </p>
                        <p>
                            Rich Text Format <span>10.3%</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Project;
