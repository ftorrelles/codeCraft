// import React, { useState } from "react";
// import { Modal, Button, Form } from "react-bootstrap";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";

// const ModalConsultancy = ({ show, handleClose }) => {
//     const [appointments, setAppointments] = useState([]);
//     const [selectedSlot, setSelectedSlot] = useState(null);
//     const [events, setEvents] = useState([]);
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//     });

//     const localizer = momentLocalizer(moment);

//     const handleSelect = (slotInfo) => {
//         setSelectedSlot(slotInfo);
//     };

//     const handleFormChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleFormSubmit = (event) => {
//         event.preventDefault();
//         const { start, end } = selectedSlot;
//         const newAppointment = {
//             start,
//             end,
//             name: formData.name,
//             email: formData.email,
//             phone: formData.phone,
//         };
//         setAppointments([...appointments, newAppointment]);
//         setSelectedSlot(null);
//         setEvents([...events, newAppointment]);
//         setFormData({ name: "", email: "", phone: "" });
//     };

//     const eventStyleGetter = (event) => {
//         const style = {
//             backgroundColor:
//                 event.title === "No disponible" ? "#dddddd" : "#3174ad",
//             color: "#ffffff",
//         };
//         return {
//             style,
//         };
//     };

//     console.log(appointments);

//     return (
//         <Modal show={show} onHide={handleClose} size="lg">
//             <Modal.Header closeButton>
//                 <Modal.Title>Mi calendario de citas</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <Calendar
//                     localizer={localizer}
//                     events={events}
//                     selectable
//                     defaultView="week"
//                     views={["week"]}
//                     min={new Date(0, 0, 0, 14, 0)}
//                     max={new Date(0, 0, 0, 17, 0)}
//                     onSelectSlot={handleSelect}
//                     eventPropGetter={eventStyleGetter}
//                 />
//                 {selectedSlot && (
//                     <Form onSubmit={handleFormSubmit}>
//                         <Form.Group controlId="formBasicName">
//                             <Form.Label>Nombre completo</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 placeholder="Ingresa tu nombre completo"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleFormChange}
//                             />
//                         </Form.Group>

//                         <Form.Group controlId="formBasicEmail">
//                             <Form.Label>
//                                 Dirección de correo electrónico
//                             </Form.Label>
//                             <Form.Control
//                                 type="email"
//                                 placeholder="Ingresa tu correo electrónico"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleFormChange}
//                             />
//                         </Form.Group>

//                         <Form.Group controlId="formBasicPhone">
//                             <Form.Label>Número de teléfono</Form.Label>
//                             <Form.Control
//                                 type="tel"
//                                 placeholder="Ingresa tu número de teléfono"
//                                 name="phone"
//                                 value={formData.phone}
//                                 onChange={handleFormChange}
//                             />
//                         </Form.Group>

//                         <Button variant="primary" type="submit">
//                             Enviar
//                         </Button>
//                     </Form>
//                 )}
//             </Modal.Body>
//         </Modal>
//     );
// };

// export default ModalConsultancy;
