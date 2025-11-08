"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Card } from "@/components/ui/card";
import ContactForm from "./ContactForm";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 ">
            Let's <span className="text-primary ">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            I'm always open to discussing new projects, creativity ideas or
            oppertunities to be part of your vission.
          </p>
          <div className="flex gap-4 mb-8">
            <Button
              variant={"outline"}
              size={"icon"}
              asChild
              className="hover:text-primary"
            >
              <a href="https://github.com/samirswain26" target="_blank">
                <Github className="w-5 h-5" />
              </a>
            </Button>

            <Button
              variant={"outline"}
              size={"icon"}
              asChild
              className="hover:text-primary"
            >
              <a
                href="https://www.linkedin.com/posts/samir-kumar-swain-36a52638b_internship-offer-letter-activity-7384987326172528640-kjGd?utm_medium=ios_app&rcm=ACoAAGAB-IIBPYXfnmWu7wKnck4xWlY1BLp15Ys&utm_source=social_share_send&utm_campaign=copy_link"
                target="_blank"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>

            <Button
              variant={"outline"}
              size={"icon"}
              asChild
              className="hover:text-primary"
            >
              <a href="mailto:samirkumarswain267@gmail.com" target="_blank">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <Card>
            <ContactForm />
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center mt-20 "
        >
          <Image
            src={"/contact.svg"}
            alt="Contact Illustration"
            width={500}
            height={800}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
