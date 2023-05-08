import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalMaintenancePlans = ({
    showMaintenancePlans,
    handleCloseMaintenancePlans,
}) => {
    return (
        <>
            <Modal
                className="modal-lg"
                show={showMaintenancePlans}
                onHide={handleCloseMaintenancePlans}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Planes accesibles de mantenimiento
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p style={{ color: "black" }}>
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
                        <Button variant="outline-success">Contactanos</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalMaintenancePlans;
