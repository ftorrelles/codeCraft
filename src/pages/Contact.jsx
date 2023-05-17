import ContentContact from "../compenents/ContentContact";
import ContentServices from "../compenents/ContentServices";

const Contacts = () => {
    return (
        <>
            <div
                style={{
                    height: "80px",
                    backgroundColor: "#0f1626",
                }}
            ></div>
            <ContentContact />
            <ContentServices />
        </>
    );
};

export default Contacts;
