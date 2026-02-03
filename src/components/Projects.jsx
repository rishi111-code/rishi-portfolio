const projects = [
  {
    title: "FundForge",
    tech: "React, Node, MySQL, JWT",
    desc: "Startup funding & investor management platform with role-based access and analytics.",
    link: "https://github.com/rishi111-code/FundForge",
  },
  {
    title: "MOOC Certificate Repository",
    tech: "PHP, MySQL, Bootstrap",
    desc: "Centralized system for managing and sharing MOOC certificates securely.",
    link: "https://github.com/rishi111-code/Mooc-Certificate-repository",
  },
  {
    title: "AgroConnect",
    tech: "MERN, Socket.io",
    desc: "B2B platform connecting farmers and buyers with real-time chat.",
    link: "https://github.com/rishi111-code/Agroconnect",
  },
  {
    title: "Health Plus",
    tech: "React, Node, MongoDB",
    desc: "Healthcare portal with appointments, records and analytics.",
    link: "https://github.com/rishi111-code/Health-plus",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-10 text-secondary">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p => (
          <div key={p.title} className="bg-black/40 p-6 rounded-xl shadow-card hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-secondary mb-2">{p.tech}</p>
            <p className="text-muted mb-4">{p.desc}</p>
            <a href={p.link} target="_blank" className="text-secondary underline">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
