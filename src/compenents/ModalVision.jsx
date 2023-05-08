import Modal from "react-bootstrap/Modal";

const ModalVision = ({ show, handleClose }) => {
    return (
        <>
            <Modal
                className="modal-lg modal-color"
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Vision</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Nuestra visión es ser líderes en el mercado de
                        desarrollo web y software, proporcionando soluciones de
                        alta calidad para impulsar el éxito de nuestros clientes
                        en el mundo digital. <br />
                        <br />
                        Para alcanzarlo nos enfocamos en crear contenido
                        innovador para la creación de páginas web, que no solo
                        sea visualmente atractivo, sino que también sea fácil de
                        usar y que ofrezca una experiencia excepcional al
                        usuario. <br />
                        <br />
                        Queremos ser reconocidos por nuestra capacidad para
                        entender las necesidades de nuestros clientes y
                        proporcionar soluciones personalizadas y escalables para
                        satisfacer sus demandas.
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalVision;
