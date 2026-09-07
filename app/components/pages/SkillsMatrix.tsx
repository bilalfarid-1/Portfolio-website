import { Slide } from "../../animation/Slide";
import { fallbackSkills } from "@/lib/fallback-data";
import {
  BiCodeCurly,
  BiLayer,
  BiBrain,
  BiWrench,
} from "react-icons/bi";

const iconMap: Record<string, any> = {
  BiCodeCurly,
  BiLayer,
  BiBrain,
  BiWrench,
};

export default function SkillsMatrix() {
  return (
    <section className="mt-28 max-w-5xl">
      <Slide delay={0.16}>
        <div className="mb-10">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Technical Skills & Matrix
          </h2>
          <p className="dark:text-zinc-400 text-zinc-600 max-w-2xl text-base">
            Categorized engineering skills, programming languages, backend frameworks, data science toolkits, and DevOps platforms.
          </p>
        </div>
      </Slide>

      <Slide delay={0.18}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {fallbackSkills.map((category, idx) => {
            const IconComponent = iconMap[category.iconName] || BiCodeCurly;
            return (
              <div
                key={idx}
                className="dark:bg-primary-bg bg-zinc-50 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl"
              >
                <div className="flex items-center gap-x-3 mb-6 pb-4 border-b dark:border-zinc-800/80 border-zinc-200">
                  <div className="p-2.5 dark:bg-zinc-800 bg-zinc-200 rounded-lg text-xl dark:text-primary-color text-secondary-color">
                    <IconComponent aria-hidden="true" />
                  </div>
                  <h3 className="font-incognito text-xl font-bold tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-start justify-between gap-3 p-3 rounded-lg dark:bg-zinc-900/50 bg-zinc-100/70 border border-transparent dark:hover:border-zinc-800 hover:border-zinc-300 transition"
                    >
                      <div>
                        <span className="font-semibold text-sm tracking-tight block dark:text-white text-zinc-900">
                          {skill.name}
                        </span>
                        {skill.description && (
                          <span className="text-xs dark:text-zinc-400 text-zinc-500 font-gitlabmono block mt-0.5">
                            {skill.description}
                          </span>
                        )}
                      </div>

                      {skill.level && (
                        <span className="text-[11px] font-gitlabmono px-2 py-0.5 rounded-full dark:bg-zinc-800 bg-zinc-200 dark:text-zinc-300 text-zinc-700 whitespace-nowrap">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Slide>
    </section>
  );
}
