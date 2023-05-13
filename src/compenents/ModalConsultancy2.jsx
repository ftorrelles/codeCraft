import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalConsultancy2 = ({ show, handleClose }) => {
    const [appointments, setAppointments] = useState([]);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // Estado para el mensaje de error

    const handleSubmit = (e) => {
        e.preventDefault();
        // Verifica si todos los campos están llenos antes de enviar el formulario
        if (name && phone && email && date) {
            // Verifica si la fecha seleccionada es una fecha futura
            const selectedDate = new Date(date);
            const currentDate = new Date();
            if (selectedDate < currentDate) {
                setErrorMessage(
                    "La fecha seleccionada no puede ser una fecha pasada."
                );
                return; // Detiene la ejecución del formulario si la fecha es inválida
            }
            const newAppointment = {
                name: name,
                phone: phone,
                email: email,
                date: date,
            };
            setAppointments([...appointments, newAppointment]);

            // Resto del código para guardar los datos y reiniciar los valores del formulario
            setName("");
            setPhone("");
            setEmail("");
            setDate("");
            setErrorMessage(""); // Reinicia el mensaje de error
        } else {
            setErrorMessage("Por favor, completa todos los campos."); // Mensaje de error para campos obligatorios
        }
    };

    const handleDateChange = (e) => {
        const { value } = e.target;
        const isDisabled = isDateDisabled(value);

        if (isDisabled) {
            setErrorMessage(
                "Por favor, selecciona una fecha y hora válida (de lunes a viernes, de 2:00 PM a 5:00 PM)."
            );
            setDate(""); // Reinicia el valor de la fecha en caso de ser inválida
        } else {
            setDate(value);
            setErrorMessage(""); // Reinicia el mensaje de error
        }
    };
    const isDateDisabled = (selectedDate) => {
        const date = new Date(selectedDate);

        // Verificar si el día de la semana no está entre lunes (1) y viernes (5)
        if (date.getDay() < 1 || date.getDay() > 5) {
            return true;
        }

        // Verificar si la hora no está entre 2:00 PM (14:00) y 5:00 PM (17:00)
        const hour = date.getHours();
        if (hour < 14 || hour > 17) {
            return true;
        }

        return false;
    };
    console.log(appointments);

    return (
        <Modal
            className="modal-color"
            show={show}
            onHide={handleClose}
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title>Mi formulario de citas</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Teléfono:</Form.Label>
                        <Form.Control
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Correo electrónico:</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <br />
                    <hr />
                    <p>Selecciona la fecha y hora para la videoconferencia</p>
                    <p>Disponiblidad de lunes a viernes de 2:00 pm a 5:00 pm</p>
                    <Form.Group>
                        <Form.Label>Fecha de contacto:</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            value={date}
                            onChange={handleDateChange}
                            required
                        />
                    </Form.Group>
                    <br />
                    {errorMessage && (
                        <div className="error-message">{errorMessage}</div>
                    )}{" "}
                    {/* Mostrar el mensaje de error */}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button variant="outline-success" type="submit">
                            Enviar
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ModalConsultancy2;
