import Container from "../../components/shared/Container";
import { format } from "date-fns";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Designing for Accessibility: Best Practices",
    excerpt: "Learn how to create inclusive designs that work for everyone.",
    date: new Date("2023-05-15"),
    slug: "designing-for-accessibility",
    category: "Design",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "React Performance Optimization Techniques",
    excerpt:
      "Boost your React applications with these proven optimization strategies.",
    date: new Date("2023-06-22"),
    slug: "react-performance",
    category: "Development",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "The Psychology of Color in Web Design",
    excerpt: "How color choices affect user behavior and perception.",
    date: new Date("2023-07-10"),
    slug: "color-psychology",
    category: "Design",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Building a Design System from Scratch",
    excerpt: "A step-by-step guide to creating a cohesive design system.",
    date: new Date("2023-08-05"),
    slug: "design-system",
    category: "Design",
    readTime: "10 min read",
  },
  {
    id: 5,
    title: "Modern CSS Techniques You Should Know",
    excerpt: "Explore cutting-edge CSS features for better styling.",
    date: new Date("2023-09-18"),
    slug: "modern-css",
    category: "Development",
    readTime: "7 min read",
  },
  {
    id: 6,
    title: "Freelancer Productivity Tips",
    excerpt: "How to stay productive and organized as a creative freelancer.",
    date: new Date("2023-10-30"),
    slug: "freelancer-productivity",
    category: "Business",
    readTime: "9 min read",
  },
];

const Blogs = () => {
  return (
    <section data-aos="fade-up" className="my-16 px-4 relative">
      {/* left side glow effect */}
      <div className="hero"></div>
      {/* right side glow effect */}
      <div className="hero-two"></div>
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-white">
            My Blog
          </h1>
          <p className="text-[#ffffffbe]  max-w-[700px] mx-auto">
            Thoughts on design, development, and the creative process
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="hover:shadow-md transition-shadow bg-[#202024] border-0 shadow-lg "
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-center gap-4 mb-6">
                  <span className="text-sm text-[#ffffffbe] mb-2 flex justify-between">
                    {post.category}
                  </span>
                  <span className="text-sm text-[#ffffffbe] mb-2 flex justify-between">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-semibold mb-2 text-white pb-6">
                  {post.title}
                </h2>
                <p className="text-sm mb-4 text-[#ffffffbe]">{post.excerpt}</p>
                <div className="mt-auto">
                  <div className="text-sm text-[#ffffffbe] mb-3">
                    {format(post.date, "MMMM d, yyyy")}
                  </div>
                  <Button asChild variant="link" className="px-0">
                    <Link to={`/blog`} className="text-[#5454D4]">
                      Read more{" "}
                      <ArrowRight className="ml-2 h-4 w-4 text-[#5454D4]" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blogs;
