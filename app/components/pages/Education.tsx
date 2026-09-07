import { Slide } from "../../animation/Slide";
import { fallbackEducation } from "@/lib/fallback-data";
import { BiBookOpen, BiCheckCircle } from "react-icons/bi";

export default function Education() {
  return (
    <section className="mt-28 max-w-5xl">
      <Slide delay={0.16}>
        <div className="mb-10">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Education & Academics
          </h2>
          <p className="dark:text-zinc-400 text-zinc-600 max-w-2xl text-base">
            Formal university education and foundational academic background in computer science, algorithms, and distributed computing.
          </p>
        </div>
      </Slide>

      <Slide delay={0.18}>
        <div className="space-y-6">
          {fallbackEducation.map((edu, idx) => (
            <div
              key={idx}
              className="dark:bg-primary-bg bg-zinc-50 border border-zinc-200 dark:border-zinc-800 p-8 rounded-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-x-3">
                  <div className="p-3 dark:bg-zinc-800 bg-zinc-200 rounded-lg text-2xl dark:text-primary-color text-secondary-color">
                    <BiBookOpen aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-incognito text-2xl font-bold tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="dark:text-zinc-400 text-zinc-600 text-sm font-medium">
                      {edu.institution} — <span className="font-gitlabmono text-xs">{edu.location}</span>
                    </p>
                  </div>
                </div>
                <span className="font-gitlabmono text-sm dark:text-zinc-400 text-zinc-500 self-start md:self-auto px-3 py-1 rounded-md dark:bg-zinc-800 bg-zinc-200">
                  {edu.period}
                </span>
              </div>

              {edu.grade && (
                <div className="inline-flex items-center gap-x-1.5 text-xs font-gitlabmono px-3 py-1 mb-4 rounded-full dark:bg-green-950/40 bg-green-50 dark:text-green-300 text-green-700 border dark:border-green-800/60 border-green-200">
                  <BiCheckCircle />
                  <span>{edu.grade}</span>
                </div>
              )}

              <p className="dark:text-zinc-400 text-zinc-600 text-base leading-relaxed mb-6">
                {edu.description}
              </p>

              <div>
                <h4 className="font-incognito font-semibold text-sm mb-3 tracking-wide uppercase text-zinc-500 dark:text-zinc-400">
                  Key Coursework & Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-xs font-gitlabmono px-3 py-1.5 rounded-md dark:bg-zinc-800/90 bg-zinc-200/90 dark:text-zinc-300 text-zinc-700"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
}
