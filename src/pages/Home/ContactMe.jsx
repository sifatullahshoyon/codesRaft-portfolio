import Container from "../../components/shared/Container";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";

const ContactMe = () => {
  return (
    <section className="my-16 px-4">
      <Container>
        <div className="md:flex md:flex-row items-center justify-between gap-8 space-y-16 lg:space-y-0">
          {/* Text Section */}
          <div className="relative w-full md:w-1/2">
            <h1 className="text-6xl text-white font-bold pb-6 ">
              Let's <br />
              <span className="text-[#5454D4]">Connect.</span>
            </h1>
            <p className="text-[#ffffffbe] text-sm">
              Adam Zanis is a professional UX designer & <br /> passionate
              front-end developer. Loves to add clarity <br />
              to complicated concepts by design
            </p>
            <div className="absolute text-[#2a313d] lg:text-5xl text-2xl italic font-semibold -rotate-12 -bottom-12 left-6">
              Inquiries
            </div>
          </div>
          {/* Contact Form Section */}
          <div className="w-full md:w-1/2">
            <Card className="border-0 w-4/5 bg-[#202024]">
              <CardContent>
                <form>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="email" className="text-white">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        className="border-white text-[#ffffffbe] focus:border-[#5454D4] focus:ring-0 focus:outline-none"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email" className="text-white">
                        Name
                      </Label>
                      <Input
                        id="name"
                        type="name"
                        placeholder="Your Name"
                        required
                        className="border-white text-[#ffffffbe] focus:border-[#5454D4] focus:ring-0 focus:outline-none"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email" className="text-white">
                        Name
                      </Label>
                      <Textarea
                        id="message"
                        type="message"
                        placeholder="Your Message"
                        required
                        className="border-white text-[#ffffffbe] focus:border-[#5454D4] focus:ring-0 focus:outline-none"
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button
                  type="submit"
                  className="w-full bg-[#5454D4] text-white font-semibold cursor-pointer"
                >
                  Submit
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactMe;
