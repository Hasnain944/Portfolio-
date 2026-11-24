import { Award, ExternalLink, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { certifications, education, hpLifeCertificates } from "@/data/profile";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="section-pad">
      <div className="container-x">
        <Reveal>
          <SectionHeading id="education-title" title="Education and certifications">
            A software engineering degree, backed by courses in development, data, cloud, security, and business.
          </SectionHeading>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h3 className="h-display text-xl">Education</h3>
            <ol className="mt-5 space-y-4">
              {education.map((e) => (
                <li key={e.degree} className="flex gap-4 rounded-2xl border border-line bg-panel p-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                    <GraduationCap className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h4 className="font-display text-lg font-semibold">{e.degree}</h4>
                    <p className="mt-0.5 text-sm text-muted">{e.school}</p>
                    <p className="mt-2 inline-flex rounded-full border border-line px-3 py-0.5 text-sm text-fg/90">
                      <time>{e.start}</time>
                      <span aria-hidden="true" className="px-1">–</span>
                      <span className="sr-only">to</span>
                      <time>{e.end}</time>
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className="h-display text-xl">Certifications</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {certifications.map((c) => (
                <li
                  key={c}
                  className="group flex items-center gap-3 rounded-xl border border-line bg-panel px-4 py-3.5 text-sm transition hover:border-accent/50 hover:bg-raised"
                >
                  <Award className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <h3 className="h-display text-xl">HP LIFE certificates</h3>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Online courses from the HP Foundation. Each card opens the certificate PDF.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {hpLifeCertificates.map((c) => (
              <li key={c.file}>
                <a
                  href={`/certificates/${c.file}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${c.title} certificate, ${c.date} (opens PDF in a new tab)`}
                  className="group flex h-full items-center gap-3 rounded-xl border border-line bg-panel px-4 py-3.5 text-sm transition hover:border-accent/50 hover:bg-raised"
                >
                  <Award className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <span className="min-w-0 flex-1">
                    <span className="block font-medium leading-snug">{c.title}</span>
                    <span className="block text-xs text-muted">HP LIFE · {c.date}</span>
                  </span>
                  <ExternalLink className="h-4 w-4 shrink-0 text-muted transition group-hover:text-accent" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
