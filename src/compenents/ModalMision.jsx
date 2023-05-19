import Modal from "react-bootstrap/Modal";

const ModalMision = ({ showMision, handleCloseMision }) => {
    return (
        <>
            <Modal
                className="modal-lg modal-color"
                show={showMision}
                onHide={handleCloseMision}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Mision</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        En CodeCraft nuestra misión es brindar soluciones de
                        software de alta calidad y servicios de desarrollo web
                        que satisfagan las necesidades únicas de nuestros
                        clientes. <br />
                        <br />
                        Nos comprometemos a trabajar con transparencia y ética
                        profesional en todo momento, asegurando que nuestros
                        clientes estén plenamente satisfechos con los servicios
                        que les proporcionamos. Estamos comprometidos con la
                        mejora continua y el aprendizaje, siempre buscando
                        formas de mejorar nuestros servicios y adaptarnos a las
                        necesidades cambiantes del mercado y de nuestros
                        clientes.
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalMision;
