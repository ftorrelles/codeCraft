import "../styles/home.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Portfolio from "./Portfolio";
import Consultancy from "../compenents/Consultancy";
import ContentAbout from "../compenents/ContentAbout";
// import ContentWhyUs from "../compenents/ContentWhyUs";
import ContentWhyUs2 from "../compenents/ContentWhyUs2";
import ContentServices from "../compenents/ContentServices";
import ContentContact from "../compenents/ContentContact";

const Home = () => {
    // interval={7000}

    return (
        <>
            <section className="home">
                <Carousel indicators={false} fade>
                    <Carousel.Item>
                        <picture>
                            <source
                                media="(min-width: 992px)"
                                srcSet="/4-3.png"
                            />
                            <source
                                media="(max-width: 991px)"
                                srcSet="/1.png"
                            />
                            <img
                                className="d-block w-100"
                                src="/4-3.png"
                                alt="first slide"
                            />
                        </picture>
                        <div className="text-container">
                            <h3>
                                <strong>
                                    Destaca en línea con una página web
                                    atractiva moderna y que refleje la esencia
                                    de tu marca
                                </strong>
                            </h3>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <picture>
                            <source
                                media="(min-width: 992px)"
                                srcSet="/3-3.png"
                            />
                            <source
                                media="(max-width: 991px)"
                                srcSet="/2.png"
                            />
                            <img
                                className="d-block w-100"
                                src="/3-3.png"
                                alt="Second slide"
                            />
                        </picture>
                        <div className="text-container">
                            <h3>
                                <strong>
                                    Déjanos transformar tus ideas en realidad.
                                </strong>
                            </h3>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>

            <ContentAbout />

            {/* <ContentWhyUs /> */}
            <ContentWhyUs2 />

            <ContentServices />
            <Portfolio />
            <Consultancy />
            <ContentContact />
        </>
    );
};

export default Home;
