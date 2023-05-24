import ContentContact from "../compenents/ContentContact";
import ContentPortfolio3 from "../compenents/ContentPortfolio3";
// import ContentWhyUs from "../compenents/ContentWhyUs";
import ContentWhyUs2 from "../compenents/ContentWhyUs2";

const WhyUs = () => {
    return (
        <>
            <div style={{ height: "80px", backgroundColor: "#0f1626" }}></div>
            {/* <ContentWhyUs /> */}
            <ContentWhyUs2 />
            <ContentPortfolio3 />
            <ContentContact />
        </>
    );
};

export default WhyUs;
