import { useState } from "react";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Message is required.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    console.log("Contact form submitted:", formData);
    setIsSubmitted(true);
    setErrors({});
    setFormData(initialFormState);
  };

  return (
    <section className="relative space-y-8 pb-8 sm:space-y-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-56 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.15),transparent_65%)]" />

      <header className="opacity-0 motion-safe:animate-[fadeUp_0.7s_ease-out_forwards]">
        <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
          Get In Touch
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Contact Me
        </h1>
        <p className="mt-3 text-base text-slate-300 sm:text-lg">
          Let&apos;s build something amazing together.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 opacity-0 shadow-lg shadow-slate-950/30 backdrop-blur-sm sm:p-6 motion-safe:animate-[fadeUp_0.8s_ease-out_0.1s_forwards]">
          <h2 className="text-xl font-semibold text-white">Send a Message</h2>

          {isSubmitted && (
            <p className="mt-4 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
              Message Sent. Thank you for reaching out.
            </p>
          )}

          <form onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate>
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/25"
                placeholder="Your name"
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <p className="mt-2 text-xs text-rose-300">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/25"
                placeholder="akashkumar.dev01@gmail.com"
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <p className="mt-2 text-xs text-rose-300">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/25"
                placeholder="Tell me about your project..."
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <p className="mt-2 text-xs text-rose-300">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              Submit Message
            </button>
          </form>
        </article>

        <aside className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 opacity-0 shadow-lg shadow-slate-950/30 backdrop-blur-sm sm:p-6 motion-safe:animate-[fadeUp_0.85s_ease-out_0.18s_forwards]">
          <h2 className="text-xl font-semibold text-white">Contact Information</h2>

          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Email</p>
              <p className="mt-1">akashkumar.dev01@gmail.com</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Phone</p>
              <p className="mt-1">+91 9779039662</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Location</p>
              <p className="mt-1">India</p>
            </div>
          </div>

          <div className="mt-7">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Social Links</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href="https://github.com/akahkumardev01-sketch"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-200 transition duration-300 hover:border-cyan-300/70 hover:text-cyan-200"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/akash-kumar-9b041535a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-200 transition duration-300 hover:border-cyan-300/70 hover:text-cyan-200"
              >
                LinkedIn
              </a>

            </div>
          </div>
        </aside>
      </div>

      {/* Local keyframes keep animation setup scoped to this file. */}
      <style>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(14px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Contact;
