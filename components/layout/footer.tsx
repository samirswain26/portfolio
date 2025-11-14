"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-4">
              Samir Kumar Swain
            </h3>
            <p className="text-muted-foreground mb-4">
              Full Stack Developer crafting modern web experiences with a focus
              on user experience and performance.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://github.com/samirswain26"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/posts/samir-kumar-swain-36a52638b_internship-offer-letter-activity-7384987326172528640-kjGd?utm_medium=ios_app&rcm=ACoAAGAB-IIBPYXfnmWu7wKnck4xWlY1BLp15Ys&utm_source=social_share_send&utm_campaign=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:samirkumarswain267@gmail.com">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Cuttack, Odisha</li>
              <li>
                <a
                  href="mailto:samirkumarswain267@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  samirkumarswain267@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 7735429894
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Samir Kumar Swain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
