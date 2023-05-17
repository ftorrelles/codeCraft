import ContentAbout from "../compenents/ContentAbout";
import ContentServices from "../compenents/ContentServices";
import ContentWhyUs from "../compenents/ContentWhyUs";

const About = () => {
    return (
        <>
            <div style={{ height: "80px", backgroundColor: "#0f1626" }}></div>
            <ContentAbout />
            <ContentWhyUs />
            <ContentServices />
        </>
    );
};

export default About;
