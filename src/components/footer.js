import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="container">
                    <div className="footer-links-row">
                        <div className="footer-logo-wrapper">
                            <Link to="/" className="footer-logo-link">
                                <img src={require("../images/metabnb-white.svg").default} alt="Metabnb" className="footer-logo-img" />
                            </Link>

                            <div className="social-media-wrapper">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                                    <img src={require("../images/facebook.svg").default} alt="facebook" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                                    <img src={require("../images/instagram.svg").default} alt="instagram" />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                                    <img src={require("../images/twitter.svg").default} alt="twitter" />
                                </a>
                            </div>
                        </div>

                        <div className="footer-links-wrapper">
                            <div className="footer-link-block">
                                <div className="footer-block-title">Community</div>
                                <ul>
                                    <li>
                                        <Link to="#" className="footer-link">NFT</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="footer-link">Tokens</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="footer-link">Landlords</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="footer-link">Discords</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-link-block">
                                <div className="footer-block-title">Places</div>
                                <ul>
                                    <li>
                                        <Link to="#" className="footer-link">Castle</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="footer-link">Farms</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="footer-link">Beach</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="footer-link">Learn more</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-link-block">
                                <div className="footer-block-title">About us</div>
                                <ul>
                                    <li>
                                        <Link to="#" className="footer-link">Road map</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="footer-link">Creators </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="footer-link">Career</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="footer-link">Contact us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer-copyright-row">
                        &copy; 2022 Metabnb
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;