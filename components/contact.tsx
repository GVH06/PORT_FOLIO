import { Mail, Github, Linkedin, ArrowUpRight, Sparkles } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32 lg:px-8 overflow-hidden">
      {/* Background line separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="group relative overflow-hidden rounded-3xl border border-white/10 glass-card p-12 md:p-24 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
          {/* Decorative glowing backdrops */}
          <div className="absolute -right-40 -bottom-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px] transition-all duration-[2000ms] group-hover:bg-primary/30 group-hover:scale-110" aria-hidden="true" />
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px]" aria-hidden="true" />

          {/* Subtly animated gradient overlay pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-20" aria-hidden="true" />

          <div className="relative flex flex-col items-center text-center">
            {/* Availability */}
            <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-6 py-3 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              <span className="text-sm font-semibold text-primary">
                Open to internship & full-time roles
              </span>
            </div>

            <h2 className="font-sans text-5xl font-extrabold text-foreground md:text-7xl tracking-tight leading-[1.1]">
              {"Let's work "}
              <span className="text-gradient">together.</span>
            </h2>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-muted-foreground/80 font-medium">
              {"I'm always interested in hearing about new opportunities, collaborations, or just having a chat about tech. Drop me a line."}
            </p>

            {/* Email CTA */}
            <a
              href="mailto:hasinigurram5@gmail.com"
              className="group/btn relative mt-12 inline-flex items-center justify-center gap-3 rounded-full bg-primary px-10 py-5 text-base font-bold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
              <Mail className="h-5 w-5" />
              hasinigurram5@gmail.com
              <Sparkles className="h-5 w-5 ml-1 transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:text-yellow-300" />
            </a>

            {/* Social links */}
            <div className="mt-16 flex items-center justify-center gap-6">
              <a
                href="https://github.com/GVH06"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-full bg-background/50 border border-white/10 px-6 py-3.5 text-sm font-semibold text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:bg-primary/10 hover:-translate-y-1 shadow-sm"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
                GitHub
                <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
              </a>
              <a
                href="https://www.linkedin.com/in/g-v-s-l-hasini-02a532328/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-full bg-background/50 border border-white/10 px-6 py-3.5 text-sm font-semibold text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:bg-primary/10 hover:-translate-y-1 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
                <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
