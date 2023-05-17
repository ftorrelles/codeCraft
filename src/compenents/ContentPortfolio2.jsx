import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ContentPortfolio2 = () => {
    // Efecto texto
    const [hoveredSlide, setHoveredSlide] = useState(null);

    // Efecto carousel
    const handleSlideHover = (index) => {
        setHoveredSlide(index);
    };

    const projects = [
        {
            image: "/Betho.PNG",
            text: "Texto al colocar el cursor",
        },
        {
            image: "/carrito.PNG",
            text: "Texto al colocar el cursor",
        },
        {
            image: "/crud products.PNG",
            text: "Texto al colocar el cursor",
        },
        {
            image: "/Pokedex.PNG",
            text: "Texto al colocar el cursor",
        },
        {
            image: "/friend.PNG",
            text: "Texto al colocar el cursor",
        },
    ];

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
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="photo-gallery-container">
            <h2 className="photo-gallery-title">
                Alguno de nuestros proyectos
            </h2>
            <div className="slider-wrapper">
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <div
                            className={`photo-gallery-slide ${
                                hoveredSlide === index ? "hovered" : ""
                            }`}
                            onMouseEnter={() => handleSlideHover(index)}
                            onMouseLeave={() => handleSlideHover(null)}
                            key={index}
                        >
                            {hoveredSlide === index ? (
                                <div className="slide-text">{project.text}</div>
                            ) : null}
                            <img src={project.image} alt={`Project ${index}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ContentPortfolio2;
