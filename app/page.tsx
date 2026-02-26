import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="h-px bg-border" />
        </div>
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
