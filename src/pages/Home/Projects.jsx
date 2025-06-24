import Container from "../../components/shared/Container";
import { Card, CardContent } from "../../components/ui/card";
import img1 from "../../assets/images/projects/img1.png";
import img2 from "../../assets/images/projects/img2.png";
import img3 from "../../assets/images/projects/img3.png";

const Projects = () => {
  return (
    <section data-aos="fade-up" className="mt-16 relative">
      {/* glow effect */}
      <div className="hero-two"></div>
      <Container>
        <h1 className="px-4 text-3xl text-white font-bold pb-6 lg:pb-0">
          My Recent Work
        </h1>
        <div className="md:flex flex-wrap justify-center items-center gap-8 space-y-4 lg:space-y-0">
          <Card className="border-0 bg-[#202024] shadow-xl cursor-pointer">
            <CardContent className="">
              <img src={img1} alt="project img 1" />
            </CardContent>
          </Card>
          {/* Card 1 */}
          <Card className="border-0 bg-[#202024] shadow-xl lg:mt-24 cursor-pointer">
            <CardContent className="">
              <img src={img2} alt="project img 2" />
            </CardContent>
          </Card>
          {/* Card 1 */}
          <Card className="border-0 bg-[#202024] shadow-xl lg:mt-48 cursor-pointer">
            <CardContent className="">
              <img src={img3} alt="project img 3" />
            </CardContent>
          </Card>
          {/* Card 1 */}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
