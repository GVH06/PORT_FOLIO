"use client"

import { useState } from "react"
import { ExternalLink, Github, ChevronDown, ChevronUp, ArrowUpRight, FolderGit2 } from "lucide-react"

interface Project {
  title: string
  number: string
  problem: string
  approach: string
  architecture: string
  techStack: string[]
  challenges: string
  results: string
  liveUrl: string
  githubUrl: string
}

const projects: Project[] = [
  {
    title: "Chess",
    number: "01",
    problem:
      "Designed and developed a single-player chess game where the user competes against a CPU opponent, featuring intelligent move evaluation, strategic gameplay logic, and a smooth, interactive user experience.",
    approach:
      "Implemented a structured game flow to handle player and CPU turns, maintaining the board state and move history using JSON for efficient data management. Designed responsive move validation, state updates, and interactive board rendering to ensure smooth and engaging gameplay.",
    architecture:
      "GUI-based interface design, event-driven programming, turn-based game flow control, game logic and move validation, basic AI for CPU decision-making, and JSON-based data management. and move history.",
    techStack: ["Python", "JSON Module", "python-chess(lib)"],
    challenges:
      "Implementing accurate move validation for all chess pieces while synchronizing UI updates with game logic to ensure smooth and responsive gameplay was a key challenge during the project.",
    results:
      "The project successfully delivered a single-player chess game with smooth gameplay, accurate move handling, and an interactive interface against a CPU opponent.",
    liveUrl: "https://Chess.example.com",
    githubUrl: "https://github.com/GVH06/CHESS",
  },
  {
    title: "Canteen Hub",
    number: "02",
    problem:
      "Streamline food ordering and menu management for students, faculty, and staff, allowing administrators to manage menu items and orders efficiently.",
    approach:
      "Designed a clean interface with auto-categorization of transactions using ML classification. Focused on data visualization and actionable insights rather than feature bloat.",
    architecture:
      "React SPA with Vite, Express.js REST API, MongoDB for flexible transaction schemas, Plaid API for bank integration.",
    techStack: ["Java (OOPS)"],
    challenges:
      "Accurately categorizing diverse transaction descriptions across different banks. Built a training pipeline with user feedback loops to improve classification over time.",
    results:
      "The system successfully streamlined menu management and order processing through an efficient console-based interface with persistent data storage.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/GVH06/CANTEEN_HUB/tree/main",
  },
  {
    title: "Smart Resource Scheduler",
    number: "03",
    problem:
      "Organizations needed an efficient system to manage and allocate shared resources centrally while preventing scheduling conflicts and ensuring optimal utilization.",
    approach:
      "Designed a centralized database to store and manage resource details, bookings, and availability schedules.Implemented SQL queries and constraints to handle allocation.",
    architecture:
      "PostgreSQL database, SQL queries and constraints for resource allocation.",
    techStack: ["PostgreSQL", "Java"],
    challenges:
      "Handling concurrent booking requests while preventing scheduling conflicts and maintaining data consistency in the PostgreSQL database was a key challenge.",
    results:
      "The system successfully enabled efficient resource allocation, minimized scheduling conflicts, and ensured centralized, reliable management of resource bookings.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/GVH06/SMART_RESOURCE_CAMPUS",
  },
]

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className="group relative h-full flex flex-col">
      {/* Glow effect behind card */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/30 to-blue-500/30 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

      <div className="relative flex-1 rounded-2xl border border-white/5 glass-card p-8 transition-all duration-500 hover:-translate-y-1">
        {/* Number & links row */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-500">
            <FolderGit2 className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2.5 bg-background/50 border border-white/5 text-muted-foreground transition-all duration-300 hover:bg-primary/20 hover:text-primary hover:border-primary/50"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2.5 bg-background/50 border border-white/5 text-muted-foreground transition-all duration-300 hover:bg-primary/20 hover:text-primary hover:border-primary/50"
              aria-label={`View ${project.title} live demo`}
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-sans text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        {/* Problem */}
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground/80 flex-1">
          {project.problem}
        </p>

        {/* Tech stack pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-medium text-primary/80 transition-colors duration-300 group-hover:border-primary/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expand/Collapse */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-all duration-300 hover:text-primary group-hover:gap-3"
          aria-expanded={expanded}
        >
          {expanded ? "Show less details" : "Explore project"}
          {expanded ? (
            <ChevronUp className="h-4 w-4 text-primary" />
          ) : (
            <ChevronDown className="h-4 w-4 text-primary" />
          )}
        </button>

        {/* Expanded details */}
        <div className={`grid transition-all duration-500 ease-in-out ${expanded ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
          <div className="overflow-hidden">
            <div className="border-t border-white/10 pt-6">
              <dl className="grid gap-6">
                {[
                  { label: "Approach", value: project.approach },
                  { label: "Architecture", value: project.architecture },
                  { label: "Challenges", value: project.challenges },
                  { label: "Results", value: project.results },
                ].map((item) => (
                  <div key={item.label}>
                    <dt className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {item.label}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-6xl relative z-10">
        {/* Section heading */}
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm font-semibold uppercase tracking-widest text-primary mb-6">
            Selected Work
          </div>
          <h2 className="font-sans text-4xl font-extrabold text-foreground md:text-5xl lg:text-6xl tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            A collection of robust solutions built with Java and modern technologies to solve complex architectural challenges.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
