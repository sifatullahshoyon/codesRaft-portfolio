import React from "react";
import Container from "../../components/shared/Container";
import faq from "../../assets/images/faq/faq.png";
import { AccordionDemo } from "../../components/AccordionDemo";

const Faq = () => {
  return (
    <section className="my-16 px-4 relative">
      {/* left side glow effect */}
      <div className="hero"></div>
      {/* right side glow effect */}
      <div className="hero-two"></div>
      <Container>
        <div className="md:flex justify-between items-center gap-6 space-y-6 lg:space-y-0">
          {/* img */}
          <div data-aos="fade-right">
            <img src={faq} alt="faq img" className="max-w-[500px]" />
          </div>
          {/* content */}
          <AccordionDemo />
        </div>
      </Container>
    </section>
  );
};

export default Faq;
