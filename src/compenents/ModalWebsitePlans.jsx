import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ModalWebsitePlans = ({ showWebsitePlans, handleCloseWebsitePlans }) => {
    return (
        <>
            <Modal
                className="modal-lg modal-color"
                show={showWebsitePlans}
                onHide={handleCloseWebsitePlans}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Sitios web soñados</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        1. Paquete basico (Plantillas) <br /> <br /> 2. Paquete
                        tetris (Tus escoges el modelo de las secciones para tu
                        pagina) <br />
                        <br />
                        3. Paquete perzonalizado (Creamos las secciones que
                        imagines).
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Button
                            as={Link}
                            to="/contact"
                            variant="outline-success"
                        >
                            Contactanos
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalWebsitePlans;
