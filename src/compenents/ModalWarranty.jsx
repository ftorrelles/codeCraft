import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalWarranty = ({ showWarranty, handleCloseWarranty }) => {
    return (
        <>
            <Modal
                className="modal-lg modal-color"
                show={showWarranty}
                onHide={handleCloseWarranty}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Garantía de satisfacción</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        1. Si no estás satisfecho con el resultado final,
                        trabajaremos contigo para hacer las correcciones
                        necesarias y asegurar tu satisfacción. <br />
                        <br />
                        2. Valido en los primeros 3 días despues de estar en
                        producción. <br />
                        <br />{" "}
                        <strong>
                            Para mas cambios en el camino tienes los planes de
                            mantenimientos
                        </strong>
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Button variant="outline-success">Contactanos</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalWarranty;
