import Container from "../../components/shared/Container";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Cookie, Laptop, PanelRight } from "lucide-react";

const WhatIDo = () => {
  return (
    <section className="mt-16 px-4">
      <Container>
        <div className="md:flex flex-wrap justify-center items-center gap-8 space-y-4 lg:space-y-0">
          <Card className="md:w-80 w-full border-0 bg-[#202024] shadow-xl">
            <CardHeader>
              <CardTitle>
                <Cookie className="text-[#ffffffbe] text-3xl " size={30} />
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white text-3xl font-bold">
              UI/UX <br />
              Designer
            </CardContent>
            <CardFooter className="text-[#ffffffbe]">126+ Projects</CardFooter>
          </Card>
          {/* Card 1 */}
          <Card className="md:w-80 w-full border-0 bg-[#5454D4] shadow-xl">
            <CardHeader>
              <CardTitle>
                <Laptop className="text-[#ffffffbe] text-2xl" size={30} />
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white text-3xl font-bold">
              Front End <br />
              Developer
            </CardContent>
            <CardFooter className="text-[#ffffffbe]">147+ Projects</CardFooter>
          </Card>
          {/* Card 2 */}
          <Card className="md:w-80 w-full border-0 bg-[#202024] shadow-xl">
            <CardHeader>
              <CardTitle>
                <PanelRight className="text-[#ffffffbe] text-3xl" size={30} />
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white text-3xl font-bold">
              Social Media <br />
              Designer
            </CardContent>
            <CardFooter className="text-[#ffffffbe]">89+ Projects</CardFooter>
          </Card>
          {/* Card 3 */}
        </div>
      </Container>
    </section>
  );
};

export default WhatIDo;
