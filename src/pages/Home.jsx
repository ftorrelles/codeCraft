import "../styles/home.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Portfolio from "./Portfolio";
import Consultancy from "../compenents/Consultancy";
import ContentAbout from "../compenents/ContentAbout";
import ContentWhyUs from "../compenents/ContentWhyUs";

const Home = () => {
    return (
        <>
            <section className="home">
                <Carousel fade indicators={false} interval={7000}>
                    <Carousel.Item>
                        <picture>
                            <source
                                media="(min-width: 992px)"
                                srcSet="/4-2.png"
                            />
                            <source
                                media="(max-width: 991px)"
                                srcSet="/1.png"
                            />
                            <img
                                className="d-block w-100"
                                src="/4-2.png"
                                alt="first slide"
                            />
                        </picture>
                        <div className="text-container">
                            <h3>
                                {" "}
                                <strong>
                                    Destaca en línea con una página web
                                    atractiva moderna y al mismo tiempo
                                    reflejando la esencia se tu marca
                                </strong>
                            </h3>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <picture>
                            <source
                                media="(min-width: 992px)"
                                srcSet="/3-2.png"
                            />
                            <source
                                media="(max-width: 991px)"
                                srcSet="/2.png"
                            />
                            <img
                                className="d-block w-100"
                                src="/3-2.png"
                                alt="Second slide"
                            />
                        </picture>
                        <div className="text-container">
                            <h3>
                                {" "}
                                <strong>
                                    Déjanos transforma tus ideas en realidad.
                                </strong>
                            </h3>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>

            <ContentAbout />
            <ContentWhyUs />
            <Consultancy />
            <Portfolio />
        </>
    );
};

export default Home;
