"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

const projects = [
  {
    name: "Cairn",
    description:
      "A mobile-first local discovery and trip-planning app built around context, route awareness, and local geography.",
    stack: ["Next.js", "TypeScript", "Tailwind", "GSAP", "Google Maps"],
    href: "https://cairn-ulf7.onrender.com",
    featured: true,
  },
  {
    name: "Waterworld",
    description:
      "A story-driven island-building game prototype using React state, reducers, requirements, assets, and scene progression.",
    stack: ["React", "TypeScript"],
    href: "#",
  },
  {
    name: "Geo Context Engine",
    description:
      "A Python data project that combines public geographic APIs to understand counties, cities, coastlines, water features, terrain, and route context.",
    stack: ["Python", "US Census", "USGS", "NOAA"],
    href: "#",
  },
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Python",
  "Tailwind CSS",
  "GSAP",
  "REST APIs",
  "Google Maps",
  "Git",
];

export default function Home() {
  const elementsRef = useRef<Set<HTMLElement>>(new Set());

  const collectRef = (element: HTMLElement | null) => {
    if (element) {
      elementsRef.current.add(element);
    }
  };

useEffect(() => {
  const elements = Array.from(elementsRef.current);
  const underline = elements.find((el) => el.dataset.gsap === "hero-underline");
  const label_text = elements.find((el) => el.dataset.gsap === "hero-label-text");
  const container = elements.find((el) => el.dataset.gsap === "hero-container");
  const possible = elements.find((el) => el.dataset.gsap === "hero-possible");

  if (!underline || !label_text || !container || !possible) return;

  const ctx = gsap.context(() => {
    gsap.set(possible, { y: -60, x: 192 });
    gsap.set(container, { opacity: 1 });
    gsap.set(label_text, { rotation: 2, y: 0 });
    gsap.set(underline, {
      "--underline-scale": 0,
      color: "#94a3b8",
      letterSpacing: "0.05em",
      scaleX: 1,
      fontWeight: 600,
      x: 0,
      opacity: 0,
      y: 20,
    });

    gsap.to(underline, { opacity: 1, duration: 3, ease: "power2.inOut" });
    gsap.to(underline, { y: 0, duration: 3, ease: "power2.out" });
    gsap.to(underline, {
      "--underline-scale": 1,
      x: 48,
      letterSpacing: "0.1em",
      scaleX: 1.1,
      fontWeight: 700,
      delay: 2.75,
      duration: 4,
    });
    gsap.to(underline, { color: "rgb(129, 126, 108)", ease: "power2.out", delay: 5.25, duration: 2 });
    gsap.to(label_text, { rotation: 0, ease: "power2.out", delay: 1.25, duration: 2.5 });
    gsap.to(label_text, { y: 30, ease: "power2.inOut", delay: 3, duration: 1.5 });
    gsap.to(container, { opacity: 0.9, ease: "power2.out", duration: 3, delay: 3 });
    gsap.to(possible, { y: 0, x: 74, duration: 2, delay: 4, });
  });

  return () => ctx.revert(); // kills tweens + resets inline styles on unmount/re-run
}, []);

  return (
    <main
      ref={collectRef}
      data-gsap="main"
      className="min-h-screen text-zinc-100
      bg-[url('/texture2.jpg')] bg-center
      overflow-hidden"
    >
      <div ref={collectRef} data-gsap="hero-container" className="bg-black">
      {/* HERO */}

      <section
        ref={collectRef}
        data-gsap="hero"
        className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-6 pb-24 sm:px-10"
      >
        <p
          ref={collectRef}
          data-gsap="hero-label"
          className="mb-8 text-sm font-medium uppercase tracking-[0.3em] perspective-500 text-zinc-500"
        >
          <span
            ref={collectRef}
            data-gsap="hero-label-text"
            className="
              relative z-10 px-6 py-2
              inline-block
              before:absolute before:top-0 before:left-0
              before:h-full before:w-0.5
              before:bg-linear-to-b before:from-blue-600 before:to-transparent
              after:absolute after:right-0 after:top-0
              after:h-full after:w-0.5
              after:bg-linear-to-b after:from-blue-600 after:to-transparent
            "
          >
            Developer · Student · Builder
          </span>
        </p>

        <h1
          ref={collectRef}
          data-gsap="hero-title"
          className="w-full my-8 text-6xl sm:text-8xl font-semibold tracking-tight leading-none">
  <span data-gsap="hero-title-text" className="w-full inline-flex flex-col">
    <span
      ref={collectRef}
      data-gsap="hero-whats"
      className="inline-block w-fit bg-linear-to-r from-white to-slate-600 bg-clip-text text-transparent"
    >
      What&apos;s
    </span>

    <span
      ref={collectRef}
      data-gsap="hero-possible"
      className="inline-block w-fit bg-linear-to-r from-white to-slate-600 bg-clip-text text-transparent"
    >
      possible
    </span>
  </span>
</h1>

        <p
          ref={collectRef}
          data-gsap="hero-underline"
          className="
            relative w-fit
            after:absolute
            after:left-0
            after:bottom-0
            after:h-0.5
            after:w-full
            after:origin-left
            after:bg-blue-500/30
            after:rounded-3xl
            after:content-['']
            after:scale-x-(--underline-scale)
          "
          style={
            {
              "--underline-scale": "0",
            } as React.CSSProperties
          }
        >
          More than you think
        </p>

        <p
          ref={collectRef}
          data-gsap="hero-description"
          className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl"
        >
          I&apos;m a software development student with a background in web
          development, currently working with TypeScript, React, Next.js, and
          Python. Solving real world problem with algorithms.
        </p>

        <div
          ref={collectRef}
          data-gsap="hero-actions"
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            ref={collectRef}
            data-gsap="hero-action"
            href="#projects"
            className="rounded-full bg-zinc-100 px-6 py-3 font-medium text-zinc-950 transition hover:bg-white"
          >
            View my work
          </Link>

          <Link
            ref={collectRef}
            data-gsap="hero-action"
            href="#contact"
            className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:border-zinc-500 hover:bg-zinc-900"
          >
            Contact me
          </Link>
        </div>
      </section>

      {/* ABOUT */}

      <section
        ref={collectRef}
        data-gsap="about"
        id="about"
        className="border-t border-zinc-900 bg-zinc-900/30"
      >
        <div
          ref={collectRef}
          data-gsap="about-inner"
          className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:px-10 lg:grid-cols-[1fr_1.5fr]"
        >
          <h2
            ref={collectRef}
            data-gsap="about-title"
            className="text-3xl font-semibold tracking-tight"
          >
            About
          </h2>

          <div
            ref={collectRef}
            data-gsap="about-content"
            className="space-y-6 text-lg leading-8 text-zinc-400"
          >
            <p ref={collectRef} data-gsap="about-paragraph">
              I like building things from the ground up and figuring out how the
              pieces connect: interface, state, APIs, data, architecture, and
              user experience.
            </p>

            <p ref={collectRef} data-gsap="about-paragraph">
              Most of my work lives somewhere between software engineering and
              product design. I care about whether something works, but also
              whether it feels good to use and whether the underlying structure
              can grow with the idea.
            </p>

            <p ref={collectRef} data-gsap="about-paragraph">
              I&apos;m currently expanding deeper into Python and geographic
              data while continuing to build primarily with Next.js, TypeScript,
              and React.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}

      <section
        ref={collectRef}
        data-gsap="projects"
        id="projects"
        className="mx-auto max-w-6xl px-6 py-24 sm:px-10"
      >
        <div ref={collectRef} data-gsap="projects-header" className="mb-12">
          <p
            ref={collectRef}
            data-gsap="projects-label"
            className="text-sm uppercase tracking-[0.3em] text-zinc-500"
          >
            Selected work
          </p>

          <h2
            ref={collectRef}
            data-gsap="projects-title"
            className="mt-3 text-4xl font-semibold tracking-tight"
          >
            Projects
          </h2>
        </div>

        <div ref={collectRef} data-gsap="projects-grid" className="grid gap-6">
          {projects.map((project) => (
            <article
              ref={collectRef}
              data-gsap="project"
              data-project={project.name}
              key={project.name}
              className={`rounded-3xl border p-8 ${
                project.featured
                  ? "border-zinc-700 bg-zinc-900"
                  : "border-zinc-900 bg-zinc-950"
              }`}
            >
              <div
                ref={collectRef}
                data-gsap="project-inner"
                className="flex flex-col justify-between gap-8 md:flex-row"
              >
                <div
                  ref={collectRef}
                  data-gsap="project-content"
                  className="max-w-2xl"
                >
                  {project.featured && (
                    <p
                      ref={collectRef}
                      data-gsap="project-featured"
                      className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500"
                    >
                      Featured project
                    </p>
                  )}

                  <h3
                    ref={collectRef}
                    data-gsap="project-title"
                    className="text-3xl font-semibold"
                  >
                    {project.name}
                  </h3>

                  <p
                    ref={collectRef}
                    data-gsap="project-description"
                    className="mt-4 leading-7 text-zinc-400"
                  >
                    {project.description}
                  </p>
                </div>

                <div
                  ref={collectRef}
                  data-gsap="project-stack"
                  className="flex flex-wrap content-start gap-2 md:max-w-xs md:justify-end"
                >
                  {project.stack.map((item) => (
                    <span
                      ref={collectRef}
                      data-gsap="project-stack-item"
                      key={item}
                      className="rounded-full border border-zinc-800 px-3 py-1 text-sm text-zinc-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div
                ref={collectRef}
                data-gsap="project-link-wrapper"
                className="mt-8"
              >
                <Link
                  ref={collectRef}
                  data-gsap="project-link"
                  href={project.href}
                  className="text-sm rounded-2xl py-1 px-3 font-medium text-zinc-800 underline bg-yellow-100 decoration-zinc-700 underline-offset-4 hover:decoration-zinc-300"
                >
                  View project
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}

      <section
        ref={collectRef}
        data-gsap="skills"
        className="border-y border-zinc-900 bg-zinc-900/30"
      >
        <div
          ref={collectRef}
          data-gsap="skills-inner"
          className="mx-auto max-w-6xl px-6 py-24 sm:px-10"
        >
          <p
            ref={collectRef}
            data-gsap="skills-label"
            className="text-sm uppercase tracking-[0.3em] text-zinc-500"
          >
            Tools I use
          </p>

          <div
            ref={collectRef}
            data-gsap="skills-list"
            className="mt-8 flex flex-wrap gap-3"
          >
            {skills.map((skill) => (
              <span
                ref={collectRef}
                data-gsap="skill"
                key={skill}
                className="rounded-full bg-zinc-900 px-4 py-2 text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section
        ref={collectRef}
        data-gsap="contact"
        id="contact"
        className="mx-auto max-w-6xl px-6 py-24 sm:px-10"
      >
        <div ref={collectRef} data-gsap="contact-inner" className="max-w-2xl">
          <p
            ref={collectRef}
            data-gsap="contact-label"
            className="text-sm uppercase tracking-[0.3em] text-zinc-500"
          >
            Contact
          </p>

          <h2
            ref={collectRef}
            data-gsap="contact-title"
            className="mt-3 text-4xl font-semibold tracking-tight"
          >
            Want to build something?
          </h2>

          <p
            ref={collectRef}
            data-gsap="contact-description"
            className="mt-6 text-lg leading-8 text-zinc-400"
          >
            I&apos;m interested in software development, product work,
            interesting technical problems, and opportunities where I can keep
            building useful things.
          </p>

          <div
            ref={collectRef}
            data-gsap="contact-links"
            className="mt-8 flex flex-wrap gap-6 text-sm"
          >
            <a
              ref={collectRef}
              data-gsap="contact-link"
              href="mailto:adam.beau.diaz@gmail.com"
              className="text-zinc-200 underline decoration-zinc-700 underline-offset-4 hover:decoration-zinc-300"
            >
              Email
            </a>

            <a
              ref={collectRef}
              data-gsap="contact-link"
              href="#"
              className="text-zinc-200 underline decoration-zinc-700 underline-offset-4 hover:decoration-zinc-300"
            >
              GitHub
            </a>

            <a
              ref={collectRef}
              data-gsap="contact-link"
              href="#"
              className="text-zinc-200 underline decoration-zinc-700 underline-offset-4 hover:decoration-zinc-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer
        ref={collectRef}
        data-gsap="footer"
        className="border-t border-zinc-900"
      >
        <div
          ref={collectRef}
          data-gsap="footer-inner"
          className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-10"
        >
          <p ref={collectRef} data-gsap="footer-built">
            Built with Next.js and TypeScript.
          </p>

          <p ref={collectRef} data-gsap="footer-copyright">
            © 2026
          </p>
        </div>
      </footer>
      </div>
    </main>
  );
}
