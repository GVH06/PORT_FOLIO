"use client"

import { Github, Linkedin, ArrowDownRight, ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-8 overflow-hidden pt-20">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]" aria-hidden="true">
        <div className="h-full w-full" style={{
          backgroundImage: "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>

      {/* Large decorative glowing orbs */}
      <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px] animate-pulse duration-[7000ms]" aria-hidden="true" />
      <div className="absolute top-1/2 -right-32 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px] animate-pulse duration-[5000ms]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl w-full relative z-10 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 pt-12 lg:pt-0">
        {/* Left column: Text content */}
        <div className={`transition-all duration-1000 transform flex-1 mt-10 lg:mt-24 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          {/* Status badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-sm font-medium text-primary">
              Available for opportunities
            </span>
          </div>

          {/* Main heading */}
          <div className="max-w-3xl relative">
            <h1 className="font-sans text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-[1.1]">
              Where data science, DSA, and Java{" "}
              <span className="text-gradient inline-flex items-center gap-2">
                come together
              </span>{" "}
              to create impactful solutions.
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-muted-foreground/80 font-medium">
              Crafting efficient, scalable web applications using Java, advanced algorithms, and data-driven insights. Built for performance.
            </p>
          </div>

          {/* CTA Row */}
          <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
            >
              <Sparkles className="h-4 w-4" />
              View my work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
            >
              Download Resume
              <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Social links */}
          <div className="mt-16 flex items-center gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Connect</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/GVH06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-card p-3 border border-border text-muted-foreground transition-all duration-300 hover:text-primary hover:border-primary/30 hover:scale-110 shadow-sm"
                  aria-label="GitHub profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/g-v-s-l-hasini-02a532328/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-card p-3 border border-border text-muted-foreground transition-all duration-300 hover:text-primary hover:border-primary/30 hover:scale-110 shadow-sm"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Image container */}
        <div className={`transition-all duration-1000 delay-300 transform w-full max-w-sm lg:max-w-md xl:max-w-lg lg:mt-10 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="relative aspect-[3/4] w-full xl:mr-8 2xl:mr-16">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-primary/20 via-transparent to-blue-500/20 blur-xl transition duration-500" />
            <div className="relative h-full w-full rounded-[2.5rem] border border-white/20 glass-card overflow-hidden shadow-2xl bg-card">
              <img
                src="/profile.jpg"
                alt="Profile photo of Hasini"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
