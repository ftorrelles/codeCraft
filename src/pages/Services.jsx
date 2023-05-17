import ContentContact from "../compenents/ContentContact";
import ContentPortfolio3 from "../compenents/ContentPortfolio3";
import ContentServices from "../compenents/ContentServices";

function Services() {
    return (
        <>
            <div
                style={{
                    height: "80px",
                    backgroundColor: "#0f1626",
                }}
            ></div>
            <ContentServices />
            <ContentPortfolio3 />
            <ContentContact />
        </>
    );
}

export default Services;
