import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Container from "../../components/shared/Container";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "Acme Inc.",
    review:
      "Working with this designer was an absolute pleasure. They delivered beyond our expectations and the project was completed ahead of schedule. Will definitely work with them again!",
    img: "https://randomuser.me/api/portraits/thumb/men/75.jpg", // Replace with your image path
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Product Manager",
    company: "TechSolutions",
    review:
      "The attention to detail and creative approach resulted in a product that perfectly represents our brand. Highly recommended for anyone looking for top-notch design work.",
    img: "https://randomuser.me/api/portraits/thumb/men/79.jpg", // Replace with your image path
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    position: "CEO",
    company: "StartUp Ventures",
    review:
      "Exceptional communication and professionalism throughout the project. They transformed our vague ideas into a stunning visual identity that resonates with our customers.",
    img: "https://randomuser.me/api/portraits/thumb/men/9.jpg", // Replace with your image path
  },
  {
    id: 4,
    name: "Michael Chen",
    position: "Product Manager",
    company: "TechSolutions",
    review:
      "The attention to detail and creative approach resulted in a product that perfectly represents our brand. Highly recommended for anyone looking for top-notch design work.",
    img: "https://randomuser.me/api/portraits/thumb/men/7.jpg", // Replace with your image path
  },
  {
    id: 5,
    name: "Michael Chen",
    position: "Product Manager",
    company: "TechSolutions",
    review:
      "The attention to detail and creative approach resulted in a product that perfectly represents our brand. Highly recommended for anyone looking for top-notch design work.",
    img: "https://randomuser.me/api/portraits/thumb/men/5.jpg", // Replace with your image path
  },
  {
    id: 6,
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "Acme Inc.",
    review:
      "Working with this designer was an absolute pleasure. They delivered beyond our expectations and the project was completed ahead of schedule. Will definitely work with them again!",
    img: "https://randomuser.me/api/portraits/thumb/men/6.jpg", // Replace with your image path
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, position, review }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] bg-[#202024] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2  ">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white pb-1">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-[#ffffffbe]">{position}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-[#ffffffbe]">
        {review}
      </blockquote>
    </figure>
  );
};

export function Review() {
  return (
    <section className="mt-16 px-4">
      <Container>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </Container>
    </section>
  );
}
