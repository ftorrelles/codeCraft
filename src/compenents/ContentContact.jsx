import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import axios from "../utils/axios";
import Notification from "../compenents/Notification";

const ContentContact = () => {
    const { register, handleSubmit, reset } = useForm();
    // const [infoForm, setInfoForm] = useState("");

    // const submit = (data) => {
    //     setInfoForm(data);
    //     reset();
    // };
    // console.log(infoForm);

    // const [notification, setNotification] = useState({
    //     show: false,
    //     variant: "",
    //     message: "",
    // });
    const [notification, setNotification] = useState(null);

    const submit = (data) => {
        // setInfoForm(data);
        reset();
        axios
            .post("/emails/contact", data)
            .then(() => {
                setNotification({
                    variant: "success",
                    message: "Mensaje enviado!! te contactaremos muy pronto",
                });
                window.scrollTo(0, 0); // Desplazar la página hacia arriba
            })
            .catch(() => {
                setNotification({
                    variant: "danger",
                    message: "¡Ups! Hubo un error.",
                });
                window.scrollTo(0, 0); // Desplazar la página hacia arriba
            });
    };

    return (
        <>
            <section className="contact">
                <Container fluid>
                    <Row xs={1} md={2} lg={2}>
                        <Col lg={5} className="col_contactInfo m-0">
                            <h2 className="titles_contact">Redes sociales</h2>
                            <div className="div_icons_contact">
                                <a
                                    href="https://www.linkedin.com/company/escodecraft/about/"
                                    target="_blank"
                                >
                                    <i className="bx bxl-linkedin"></i>
                                </a>
                                <a href="" target="_blank">
                                    <i className="bx bxl-whatsapp"></i>
                                </a>
                                <a
                                    href="https://www.facebook.com/profile.php?id=100092651354702"
                                    target="_blank"
                                >
                                    <i className="bx bxl-facebook-circle"></i>
                                </a>
                            </div>
                            <br />
                            <h2 className="titles_contact">
                                Informacion de contacto
                            </h2>
                            <br />
                            <ul style={{ padding: "0" }}>
                                <li>
                                    <span style={{ color: "#1c4c96" }}>
                                        Sede Principal:{" "}
                                    </span>
                                    <a
                                        style={{ color: "black" }}
                                        href="https://www.google.com/maps/place/Cra.+53f+%234-10,+Bogot%C3%A1,+Colombia/@4.6191299,-74.1198713,17.25z/data=!4m5!3m4!1s0x8e3f99519274dd35:0x9a2857adcb89ed7b!8m2!3d4.6191373!4d-74.117351?hl=es"
                                        target="_blank"
                                    >
                                        Costa Rica
                                    </a>
                                </li>
                                <li>
                                    <span style={{ color: "#1c4c96" }}>
                                        Email:{" "}
                                    </span>
                                    codecraft@gmail.com
                                </li>
                                <li>
                                    <span style={{ color: "#1c4c96" }}>
                                        telefonos:
                                    </span>
                                    <a
                                        style={{ color: "black" }}
                                        href="https://api.whatsapp.com/message/LOR4BMDYHZ3GJ1?autoload=1&app_absent=0"
                                        target="_blank"
                                    >
                                        +57 73283782378
                                    </a>
                                </li>
                            </ul>

                            <br />
                            <p>
                                <strong>
                                    ¡¡Queremos ayudarte!!.. <br /> dejanos tu
                                    informacion y nos comunicaremos
                                </strong>
                            </p>
                        </Col>
                        <Col className="col_contact_form m-0" lg={7}>
                            <h5>Formulario de contacto</h5>
                            <form onSubmit={handleSubmit(submit)}>
                                <div className="form_field">
                                    <label htmlFor="name">Nombre</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="nombre y apellido"
                                        {...register("name", {
                                            required: true,
                                        })}
                                    />
                                </div>
                                <div className="form_field">
                                    <label htmlFor="phone">Telefono</label>
                                    <input
                                        type="text"
                                        id="phone"
                                        placeholder="numero telefonico"
                                        {...register("phone", {
                                            required: true,
                                        })}
                                    />
                                </div>
                                <div className="form_field">
                                    <label htmlFor="email-input">Email</label>
                                    <input
                                        type="email"
                                        id="email-input"
                                        placeholder="Email"
                                        {...register("email", {
                                            required: true,
                                        })}
                                    />
                                </div>
                                <div className="form_field">
                                    <label htmlFor="comment">Comentarios</label>
                                    <textarea
                                        rows="5"
                                        cols="10"
                                        name="comment"
                                        id="comment"
                                        placeholder="Comentanos como podemos ayudarte"
                                        {...register("comment", {
                                            required: true,
                                        })}
                                    ></textarea>
                                </div>
                                <div className="bt_contact">
                                    {" "}
                                    <Button
                                        variant="outline-success"
                                        type="submit"
                                    >
                                        enviar
                                    </Button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
                <Notification
                    variant={notification?.variant}
                    message={notification?.message}
                    show={notification !== null}
                    handleClose={() => setNotification(null)}
                />
            </section>
        </>
    );
};

export default ContentContact;
