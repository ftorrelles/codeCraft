import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const Notification = ({ variant, message, show, handleClose }) => {
    return (
        <div className="notification-container">
            <ToastContainer position="middle-center">
                <Toast
                    className="d-inline-block m-1 text-light"
                    bg={variant}
                    show={show}
                    delay={5000}
                    onClose={handleClose}
                    autohide
                >
                    <Toast.Body
                        style={{
                            textAlign: "center",
                            fontSize: "18px",
                        }}
                        className={"text-white"}
                    >
                        {message}
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
};

export default Notification;
