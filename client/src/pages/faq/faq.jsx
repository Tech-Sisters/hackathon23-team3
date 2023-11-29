import React from "react";
import Header from "../../components/header";
import Accordion from "./Accordion";
import Footer from "../../components/footer";

const Faq = () => {
  return (
    <div>
      <Header />
      <div className="mb-8">
        <h2 className="text-black-200 text-4xl py-[40px] font-bold text-[20px] text-center">
          Frequently Asked Questions
        </h2>
        <Accordion
          title="Is there a subscription fee to use this platform?"
          answer="The platform has a free and premium version. The premium version attracts a fee. Kindly visit the subscription plan page for more information"
        />
        <Accordion
          title="Can I contribute by writing reviews for movies or books I've experienced?"
          answer="Absolutely! We encourage users to share their opinions and experiences by writing reviews."
        />
        <Accordion
          title="How can I contact support if I encounter any issues or have further queries?"
          answer="You can contact support if you encounter any issues or have further queries by reaching out to support@halalreadsnreels.com"
        />
        <Accordion
          title="How are recommendations personalized for users?"
          answer="Recommendations are personalized for users based on the preferences selected during the signup process. We also make recommendations based on the kind of content users consume"
        />
      </div>
      <Footer/>
    </div>
  );
};

export default Faq;
