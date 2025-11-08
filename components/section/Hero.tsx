"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-32 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Samir Kumar Swain</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Full-Stack Developer — Crafting Modern Web Experiences
          </p>
          <div className="flex gap-4">
            <Button variant={"default"} className="gap-2">
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>

            <Link href={"https://github.com/samirswain26"} target="_blank">
              <Button variant={"default"} className="gap-2">
                <Github className="h-4 w-4" />
                Github
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Image
            src={"/hero.svg"}
            alt={"Developer Illustration"}
            width={500}
            height={500}
            priority
          />
        </motion.div>
      </div>
      {/* Hero */}
    </section>
  );
};

export default Hero;
