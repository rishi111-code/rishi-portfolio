import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="absolute inset-0 
        bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),
        linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:32px_32px]" />

      <div className="relative z-10 text-center max-w-4xl">
        <p className="text-sm tracking-widest text-secondary mb-4 uppercase">
          Building Scalable Digital Products
        </p>

        <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold leading-tight mb-6">
          Turning Ideas into{" "}
          <span className="bg-gradient-to-r from-secondary to-purple-400 
          bg-clip-text text-transparent">
            Powerful Web Experiences
          </span>
        </h1>

        <p className="text-muted max-w-2xl mx-auto mb-10 text-lg">
          Hi, I’m <span className="text-secondary font-medium">Rishi Rupchandani</span>.  
          A Full-Stack Developer crafting secure, scalable and high-performance
          applications using MERN, PHP, .NET and modern frontend tools.
        </p>

        <div className="flex justify-center gap-5">
          <a
            href="#projects"
            className="group flex items-center gap-2 
            bg-secondary text-black px-7 py-3 rounded-xl 
            font-semibold hover:scale-105 transition"
          >
            Explore Work
            <ArrowDownRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </a>

          <a
            href="#contact"
            className="px-7 py-3 rounded-xl border border-white/20 
            hover:border-secondary hover:text-secondary transition"
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </section>
  );
}
