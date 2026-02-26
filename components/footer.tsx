export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-black/5 bg-background px-6 py-12 lg:px-8 overflow-hidden">
      {/* Decorative gradient blur at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <p className="text-sm font-medium text-foreground">
            G V S L HASINI<span className="text-primary">.</span>
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <p className="text-sm text-muted-foreground flex items-center gap-1.5">
          Designed & built with <span className="font-semibold text-gradient">React & Next.js</span>
        </p>
      </div>
    </footer>
  )
}
