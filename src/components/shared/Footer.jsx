import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, Facebook } from "lucide-react";
import { Button } from "../ui/button";
import Container from "./Container";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer>
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">ADAM/Z</h3>
            <p className="text-[#ffffffbe]">
              A passionate designer/developer creating beautiful digital
              experiences.
            </p>
            <div className="flex space-x-4">
              <Button variant="primary" size="icon" className="text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-[#ffffffbe]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-[#ffffffbe]">
                    Faq
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-[#ffffffbe]">
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#ffffffbe]" />
                <span className="text-[#ffffffbe]">adam.z@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#ffffffbe]" />
                <span className="text-[#ffffffbe]">+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#ffffffbe]" />
                <span className="text-[#ffffffbe]">Dhaka, BD</span>
              </div>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Newsletter</h3>
            <form className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#ffffffbe]">
                  Stay updated
                </Label>
                <Input
                  id="email"
                  placeholder="Your email"
                  className="border-white  focus:ring-2 focus:ring-white text-[#ffffffbe] bg-transparent   "
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#5454D4] text-white cursor-pointer"
                variant="primary"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 border-t border-t-gray-700 pt-8 pb-2 text-center text-sm text-muted-foreground">
          <p className="text-[#ffffff85]">
            © {new Date().getFullYear()} ADAM/Z. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
