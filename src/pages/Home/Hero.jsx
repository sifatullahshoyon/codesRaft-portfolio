import { ArrowDown, ArrowUpRight } from "lucide-react";
import Container from "../../components/shared/Container";
import { Navbar } from "../../components/shared/Navbar";
import { Button } from "../../components/ui/button";
import "../../Style/hero.css";
import { SparklesText } from "@/components/magicui/sparkles-text";
import heroImg from "../../assets/images/hero/hero.png";

const Hero = () => {
  return (
    <div className="relative bg-[#19191b] ">
      <Navbar />
      {/* left side glow effect */}
      <div className="hero"></div>
      {/* right side glow effect */}
      <div className="hero-two"></div>
      <Container>
        {/* content */}
        <div className="md:flex md:justify-between justify-center gap-6 items-center px-4 space-y-6 h-[70vh]">
          <div>
            <SparklesText className="text-white tracking-wide">
              Hello
            </SparklesText>
            <p className="text-[#ffffffbe] text-[21px] py-6 font-normal">
              A Professional UI/UX designer & imaginative <br /> front-end
              developer. loves to add clarity <br /> to complicated concepts by
              design{" "}
            </p>
            <div className="flex items-center justify-baseline gap-4">
              <Button className="bg-[#5454D4] text-white cursor-pointer font-semibold">
                View Resume <ArrowUpRight />
              </Button>
              <Button className="bg-white text-[#19191b] cursor-pointer font-semibold">
                Hire Me <ArrowDown />
              </Button>
            </div>
          </div>
          {/* banner img */}
          <div>
            <img
              src={heroImg}
              alt="hero img"
              className="md:max-w-[700px] w-[400px] mb-6  md:mb-0"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
