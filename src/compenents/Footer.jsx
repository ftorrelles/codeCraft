import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer_container">
                    <div className="footer-content">
                        <h3 style={{ textAlign: "center" }}>
                            Nuestros servicios
                        </h3>
                        <div style={{ textAlign: "center" }}>
                            <ul>
                                <li>
                                    <Link to="/services">
                                        Páginas web estáticas
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services">
                                        Páginas web dinámicas
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services">
                                        Páginas web de comercio electrónico
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services">
                                        Páginas web de blogs
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services">
                                        Páginas web educativas
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-content">
                        <h3 style={{ textAlign: "center" }}>
                            <a href="/#">
                                <strong>codeCraft</strong>
                            </a>
                        </h3>
                    </div>
                    <div className="footer-content">
                        <h3 style={{ textAlign: "center" }}>Redes sociales</h3>
                        <div className="div_icons_contact">
                            <a
                                href="https://www.linkedin.com/company/escodecraft/about/"
                                target="_blank"
                            >
                                <i className="bx bxl-linkedin"></i>
                            </a>
                            <a href="https://wa.me/50685775699" target="_blank">
                                <i className="bx bxl-whatsapp"></i>
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=100092651354702"
                                target="_blank"
                            >
                                <i className="bx bxl-facebook-circle"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="copy">
                    <p className="footer_copy">
                        © codeCraft. All rigths reserved{" "}
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
