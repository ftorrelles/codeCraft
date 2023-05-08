import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ContentPortfolio2 = () => {
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
                breakpoint: 768,
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
                    <div className="photo-gallery-slide">
                        <img src="/Betho.PNG" />
                    </div>
                    <div className="photo-gallery-slide">
                        <img src="/carrito.PNG" />
                    </div>
                    <div className="photo-gallery-slide">
                        <img src="/crud products.PNG" />
                    </div>
                    <div className="photo-gallery-slide">
                        <img src="/friend.PNG" />
                    </div>
                    <div className="photo-gallery-slide">
                        <img src="/Pokedex.PNG" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default ContentPortfolio2;
