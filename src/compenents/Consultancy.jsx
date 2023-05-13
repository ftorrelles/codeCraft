import { useState } from "react";
import "../styles/consultancy.css";
// import ModalConsultancy from "./ModalConsultancy";
import ModalConsultancy2 from "./ModalConsultancy2";

const Consultancy = () => {
    //modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="consultancy-container">
                <h2 className="consultancy-title">Consultoría Gratuita</h2>
                <p className="consultancy-description">
                    Queremos ayudarte, por ello, te proponemos realizar una
                    consultoría gratuita por videoconferencia.
                </p>
                <ul className="consultancy-list">
                    <li className="consultancy-item">
                        <i className="bx bx-check consultancy-icon"></i>
                        <span>
                            Selecciona La Fecha y hora: llena el formulario
                            seleccionando la fecha y hora.
                        </span>
                    </li>
                    <li className="consultancy-item">
                        <i className="bx bx-check consultancy-icon"></i>
                        <span>
                            Confirmación de fecha: nos comunicaremos contigo
                            para confirmar la fecha y enviarte el enlace.
                        </span>
                    </li>
                    <li className="consultancy-item">
                        <i className="bx bx-check consultancy-icon"></i>
                        <span>
                            Videoconferencia: Realizaremos una videoconferencia
                            gratuita en la que te mostraremos que podemos hacer
                            por tu empresa.
                        </span>
                    </li>
                    <li className="consultancy-item">
                        <i className="bx bx-check consultancy-icon"></i>
                        <span>
                            Propuesta Detallata: Recibe una propuesta detallada,
                            en la que obtendrás sugerencias de mejora. ¡Te
                            sorprenderemos!
                        </span>
                    </li>
                </ul>
                <div className="consultancy-button-container ">
                    <button
                        type="button"
                        onClick={handleShow}
                        className="consultancy-button"
                    >
                        Agenda Ya
                    </button>
                </div>
            </div>
            <ModalConsultancy2 show={show} handleClose={handleClose} />
        </>
    );
};

export default Consultancy;
