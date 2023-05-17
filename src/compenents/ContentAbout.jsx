import "../styles/about.css";
import { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import ModalVision from "./ModalVision";
import ModalMision from "./ModalMision";

const ContentAbout = () => {
    //modal Vision
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //modal Mision
    const [showMision, setShowMision] = useState(false);
    const handleCloseMision = () => setShowMision(false);
    const handleShowMision = () => setShowMision(true);
    return (
        <>
            <Container className="container_about">
                <Row xs={1} md={2} lg={2}>
                    <Col className="div_info_about" lg={8}>
                        <h2>sobre nosotros</h2>
                        <p>
                            En CodeCraft, somos un equipo joven y dinámico
                            apasionado por la tecnología y la creatividad. Nos
                            encanta transformar las ideas en realidad.
                            <br />
                            <br />
                            Nos enorgullece ser un equipo altamente profesional,
                            con un enfoque meticuloso en cada detalle de
                            nuestros proyectos. Buscamos siempre superar las
                            expectativas de nuestros clientes y entregarles un
                            producto final que refleje la esencia de su marca.
                        </p>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "1rem",
                            }}
                        >
                            <div className="bt_mision-vision">
                                <Button
                                    variant="outline-success"
                                    type="button"
                                    onClick={handleShow}
                                >
                                    Vision
                                </Button>
                            </div>
                            <div>
                                <Button
                                    variant="outline-success"
                                    type="button"
                                    onClick={handleShowMision}
                                >
                                    Mision
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="div_img_about">
                            <img
                                src="/about.png"
                                alt="sobre nosotros"
                                className="floating-img"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
            <ModalVision show={show} handleClose={handleClose} />
            <ModalMision
                showMision={showMision}
                handleCloseMision={handleCloseMision}
            />
        </>
    );
};

export default ContentAbout;
