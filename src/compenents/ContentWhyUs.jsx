import "../styles/whyUs.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ModalWebsitePlans from "../compenents/ModalWebsitePlans";
import ModalMaintenancePlans from "../compenents/ModalMaintenancePlans";
import ModalWarranty from "../compenents/ModalWarranty";
import ModalReferrals from "../compenents/ModalReferrals";
const ContentWhyUs = () => {
    //Modal Website Plans
    const [showWebsitePlans, setShowWebsitePlans] = useState(false);
    const handleCloseWebsitePlans = () => setShowWebsitePlans(false);
    const handleShowWebsitePlans = () => setShowWebsitePlans(true);
    //Modal Maintenance Plans
    const [showMaintenancePlans, setShowMaintenancePlans] = useState(false);
    const handleCloseMaintenancePlans = () => setShowMaintenancePlans(false);
    const handleShowMaintenancePlans = () => setShowMaintenancePlans(true);
    //Modal Warranty
    const [showWarranty, setShowWarranty] = useState(false);
    const handleCloseWarranty = () => setShowWarranty(false);
    const handleShowWarranty = () => setShowWarranty(true);
    //Modal Referrals
    const [showReferrals, setShowReferrals] = useState(false);
    const handleCloseReferrals = () => setShowReferrals(false);
    const handleShowReferrals = () => setShowReferrals(true);
    return (
        <>
            <section className="why-choose-us">
                <div className="container">
                    <h2>¿Por qué elegir codeCraft?</h2>
                    <div className="features">
                        <div className="feature">
                            <h3>Sitios web soñados</h3>
                            <p>
                                Pagaras solo por lo que necesitas, podras
                                escoger el paquete deseado
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Button
                                    onClick={handleShowWebsitePlans}
                                    className="bt_WhyUs"
                                >
                                    Ver detalles
                                </Button>
                            </div>
                        </div>
                        <div className="feature">
                            <h3>Planes accesibles de mantenimiento.</h3>
                            <p>
                                Deseamos que elijas el plan con el que te
                                sientas conforme.
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Button
                                    onClick={handleShowMaintenancePlans}
                                    className="bt_WhyUs"
                                >
                                    Ver detalles
                                </Button>
                            </div>
                        </div>
                        <div className="feature">
                            <h3>Garantía de satisfacción</h3>
                            <p>
                                nuestra meta es transformar las ideas en
                                realidad; Por ellos te ofrecemos una garantia de
                                satisfacción.
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Button
                                    onClick={handleShowWarranty}
                                    className="bt_WhyUs"
                                >
                                    Ver detalles
                                </Button>
                            </div>
                        </div>
                        <div className="feature">
                            <h3>Bonos de referidos</h3>
                            <p>
                                Queremos que seas parte de codeCraft y recibas
                                beneficios, si referencias personas que realicen
                                sus proyectos con nosotros podras obtener
                                beneficios.
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Button
                                    onClick={handleShowReferrals}
                                    className="bt_WhyUs"
                                >
                                    Ver detalles
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalWebsitePlans
                    showWebsitePlans={showWebsitePlans}
                    handleCloseWebsitePlans={handleCloseWebsitePlans}
                />
                <ModalMaintenancePlans
                    showMaintenancePlans={showMaintenancePlans}
                    handleCloseMaintenancePlans={handleCloseMaintenancePlans}
                />
                <ModalWarranty
                    showWarranty={showWarranty}
                    handleCloseWarranty={handleCloseWarranty}
                />
                <ModalReferrals
                    showReferrals={showReferrals}
                    handleCloseReferrals={handleCloseReferrals}
                />
            </section>
        </>
    );
};

export default ContentWhyUs;
