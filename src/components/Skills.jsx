const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Angular"],
  Backend: ["Node.js", "Express", "PHP", "Laravel", "C#", ".NET"],
  Database: ["MongoDB", "MySQL", "SQL Server"],
  DevOps: ["AWS Basics", "Docker", "CI/CD"],
};

export default function Skills() {
  return (
    <section id="skills" className="bg-black/20 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-secondary">Skills</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([title, items]) => (
            <div key={title} className="bg-black/40 p-6 rounded-xl shadow-card">
              <h3 className="font-semibold mb-4">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span
                    key={skill}
                    className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
