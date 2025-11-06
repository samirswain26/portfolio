"use client"
import GithubStats from "@/components/section/githubStats";
import Hero from "@/components/section/Hero";
import Projects from "@/components/section/Projects";
import Skills from "@/components/section/Skills";
import Testimonial from "@/components/section/Testimonial";
import {motion} from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen bg-background" >
      <Hero/>
      <Skills/>
      <Testimonial/>
      <Projects />

      {/* Github Streak */}

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          GitHub <span className=" text-primary">Activity</span>
        </h2>
        <motion.div
        initial={{opacity: 0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.5}}
        >
          <GithubStats username="samirswain26" />
        </motion.div>

      </section>

    </main>
  );
}
