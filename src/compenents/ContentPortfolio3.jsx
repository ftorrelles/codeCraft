import React from "react";
import Slider from "react-slick";
import "../styles/portfolio3.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";

const projects = [
    {
        title: "Vivir Chevere",
        image: "/vivirchevere.png",
        description: `software integral de control empresarial.`,
        technology: "construido en React.js y en Node.js",
        available: "Haz click acá para verlo",
        link: "https://vivirchevere.com/",
    },
    {
        title: "caffe Crunch",
        image: "/plantilla1.png",
        description: `Pagina web estatica, plantilla empresa galletas`,
        technology: "Construido en React.js",
        available: "Haz click acá para verlo",
        link: "https://plantilla1-codecraft.netlify.app/",
    },
    {
        title: "Portafolio",
        image: "/ejportfolio.png",
        description: `Pagina web estatica, portafolio personal`,
        technology: "Construido en React.js",
        available: "Haz click acá para verlo",
        link: "https://my-portfolio-ft.netlify.app/",
    },
    {
        title: "Biupoll",
        image: "/biupoll.png",
        description: `Pagina web estatica, empresa investigación de mercado.`,
        technology: "Construido en React.js",
        available: "Haz click acá para verlo",
        link: "https://www.biupoll.com.co/",
    },
    {
        title: "Friend Shop app",
        image: "/friend_shop.png",
        description: `Plantilla Tienda virtual (eCommerce) de artículos de tecnología y del hogar.`,
        technology: "Construido en React.js y en node.js",
        available: "Haz click acá para verlo",
        link: "https://friend-shop-app.netlify.app/",
    },
    {
        title: "Pokédex",
        image: "/pokedex.png",
        description:
            "App para los fanáticos de Pokemon, en la cual pueden buscar información de sus pokémons favoritos.",
        technology: "Construido en React.js",
        available: "Haz click acá para verlo",
        link: "https://pokedex-ft.netlify.app/",
    },
    {
        title: "Betho's",
        image: "/betho.png",
        description: "App para mostrar diferentes tipos de cócteles",
        technology: "Construido en React.js",
        available: "Haz click acá para verlo",
        link: "https://cocktails-ft.netlify.app/",
    },
    {
        title: "Carrito de compra",
        image: "/tienda_ropa.png",
        description: "Plantilla tienda virtual de ropa",
        technology: "Construido en html, css, y javaScript",
        available: "Haz click acá para verlo",
        link: "https://clever-gumdrop-546402.netlify.app/",
    },
];

const ContentPortfolio3 = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            {" "}
            <Container fluid>
                <h2 className="title_portfolio3">
                    Algunos de nuestros proyectos
                </h2>
                <div className="Portfolio3">
                    <Slider {...settings}>
                        {projects.map((project, index) => (
                            <div className="Portfolio__Project3" key={index}>
                                <h3 className="title_project3">
                                    {project.title}
                                </h3>
                                <div className="Portfolio__Project-Image3">
                                    <img
                                        src={project.image}
                                        className="active"
                                        alt=""
                                    />
                                </div>
                                <div className="Portfolio__Project-Description3">
                                    <a
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <p>{project.description}</p>
                                        <p>{project.technology}</p>
                                        <p>{project.available}</p>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </>
    );
};

export default ContentPortfolio3;
