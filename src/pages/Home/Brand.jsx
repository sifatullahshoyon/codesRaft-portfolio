import Marquee from "react-fast-marquee";
import img1 from "../../assets/images/brands/logo1.png";
import img2 from "../../assets/images/brands/logo2.jpg";
import img3 from "../../assets/images/brands/logo3.jpg";
import img4 from "../../assets/images/brands/logo4.jpg";
import img5 from "../../assets/images/brands/logo5.jpg";
import img6 from "../../assets/images/brands/logo6.jpg";
import img7 from "../../assets/images/brands/logo7.jpg";
import Container from "../../components/shared/Container";

const Brand = () => {
  return (
    <section className="mt-16">
      <Container>
        <Marquee>
          <div className="flex flex-row justify-between items-center gap-6 pr-6">
            <img src={img1} alt="img 1" />
            <img src={img2} alt="img 2" />
            <img src={img3} alt="img 3" />
            <img src={img4} alt="img 4" />
            <img src={img5} alt="img 5" />
            <img src={img6} alt="img 6" />
            <img src={img7} alt="img 7" />
          </div>
          <div className="flex flex-row justify-between items-center gap-6">
            <img src={img1} alt="img 1" />
            <img src={img2} alt="img 2" />
            <img src={img3} alt="img 3" />
            <img src={img4} alt="img 4" />
            <img src={img5} alt="img 5" />
            <img src={img6} alt="img 6" />
            <img src={img7} alt="img 7" />
          </div>
        </Marquee>
      </Container>
    </section>
  );
};

export default Brand;
