import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ModalMaintenancePlans = ({
    showMaintenancePlans,
    handleCloseMaintenancePlans,
}) => {
    return (
        <>
            <Modal
                className="modal-lg modal-color"
                show={showMaintenancePlans}
                onHide={handleCloseMaintenancePlans}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Planes accesibles de mantenimiento
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        1. Mantenimiento Basico <br /> <br /> 2. Mantenimiento
                        dinamico <br />
                        <br />
                        3. Paquete funcionalidades Segun evoluciones, queremos
                        que tu pagina evolucione contigo; agregamos las
                        funcionalidades que necesites en el camino.
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

export default ModalMaintenancePlans;
