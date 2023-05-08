import "../styles/portfolio.css";

const ContentPortfolio = () => {
    return (
        <>
            <h2 className="title_portfolio">Algunos de nuestros proyectos</h2>
            <div className="Portfolio">
                <div className="Portfolio__Project">
                    <h3 className="title_project">Friend Shop app </h3>
                    <div className="Portfolio__Project-Image">
                        <img src="/friend.PNG" className="active" alt="" />
                    </div>
                    <div className="Portfolio__Project-Description">
                        <a
                            style={{ textDecoration: "none", color: "inherit" }}
                            href="https://friend-shop-app.netlify.app/"
                            target={"_blank"}
                        >
                            <p>
                                Construcción del frontend de una tienda virtual
                                (eCommerce) de artículos de tecnología y del
                                hogar. <br />
                                <br />
                                construido en React.js <br />
                                <br />
                                haz click acá para verlo
                            </p>
                        </a>
                    </div>
                </div>
                <div className="Portfolio__Project">
                    <h3 className="title_project">Pokédex</h3>
                    <div className="Portfolio__Project-Image">
                        <img src="/Pokedex.PNG" className="active" alt="" />
                    </div>
                    <div className="Portfolio__Project-Description">
                        <a
                            style={{ textDecoration: "none", color: "inherit" }}
                            href="https://pokedex-ft.netlify.app/"
                            target={"_blank"}
                        >
                            <p>
                                Creación de app para los fanáticos de Pokemon,
                                en la cual pueden buscar información de sus
                                pokémons favoritos. <br />
                                <br />
                                construido en React.js <br />
                                <br />
                                haz click acá para verlo
                            </p>
                        </a>
                    </div>
                </div>
                <div className="Portfolio__Project">
                    <h3 className="title_project">CRUD de inventario</h3>
                    <div className="Portfolio__Project-Image">
                        <img
                            src="/crud products.PNG"
                            className="active"
                            alt=""
                        />
                    </div>
                    <div className="Portfolio__Project-Description">
                        <a
                            style={{ textDecoration: "none", color: "inherit" }}
                            href="https://crud-products-ft.netlify.app/"
                            target={"_blank"}
                        >
                            <p>
                                Creación de inventario de tienda de productos.{" "}
                                <br />
                                <br />
                                construido en React.js <br />
                                <br />
                                haz click acá para verlo
                            </p>
                        </a>
                    </div>
                </div>
                <div className="Portfolio__Project">
                    <h3 className="title_project">Betho's</h3>
                    <div className="Portfolio__Project-Image">
                        <img src="/Betho.PNG" className="active" alt="" />
                    </div>
                    <div className="Portfolio__Project-Description">
                        <a
                            style={{ textDecoration: "none", color: "inherit" }}
                            href="https://cocktails-ft.netlify.app/"
                            target={"_blank"}
                        >
                            <p>
                                app para mostrar diferentes tipos de cócteles.{" "}
                                <br />
                                <br />
                                construido en React.js <br />
                                <br />
                                haz click acá para verlo
                            </p>
                        </a>
                    </div>
                </div>
                <div className="Portfolio__Project">
                    <h3 className="title_project">Carrito de compra</h3>
                    <div className="Portfolio__Project-Image">
                        <img src="/carrito.PNG" className="active" alt="" />
                    </div>
                    <div className="Portfolio__Project-Description">
                        <a
                            style={{ textDecoration: "none", color: "inherit" }}
                            href="https://clever-gumdrop-546402.netlify.app/"
                            target={"_blank"}
                        >
                            <p>
                                Carrito de compra funcional <br />
                                <br />
                                Fue un proyecto vanilla usando html, css, y
                                javaScript <br />
                                <br />
                                haz click acá para verlo
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContentPortfolio;
