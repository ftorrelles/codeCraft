// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const ContentPortfolio2 = () => {
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                 },
//             },
//         ],
//     };

//     return (
//         <div className="photo-gallery-container">
//             <h2 className="photo-gallery-title">Nuestra galería</h2>
//             <div className="slider-wrapper">
//                 <Slider {...settings}>
//                     <div className="photo-gallery-slide">
//                         <img src="/Betho.PNG" />
//                     </div>
//                     <div className="photo-gallery-slide">
//                         <img src="/carrito.PNG" />
//                     </div>
//                     <div className="photo-gallery-slide">
//                         <img src="/crud products.PNG" />
//                     </div>
//                     <div className="photo-gallery-slide">
//                         <img src="/friend.PNG" />
//                     </div>
//                     <div className="photo-gallery-slide">
//                         <img src="/Pokedex.PNG" />
//                     </div>
//                 </Slider>
//             </div>
//         </div>
//     );
// };

// export default ContentPortfolio2;

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ContentPortfolio2 = () => {
    //efecto texto
    const [hoveredSlide, setHoveredSlide] = useState(null);
    //efecto carousel
    const handleSlideHover = (index) => {
        setHoveredSlide(index);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
            <h2 className="photo-gallery-title">Nuestra galería</h2>
            <div className="slider-wrapper">
                <Slider {...settings}>
                    <div
                        className={`photo-gallery-slide ${
                            hoveredSlide === 0 ? "hovered" : ""
                        }`}
                        onMouseEnter={() => handleSlideHover(0)}
                        onMouseLeave={() => handleSlideHover(null)}
                    >
                        {hoveredSlide === 0 ? (
                            <div className="slide-text">
                                Texto al colocar el cursor
                            </div>
                        ) : null}
                        <img src="/Betho.PNG" />
                    </div>
                    <div
                        className={`photo-gallery-slide ${
                            hoveredSlide === 1 ? "hovered" : ""
                        }`}
                        onMouseEnter={() => handleSlideHover(1)}
                        onMouseLeave={() => handleSlideHover(null)}
                    >
                        {hoveredSlide === 1 ? (
                            <div className="slide-text">
                                Texto al colocar el cursor
                            </div>
                        ) : null}
                        <img src="/carrito.PNG" />
                    </div>
                    <div
                        className={`photo-gallery-slide ${
                            hoveredSlide === 2 ? "hovered" : ""
                        }`}
                        onMouseEnter={() => handleSlideHover(2)}
                        onMouseLeave={() => handleSlideHover(null)}
                    >
                        {hoveredSlide === 2 ? (
                            <div className="slide-text">
                                Texto al colocar el cursor
                            </div>
                        ) : null}
                        <img src="/crud products.PNG" />
                    </div>
                    <div
                        className={`photo-gallery-slide ${
                            hoveredSlide === 3 ? "hovered" : ""
                        }`}
                        onMouseEnter={() => handleSlideHover(3)}
                        onMouseLeave={() => handleSlideHover(null)}
                    >
                        {hoveredSlide === 3 ? (
                            <div className="slide-text">
                                Texto al colocar el cursor
                            </div>
                        ) : null}
                        <img src="/Pokedex.PNG" />
                    </div>
                    <div
                        className={`photo-gallery-slide ${
                            hoveredSlide === 4 ? "hovered" : ""
                        }`}
                        onMouseEnter={() => handleSlideHover(4)}
                        onMouseLeave={() => handleSlideHover(null)}
                    >
                        {hoveredSlide === 4 ? (
                            <div className="slide-text">
                                Texto al colocar el cursor
                            </div>
                        ) : null}
                        <img src="/friend.PNG" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default ContentPortfolio2;
