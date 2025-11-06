"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
  const [isScrolled, setisScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
        setisMobileMenuOpen(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return() => window.removeEventListener("scroll", handleScroll)
  },[])

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Skill", href: "#skills" },
    { label: "Project", href: "#projects" },
    { label: "Testimonial", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : ""
      }`}
    >
      <div className="conatiner mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href={"/"} className="text-xl font-bold text-primary">
            Samir Kumar Swain
          </Link>

          {/* For Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((Item) => (
              <a
                href={Item.href}
                key={Item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {Item.label}
              </a>
            ))}
            <Button variant={"default"} size={"sm"} className="gap-2">
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </nav>

          {/* Mobile emnu button */}

          <Button
            variant={"ghost"}
            size={"icon"}
            className="md:hidden hover:bg-primary"
            onClick={() => setisMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-background"
          >
            <nav className="conatiner mx-auto flex px-4 py-4 flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  href={item.href}
                  key={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-all"
                  onClick={() => setisMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant={"default"} size={"sm"} className="gap-2">
                <Download className="h-4 w-4" />
                Resume
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
