export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 flex justify-center"
    >
      <div className="max-w-xl w-full text-center">
        <h2 className="text-4xl font-bold mb-4 text-secondary">
          Let’s Talk 👋
        </h2>

        <p className="text-muted mb-10 leading-relaxed">
          Got a project, an idea, or just want to say hi?  
          I’m always open to discussing new opportunities and collaborations.
        </p>

        {/* Contact Cards */}
        <div className="grid gap-4 mb-10">
          <a
            href="mailto:rishi@example.com"
            className="group border border-border rounded-xl p-5 flex items-center justify-between hover:border-secondary transition"
          >
            <span className="text-left">
              <p className="font-medium">Email</p>
              <p className="text-sm text-muted">rishi@example.com</p>
            </span>
            <span className="text-secondary group-hover:translate-x-1 transition">
              →
            </span>
          </a>

          <a
            href="https://github.com/rishi111-code"
            target="_blank"
            className="group border border-border rounded-xl p-5 flex items-center justify-between hover:border-secondary transition"
          >
            <span className="text-left">
              <p className="font-medium">GitHub</p>
              <p className="text-sm text-muted">github.com/rishi111-code</p>
            </span>
            <span className="text-secondary group-hover:translate-x-1 transition">
              →
            </span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="group border border-border rounded-xl p-5 flex items-center justify-between hover:border-secondary transition"
          >
            <span className="text-left">
              <p className="font-medium">LinkedIn</p>
              <p className="text-sm text-muted">Let’s connect</p>
            </span>
            <span className="text-secondary group-hover:translate-x-1 transition">
              →
            </span>
          </a>
        </div>

        {/* CTA */}
        <a
          href="mailto:rishi@example.com"
          className="inline-block bg-secondary text-background px-8 py-3 rounded-full font-medium hover:opacity-90 transition"
        >
          Start a Conversation
        </a>
      </div>
    </section>
  );
}
