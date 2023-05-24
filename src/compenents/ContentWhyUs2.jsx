import { Container } from "react-bootstrap";
import "../styles/whyUs2.css";
//libreria de animaciones
import "animate.css";
//libreria para detectar cuando la seccion este en el vh
import { useInView } from "react-intersection-observer";

const whyUs = [
    {
        Title: "Sitios web soñados",
        description:
            "Pagaras solo por lo que necesitas, podras escoger el paquete deseado",
        options: [
            {
                titleOption: "Paquete basico",
                descritionOption:
                    "Con este paquete podras escoger entre plantillas pre-hechas en react y en WordPress",
                url: "/plantilla3.png",
                color: "radial-gradient(circle, #2d7d9c, #0f1626)",
            },
            {
                titleOption: "Paquete tetris",
                descritionOption:
                    "Tus escoges entre una variedad de modelos las secciones para tu pagina",
                url: "/secciones.png",
                color: "radial-gradient(circle, #2d7d9c, #0f1626)",
            },
            {
                titleOption: " Paquete perzonalizado",
                descritionOption:
                    "Creamos las secciones que imagines, con los detalles que solicites",
                url: "/creamos.png",
                color: "radial-gradient(circle, #2d7d9c, #0f1626)",
            },
        ],
    },
    {
        Title: "Planes accesibles de mantenimiento",
        description:
            "Deseamos que elijas el plan con el que te sientas conforme.",
        options: [
            {
                titleOption: "Mantenimiento Basico",
                descritionOption:
                    "El plan basico incluye: cambios semanales en las secciones ya creadas (paletas de colores, letras, img etc), soporte temas de hosting, dominios etc",
                url: "/mantenimiento4.png",
                color: "radial-gradient(circle, #d3d1d1, #7a7979)",
            },
            {
                titleOption: "Mantenimiento dinamico",
                descritionOption:
                    "El plan incluye todo el mantenimiento basico, adicional podras agregar secciones nuevas en la pagina",
                url: "/mantenimiento5.png",
                color: "radial-gradient(circle, #d3d1d1, #7a7979)",
            },
            {
                titleOption: "Paquete funcionalidades",
                descritionOption:
                    "Segun evoluciones, queremos que tu pagina evolucione contigo; agregamos las funcionalidades que necesites en el camino.",
                url: "/funcionalidades.png",
                color: "radial-gradient(circle, #d3d1d1, #7a7979)",
            },
        ],
    },
    {
        Title: "Garantía de satisfacción y bonos de referidos",
        description:
            "Nuestra meta es transformar las ideas en realidad; Por ellos te ofrecemos una garantia de satisfacción y al mismo tiempo recibas beneficios, si referencias personas que realicen sus proyectos con nosotros",
        options: [
            {
                titleOption: "Cambio deseado",
                descritionOption:
                    "Si no estás satisfecho con el resultado final, trabajaremos contigo para hacer las correcciones necesarias y asegurar tu satisfacción. Valido en los primeros 3 días despues de estar en producción.",
                url: "/satisfaccion.png",
                color: "radial-gradient(circle,  #0f1626,#2d7d9c)",
            },
            {
                titleOption: "Descuentos increibles",
                descritionOption:
                    "Descuentos en la creación de tu sitio web o en el mantenimiento de tu pagina.",
                url: "/descuentos.png",
                color: "radial-gradient(circle,  #0f1626,#2d7d9c)",
            },
        ],
    },
];

const ContentWhyUs2 = () => {
    //logica libreria react-intersection-observer
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    return (
        <Container fluid style={{ backgroundColor: "#f8f8f8" }}>
            <div>
                <div
                    className={`title_section animate__animated ${
                        inView ? "animate__fadeIn" : ""
                    }`}
                    ref={ref}
                >
                    <h2>¿Por qué elegir codeCraft?</h2>
                    <p>Te contamos brevemente porque somos tu mejor opción</p>
                </div>

                {whyUs.map((section, index) => (
                    <div key={index} className="why-us-section triangle">
                        <h3>{section.Title}</h3>
                        <p>{section.description}</p>
                        <div className="options-container curved ">
                            {section.options.map((option, index) => (
                                <div
                                    key={index}
                                    // style={{ background: option.color }}
                                    className={`option animate__animated animate__delay-1s ${
                                        inView ? "animate__fadeInUp" : ""
                                    }`}
                                >
                                    <div className="option-content">
                                        <h3>{option.titleOption}</h3>
                                        <p>{option.descritionOption}</p>
                                    </div>
                                    <div className="option-img">
                                        <img
                                            src={option.url}
                                            alt={option.titleOption}
                                            // className="floating-img"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default ContentWhyUs2;
