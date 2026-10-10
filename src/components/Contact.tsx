import { useState } from "react";
import { ArrowUp, ArrowUpRight, Check, Copy, Mail, Phone } from "lucide-react";
import { GithubIcon } from "./icons";
import { PROFILE } from "../data";
import { GhostText, Magnetic, MaskText, Reveal, SectionHead, SpotCard } from "./ui";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = PROFILE.mailto;
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="bg-grid bg-fade-mask absolute inset-0 opacity-70" />
      <GhostText text="Say Hello" className="top-14 left-0 text-[18vw]" />
      <div className="animate-drift pointer-events-none absolute right-[8%] top-1/3 h-72 w-72 rounded-full bg-accent/[0.06] blur-[110px]" />

      <div className="relative mx-auto max-w-[100rem] px-5 pb-10 pt-24 md:px-10 md:pt-36">
        <SectionHead index="05" label="Contact" right="Architecture · delivery · AI" />

        <div className="mt-16 md:mt-24">
          <h2
            className="font-display font-bold uppercase leading-[0.9] tracking-[-0.03em]"
            data-cursor
          >
            <MaskText>
              <span className="text-[clamp(2.6rem,8.5vw,8rem)] text-ink">Have a system</span>
            </MaskText>
            <MaskText delay={0.1}>
              <span className="text-stroke text-[clamp(2.6rem,8.5vw,8rem)]">worth</span>
            </MaskText>
            <MaskText delay={0.18}>
              <span className="font-editorial text-[clamp(2.8rem,9vw,8.5rem)] font-normal normal-case italic tracking-normal text-accent">
                engineering?
              </span>
            </MaskText>
          </h2>
        </div>

        <Reveal className="mt-14 md:mt-20">
          <div className="grid gap-6 lg:grid-cols-12">
            {/* email card */}
            <SpotCard
              size={480}
              className="border border-line bg-panel/40 transition-colors duration-500 hover:border-accent/30 lg:col-span-7"
            >
              <div className="relative p-7 md:p-9">
                <p className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.3em] text-dim uppercase">
                  <Mail className="h-3.5 w-3.5 text-accent" /> Direct line — email
                </p>
                <a
                  href={PROFILE.mailto}
                  className="group mt-5 block break-all font-display text-2xl font-semibold tracking-tight text-ink transition-colors duration-300 hover:text-accent md:text-4xl"
                >
                  {PROFILE.email}
                  <ArrowUpRight className="ml-3 inline h-6 w-6 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Magnetic strength={0.28}>
                    <a
                      href={PROFILE.mailto}
                      className="inline-flex items-center gap-3 bg-accent px-6 py-3.5 font-mono text-[10.5px] font-semibold tracking-[0.22em] text-coal uppercase transition-shadow duration-300 hover:shadow-[0_10px_36px_-8px_rgba(214,255,61,0.45)]"
                    >
                      Start a conversation
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Magnetic>
                  <Magnetic strength={0.28}>
                    <button
                      onClick={copyEmail}
                      className="inline-flex items-center gap-3 border border-line px-6 py-3.5 font-mono text-[10.5px] tracking-[0.22em] text-ink uppercase transition-colors duration-300 hover:border-accent hover:text-accent"
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 text-accent" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" /> Copy email
                        </>
                      )}
                    </button>
                  </Magnetic>
                </div>
              </div>
            </SpotCard>

            {/* phone card */}
            <SpotCard
              size={380}
              className="border border-line bg-panel/40 transition-colors duration-500 hover:border-accent/30 lg:col-span-5"
            >
              <div className="relative flex h-full flex-col justify-between p-7 md:p-9">
                <div>
                  <p className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.3em] text-dim uppercase">
                    <Phone className="h-3.5 w-3.5 text-accent" /> Phone
                  </p>
                  <a
                    href={PROFILE.phoneHref}
                    className="mt-5 block font-display text-2xl font-semibold tracking-tight text-ink transition-colors duration-300 hover:text-accent md:text-4xl"
                  >
                    {PROFILE.phone}
                  </a>
                </div>
                <div className="mt-8 border-t border-line pt-5 font-mono text-[10.5px] leading-relaxed tracking-[0.18em] text-dim uppercase">
                  {PROFILE.location} · IST (UTC +5:30)
                  <br />
                  Technology architecture · Delivery leadership
                </div>
              </div>
            </SpotCard>
          </div>
        </Reveal>

        {/* github banner */}
        <Reveal delay={0.12}>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            data-cursor
            className="group mt-6 flex items-center justify-between gap-4 border border-line bg-panel/40 px-7 py-5 transition-all duration-500 hover:border-accent/50 hover:bg-panel/70 md:px-9"
          >
            <span className="flex items-center gap-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center border border-line transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-coal">
                <GithubIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-mono text-[9px] tracking-[0.3em] text-dim uppercase">
                  GitHub — code, agents & experiments
                </span>
                <span className="mt-1 block font-display text-lg font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent md:text-xl">
                  github.com/sunilsunharedev
                </span>
              </span>
            </span>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-dim transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
          </a>
        </Reveal>

        <Reveal>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"
            className="group mt-6 flex items-center justify-between gap-4 border border-line bg-panel/40 px-7 py-5 text-fog transition-colors hover:border-accent/50 hover:text-accent md:px-9">
            <span className="font-display text-lg font-semibold">Connect with Sunil on LinkedIn</span>
            <ArrowUpRight className="h-5 w-5 shrink-0" />
          </a>
        </Reveal>

        {/* footer */}
        <footer className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-line pb-6 pt-8 md:mt-28 md:flex-row md:items-center">
          <p className="font-mono text-[10px] tracking-[0.25em] text-dim uppercase">
            © 2026 {PROFILE.name} — built with Java-grade rigor
          </p>
          <p className="font-mono text-[10px] tracking-[0.25em] text-dim uppercase">
            <span className="text-accent">SS</span> / Technology Architect · GenAI ·{" "}
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="text-fog transition-colors duration-300 hover:text-accent"
            >
              @sunilsunharedev
            </a>
          </p>
          <Magnetic strength={0.35}>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-fog transition-colors duration-300 hover:text-accent"
            >
              <span className="uppercase">Back to top</span>
              <span className="grid h-8 w-8 place-items-center border border-line transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-coal">
                <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </Magnetic>
        </footer>
      </div>
    </section>
  );
}
