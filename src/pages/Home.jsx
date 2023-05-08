import "../styles/home.css";
import Carousel from "react-bootstrap/Carousel";
import About from "./About";
import WhyUs from "./WhyUs";
import Portfolio from "./Portfolio";
import Consultancy from "../compenents/Consultancy";

const Home = () => {
    return (
        <>
            <section className="home">
                <Carousel indicators={false} interval={7000}>
                    <Carousel.Item>
                        <picture>
                            <source
                                media="(min-width: 992px)"
                                srcSet="/4.png"
                            />
                            <source
                                media="(max-width: 991px)"
                                srcSet="/1.png"
                            />
                            <img
                                className="d-block w-100"
                                src="/4.png"
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
                                srcSet="/3.png"
                            />
                            <source
                                media="(max-width: 991px)"
                                srcSet="/2.png"
                            />
                            <img
                                className="d-block w-100"
                                src="/3.png"
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

            <About />
            <WhyUs />
            <Consultancy />
            <Portfolio />
        </>
    );
};

export default Home;
