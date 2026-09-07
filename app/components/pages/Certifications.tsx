import { Slide } from "../../animation/Slide";
import { fallbackCertifications } from "@/lib/fallback-data";
import { BiBadgeCheck, BiLinkExternal } from "react-icons/bi";

export default function Certifications() {
  return (
    <section className="mt-28 max-w-5xl">
      <Slide delay={0.16}>
        <div className="mb-10">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Certifications & Accreditations
          </h2>
          <p className="dark:text-zinc-400 text-zinc-600 max-w-2xl text-base">
            Professional certifications and specialized accreditations in machine learning, backend engineering, and web automation.
          </p>
        </div>
      </Slide>

      <Slide delay={0.18}>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {fallbackCertifications.map((cert, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between dark:bg-primary-bg bg-zinc-50 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 dark:bg-zinc-800 bg-zinc-200 rounded-lg text-xl dark:text-primary-color text-secondary-color">
                    <BiBadgeCheck aria-hidden="true" />
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-gitlabmono flex items-center gap-1 dark:text-primary-color text-secondary-color hover:underline"
                    >
                      Verify <BiLinkExternal />
                    </a>
                  )}
                </div>

                <h3 className="font-incognito text-lg font-bold tracking-tight mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs dark:text-zinc-400 text-zinc-600 mb-4">
                  {cert.issuer} • <span className="font-gitlabmono">{cert.issueDate}</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t dark:border-zinc-800/80 border-zinc-200">
                {cert.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[11px] font-gitlabmono px-2 py-0.5 rounded dark:bg-zinc-800 bg-zinc-200 dark:text-zinc-300 text-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
}
