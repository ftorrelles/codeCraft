import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
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

    const [notification, setNotification] = useState({
        show: false,
        variant: "",
        message: "",
    });

    const submit = (data) => {
        // setInfoForm(data);
        reset();
        axios
            .post("/emails/contact", data)
            .then(() =>
                setNotification({
                    show: true,
                    variant: "success",
                    message: "Mensaje enviado!",
                })
            )
            .catch(() =>
                setNotification({
                    show: true,
                    variant: "danger",
                    message: "upps hubo un error",
                })
            );
    };

    return (
        <>
            <section className="contact">
                <Row xs={1} md={2} lg={2}>
                    <Col lg={3} className="col_contactInfo">
                        <h2 className="titles_contact">
                            Informacion de contacto
                        </h2>
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
                                    Bogota Cra 53f 4-10
                                </a>
                            </li>
                            <li>
                                <span style={{ color: "#1c4c96" }}>
                                    Email:{" "}
                                </span>
                                contacto@biupoll.com.co
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
                                    +57 3058088280
                                </a>
                            </li>
                        </ul>
                        <h6>Puedes ver nuestras resdes sociales</h6>

                        <div className="div_icons_contact">
                            <a
                                href="https://www.linkedin.com/in/biupoll-sas-4971a1273/"
                                target="_blank"
                            >
                                <i className="bx bxl-linkedin"></i>
                            </a>
                            <a
                                href="https://api.whatsapp.com/message/LOR4BMDYHZ3GJ1?autoload=1&app_absent=0"
                                target="_blank"
                            >
                                <i className="bx bxl-whatsapp"></i>
                            </a>
                            <a href="" target="_blank">
                                <i className="bx bxl-facebook-circle"></i>
                            </a>
                        </div>
                    </Col>
                    <Col className="col_contact_form" lg={9}>
                        <h4 className="titles_contact">
                            ¿Tienes dudas?¿Quieres saber más información? !deja
                            tu informacion y nos pondremos en contacto contigo¡
                        </h4>{" "}
                        <form onSubmit={handleSubmit(submit)}>
                            <div className="form_field">
                                <label htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="nombre y apellido"
                                    {...register("name", { required: true })}
                                />
                            </div>
                            <div className="form_field">
                                <label htmlFor="phone">Telefono</label>
                                <input
                                    type="text"
                                    id="phone"
                                    placeholder="numero telefonico"
                                    {...register("phone", { required: true })}
                                />
                            </div>
                            <div className="form_field">
                                <label htmlFor="email-input">Email</label>
                                <input
                                    type="email"
                                    id="email-input"
                                    placeholder="Email"
                                    {...register("email", { required: true })}
                                />
                            </div>
                            <div className="form_field">
                                <label htmlFor="comment">Comentarios</label>
                                <textarea
                                    rows="10"
                                    cols="20"
                                    name="comment"
                                    id="comment"
                                    placeholder="Dejame un comentario de tu duda o servicio deseado para tener una idea de como ayudarte"
                                    {...register("comment", { required: true })}
                                ></textarea>
                            </div>

                            <Button type="submit" className="bt_contact">
                                enviar
                            </Button>
                        </form>
                    </Col>
                </Row>
            </section>
            <Notification
                {...notification}
                handleClose={() =>
                    setNotification({ ...notification, show: false })
                }
            />
        </>
    );
};

export default ContentContact;
