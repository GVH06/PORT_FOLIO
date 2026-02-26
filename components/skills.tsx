"use client"

import { Code2, Database, Layout, Wrench } from "lucide-react"

interface SkillGroup {
  category: string
  icon: React.ReactNode
  items: string[]
}

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    icon: <Code2 className="w-5 h-5" />,
    items: ["Java", "Node.js", "Go", "Python", "REST APIs"],
  },
  {
    category: "Database",
    icon: <Database className="w-5 h-5" />,
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "DevOps & Tools",
    icon: <Wrench className="w-5 h-5" />,
    items: ["Git", "Docker", "GitHub Actions"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32 lg:px-8 bg-card/10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="mx-auto max-w-6xl relative z-10">
        {/* Section heading */}
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm font-semibold uppercase tracking-widest text-primary mb-6">
            Expertise
          </div>
          <h2 className="font-sans text-4xl font-extrabold text-foreground md:text-5xl lg:text-6xl tracking-tight">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            A comprehensive toolkit of modern technologies leveraged to build resilient and scalable software.
          </p>
        </div>

        {/* Bento-style skills grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, idx) => (
            <div
              key={group.category}
              className={`group relative overflow-hidden rounded-2xl border border-white/5 glass-card p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 ${idx === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-primary/10 blur-xl transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/20" aria-hidden="true" />

              <div className="relative flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary border border-primary/20">
                  {group.icon}
                </div>
                <h3 className="font-sans text-lg font-bold text-foreground">
                  {group.category}
                </h3>
              </div>

              <ul className="relative mt-6 flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/10 bg-background/50 backdrop-blur-sm px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
