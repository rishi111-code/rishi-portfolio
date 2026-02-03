export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-8 px-8 py-4 rounded-full 
        bg-primary/70 backdrop-blur-xl border border-white/10 shadow-lg">
        
        <h1 className="text-lg font-semibold tracking-wide">
          Rishi<span className="text-secondary">.</span>
        </h1>

        <div className="hidden md:flex items-center gap-6 text-sm text-muted">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative hover:text-secondary transition after:absolute 
              after:left-0 after:-bottom-1 after:w-0 after:h-[1px] 
              after:bg-secondary hover:after:w-full after:transition-all"
            >
              {item}
            </a>
          ))}
        </div>

        <a href="public/Resume.pdf"
  download
  className="ml-2 px-4 py-2 text-sm rounded-full 
  border border-secondary/40 text-secondary 
  hover:bg-secondary hover:text-black transition"
>
  Resume
</a>

      </div>
    </nav>
  );
}
