/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import M from "materialize-css";
import ConnectWalletModal from "./connectWalletModal";

const Navbar = () => {
    useEffect(()=> {
        var elemsSidenav = document.querySelectorAll(".sidenav");
        M.Sidenav.init(elemsSidenav);

        var elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal);
    }, []);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div id="nav-wrapper">
            <nav>
                <div className="container">
                    <div className="nav-items-wrapper">
                        <Link to="/" className="brand-logo-wrapper">
                            <img src={require("../images/metabnb.svg").default} alt="Metabnb" className="brand-logo-img" />
                        </Link>

                        <ul className="nav-links hide-on-med-and-down">
                            <li>
                                <Link to="/" className="nav-link" onClick={scrollToTop}>Home</Link>
                            </li>
                            <li>
                                <Link to="/place-to-stay" className="nav-link" onClick={scrollToTop}>Place to stay</Link>
                            </li>
                            <li>
                                <a href="/#nft" className="nav-link">NFTs</a>
                            </li>
                            <li>
                                <Link to="#" className="nav-link" onClick={scrollToTop}>Community</Link>
                            </li>
                        </ul>

                        <button className="nav-btn modal-trigger hide-on-med-and-down" data-target="connect-wallet-modal">Connect wallet</button>

                        <ul className="dn-mobile ul-nav" id="nav-mobile-2">
                            <li>
                                <a href="#" data-target="slide-out" className="sidenav-trigger right">
                                    <img src={require("../images/menu.svg").default} alt="menu" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <ul id="slide-out" className="sidenav">
                <div className="sidenav-logo">
                    <Link to="/" className="sidenav-close">
                        <img src={require("../images/metabnb.svg").default} alt="metabnb" className="brand-logo-img" />
                    </Link>
                </div>

                <li>
                    <Link to="/" className="nav-link sidenav-close" onClick={scrollToTop}>Home</Link>
                </li>
                <li>
                    <Link to="/place-to-stay" className="nav-link sidenav-close" onClick={scrollToTop}>Place to stay</Link>
                </li>
                <li>
                    <a href="/#nft" className="nav-link sidenav-close">NFTs</a>
                </li>
                <li className="no-bottom-border">
                    <Link to="#" className="nav-link sidenav-close" onClick={scrollToTop}>Community</Link>
                </li>
                
                <li className="connect-wallet-li">
                    <button className="nav-btn modal-trigger sidenav-close" data-target="connect-wallet-modal">Connect wallet</button>
                </li>
            </ul>

            <ConnectWalletModal />
        </div>
    )
}

export default Navbar;