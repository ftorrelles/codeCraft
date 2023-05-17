import "../styles/services.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const servicesData = [
    {
        title: "Páginas web estáticas",
        description:
            "Son páginas web que no cambian su contenido de manera dinámica y que suelen mostrar información básica sobre una empresa o individuo.",
    },
    {
        title: "Páginas web dinámicas",
        description:
            "Son páginas web que pueden cambiar su contenido en función de la interacción del usuario o de la información que se recopila en tiempo real.",
    },
    {
        title: "Páginas web de comercio electrónico",
        description:
            "Son páginas web que permiten la compra y venta de productos y servicios en línea.",
    },
    {
        title: "Páginas web de blogs",
        description:
            "Son páginas web que contienen artículos y publicaciones escritas por una o varias personas, sobre diversos temas.",
    },
    {
        title: "Páginas web educativas",
        description:
            "Son páginas web que ofrecen información y recursos educativos para estudiantes, maestros y otros profesionales de la educación.",
    },
];

const ContentServices = () => {
    return (
        <>
            <Container fluid className="services_container">
                <h3>Nuestros servicios</h3>
                <Row>
                    {servicesData.map((service, index) => (
                        <Col sm={12} md={6} lg={4} key={index} className="mb-4">
                            <Card
                                style={{
                                    transition:
                                        "transform 0.3s, background-color 0.3s",
                                }}
                                className="card-style"
                            >
                                <Card.Body>
                                    <Card.Title>{service.title}</Card.Title>
                                    <Card.Text>{service.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default ContentServices;
