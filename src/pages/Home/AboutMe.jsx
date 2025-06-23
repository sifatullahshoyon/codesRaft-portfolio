import Container from "../../components/shared/Container";

const AboutMe = () => {
  return (
    <section>
      <Container>
        <div className="md:flex md:flex-row items-center justify-between gap-4 px-4 mt-16 md:mt-0">
          {/* experience */}
          <div className="relative w-[30%]">
            {/* absolute text */}
            <div className="absolute text-[#2a313d] lg:text-6xl text-2xl italic font-semibold -rotate-8 -top-14">
              Experience
            </div>
            {/* total experience */}
            <div className="flex flex-wrap justify-between items-center gap-4  w-full">
              <div className="flex flex-col items-center z-20">
                <h4 className="text-3xl text-[#5454D4] font-bold pb-2">7+</h4>
                <p className="text-[#ffffffbe]">
                  Years of <br /> Experience.
                </p>
              </div>
              <div className="flex flex-col items-center ">
                <h4 className="text-3xl text-[#5454D4] font-bold pb-2">199+</h4>
                <p className="text-[#ffffffbe]">
                  Satisfied <br /> Clients.
                </p>
              </div>
            </div>
          </div>
          {/* content */}
          <div>
            <h4 className="text-[#ffffffbe] font-normal ">PROBLEM SOLVER</h4>
            <p className="py-6 text-white leading-relaxed font-semibold text-2xl">
              I enjoy solving problems with clean <br /> scalable solutions. I
              have a genuine <br /> passion for inspiring design.
            </p>
            <p className="text-[#ffffffbe]">
              I have a strong fundamental in graphic and interactive design,{" "}
              <br />
              and an interest in user-centered trading and visual systems,{" "}
              <br />
              Understanding their potential in digital spaces
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
