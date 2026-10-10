import { CLIENTS, EDUCATION, PRINCIPLES, PROFILE } from "../data";
import {
  AvailabilityBadge,
  GhostText,
  Reveal,
  SectionHead,
  WordsReveal,
} from "./ui";
import { MapPin, Mail, Phone, ScanLine } from "lucide-react";
import { GithubIcon } from "./icons";

export default function About() {
  return (
    <section id="profile" className="relative">
      <GhostText text="Architecture" className="top-10 left-0 text-[17vw]" />
      <div className="relative mx-auto max-w-[100rem] px-5 py-24 md:px-10 md:py-36">
        <SectionHead index="01" label="Profile" right="18+ years · architecture & delivery" />

        <h2 className="mt-14 max-w-5xl font-display text-3xl font-semibold leading-[1.12] tracking-tight text-ink md:mt-20 md:text-5xl lg:text-[3.4rem]">
          <WordsReveal
            parts={[
              { t: "18+ years leading enterprise platforms across" },
              {
                t: "banking, insurance & healthcare",
                cls: "font-editorial font-normal italic text-accent",
              },
              { t: "— shaping technology strategy, modernizing applications and building" },
              {
                t: "AI-enabled solutions.",
                cls: "font-editorial font-normal italic text-accent",
              },
            ]}
          />
        </h2>

        <div className="mt-16 grid gap-14 lg:grid-cols-12 md:mt-24">
          {/* left: figure card */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <figure className="group relative overflow-hidden border border-line" data-cursor>
                  <img
                    src="images/hero-network.jpg"
                    alt="Abstract network — Sunhare system in operation"
                    className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/20 to-transparent" />
                  <div className="absolute inset-0 bg-accent/0 transition-colors duration-500 group-hover:bg-accent/5" />
                  {/* scan sweep on hover */}
                  <span className="absolute inset-x-0 top-0 h-px translate-y-0 bg-accent/60 opacity-0 transition-all duration-700 group-hover:translate-y-[420px] group-hover:opacity-100" />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                    <span className="font-mono text-[10px] tracking-[0.25em] text-fog uppercase">
                      Fig. 01 — sunhare.sys, in operation
                    </span>
                    <ScanLine className="h-4 w-4 text-accent" />
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-6 space-y-2.5 border border-line p-5 font-mono text-[11px] tracking-[0.15em] text-fog uppercase transition-colors duration-500 hover:border-accent/30">
                  <p className="flex items-center gap-3">
                    <MapPin className="h-3.5 w-3.5 text-accent" /> {PROFILE.location}
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail className="h-3.5 w-3.5 text-accent" />
                    <a href={PROFILE.mailto} className="transition-colors hover:text-accent">
                      {PROFILE.email}
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="h-3.5 w-3.5 text-accent" />
                    <a href={PROFILE.phoneHref} className="transition-colors hover:text-accent">
                      {PROFILE.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <GithubIcon className="h-3.5 w-3.5 text-accent" />
                    <a
                      href={PROFILE.github}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-accent"
                    >
                      github.com/sunilsunharedev
                    </a>
                  </p>
                  <div className="pt-2">
                    <AvailabilityBadge />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* right: narrative */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-fog md:text-xl">
                I'm a technology architect and delivery leader with 18+ years across BFSI,
                healthcare and media/product domains. I design scalable enterprise applications,
                guide modernization and manage multi-project portfolios in production-critical
                environments. I lead distributed teams of 5–20+ members, connecting business
                requirements with architecture, delivery governance and operational stability.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-lg leading-relaxed text-fog md:text-xl">
                My AI work spans agentic operations, RAG-based knowledge retrieval and LLM-assisted
                developer workflows. At Wipro, I architected healthcare modernization and GenAI
                assistants that reduced review cycle time by 30%. At TarkaSoft, I built Textellent’s
                Ops Copilot, reducing incident MTTR by 35% through AI-driven triage, resilient tool
                execution and human-in-the-loop approvals.
              </p>
            </Reveal>

            {/* principles */}
            <div className="mt-14">
              {PRINCIPLES.map((p, i) => (
                <Reveal key={p.index} delay={i * 0.08}>
                  <div
                    className="group grid gap-3 border-t border-line py-7 transition-colors duration-500 hover:bg-panel/60 md:grid-cols-12 md:gap-6 md:px-4"
                    data-cursor
                  >
                    <span className="font-mono text-xs text-accent md:col-span-1">{p.index}</span>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-ink transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent md:col-span-4 md:text-2xl">
                      {p.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-fog md:col-span-7">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-12 border-t border-line pt-7">
                <h3 className="font-display text-2xl font-semibold text-ink">Education & development</h3>
                <div className="mt-5 space-y-5">
                  {EDUCATION.map((item) => (
                    <div key={item.degree}>
                      <p className="text-[15px] text-ink">{item.degree}</p>
                      <p className="mt-1 text-sm text-fog">{item.institution} · {item.year}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-relaxed text-fog">
                  Internal company-level certifications in AWS, Microsoft Azure and Agile/Scrum fundamentals.
                  Languages: English and Hindi.
                </p>
              </div>
            </Reveal>

            {/* clients */}
            <Reveal delay={0.1}>
              <div className="mt-12 border-t border-line pt-7">
                <p className="font-mono text-[10px] tracking-[0.3em] text-dim uppercase">
                  Trusted on engagements for
                </p>
                <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                  {CLIENTS.map((c, i) => (
                    <span
                      key={c}
                      data-cursor
                      className="group/client font-display text-lg font-medium tracking-tight text-fog transition-colors duration-300 hover:text-accent md:text-xl"
                    >
                      {c}
                      <sup className="ml-1 font-mono text-[9px] text-dim transition-colors group-hover/client:text-accent">
                        0{i + 1}
                      </sup>
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
