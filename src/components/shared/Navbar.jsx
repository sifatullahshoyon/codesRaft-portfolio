import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Link, NavLink } from "react-router";
import { Button } from "../ui/button";
import Container from "./Container";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Faq", path: "/faq" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <Container>
      <header className="sticky top-0 z-50 w-full  bg-transparent backdrop-blur ">
        <div className="container flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white">
            <span className="inline-block font-bold text-xl">
              ADAM<span className="text-[#5454D4]">/Z</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-white" : "text-[#ffffffbe]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Navigation Trigger */}
          <div className="flex items-center space-x-2 md:hidden ">
            {/* <ModeToggle /> */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 pt-6">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `text-lg font-medium transition-colors hover:text-primary ${
                          isActive ? "text-primary" : "text-muted-foreground"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </Container>
  );
}
