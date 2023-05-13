import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalReferrals = ({ showReferrals, handleCloseReferrals }) => {
    return (
        <>
            <Modal
                className="modal-lg modal-color"
                show={showReferrals}
                onHide={handleCloseReferrals}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Bonos de referidos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        1. Descuentos en la creación de tu sitio web. <br />
                        <br />
                        2. Descuentos en tu plan de matenimiento.
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

export default ModalReferrals;
