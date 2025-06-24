import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What services do you offer?",
    answer:
      "I offer comprehensive design and development services including UI/UX design, web development, mobile app design, branding, and interactive prototyping. I can handle projects from concept to completion.",
  },
  {
    question: "How do you approach a new project?",
    answer:
      "I follow a structured process: 1) Discovery call to understand your needs, 2) Research and planning, 3) Design concepts, 4) Development, and 5) Testing and launch. I maintain clear communication throughout.",
  },
  {
    question: "What industries have you worked with?",
    answer:
      "I've worked with clients across various sectors including tech startups, healthcare, e-commerce, education, and finance. This diverse experience helps me adapt quickly to different project requirements.",
  },
  {
    question: "What's your typical turnaround time?",
    answer:
      "Turnaround time depends on project scope. A simple website might take 2-4 weeks, while complex applications may require 2-6 months. I'll provide a detailed timeline after our initial discussion.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I regularly collaborate with clients worldwide. I'm comfortable working across time zones and can accommodate meetings at mutually convenient times.",
  },
  {
    question: "How do you handle revisions?",
    answer:
      "I include 2-3 rounds of revisions in my standard packages. Additional revisions can be accommodated at an agreed-upon rate. My goal is your complete satisfaction with the final product.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "For design: Figma, Adobe Creative Suite. For development: React, Next.js, Tailwind CSS, Node.js. I stay updated with the latest tools and frameworks to deliver modern solutions.",
  },
  {
    question: "How do you ensure quality work?",
    answer:
      "I implement rigorous testing protocols, follow best practices, and conduct thorough quality assurance at each project phase. I also welcome feedback throughout the process to ensure alignment.",
  },
];

export function AccordionDemo() {
  return (
    <div
      data-aos="fade-left"
      className="flex flex-col items-center justify-center px-4 py-8 mx-auto"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
          Frequently Asked <span className="text-[#5454D4]">Questions</span>
        </h2>
        <p className="mt-4 text-[#ffffffbe] max-w-[700px] mx-auto">
          Find answers to common questions about my services and process
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left hover:no-underline text-white">
                <h3 className="text-lg font-medium">{item.question}</h3>
              </AccordionTrigger>
              <AccordionContent className="text-[#ffffffbe]">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
