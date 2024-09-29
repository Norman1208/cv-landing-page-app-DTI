import { FC } from "react";
import Header from "../../components/Header";
import BiodataForm from "../../components/BiodataForm";
import ContactFooter from "../../components/ContactFooter";

const ContactUs: FC = () => {
    return (
        <>
            <Header />
            <BiodataForm />
            <ContactFooter />
        </>
    );
}

export default ContactUs;