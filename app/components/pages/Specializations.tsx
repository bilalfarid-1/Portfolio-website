import { Slide } from "../../animation/Slide";
import { fallbackSpecializations } from "@/lib/fallback-data";
import {
  BiServer,
  BiBrain,
  BiNetworkChart,
  BiCodeAlt,
} from "react-icons/bi";

const iconMap: Record<string, any> = {
  BiServer,
  BiBrain,
  BiNetworkChart,
  BiCodeAlt,
};

export default function Specializations() {
  return (
    <section className="mt-28 mb-16">
      <Slide delay={0.16}>
        <div className="mb-12">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            What I Do
          </h2>
          <p className="dark:text-zinc-400 text-zinc-600 max-w-2xl text-base">
            Specialized engineering domains spanning high-throughput backend services, predictive machine learning pipelines, and responsive client architectures.
          </p>
        </div>
      </Slide>

      <Slide delay={0.18}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {fallbackSpecializations.map((spec, idx) => {
            const IconComponent = iconMap[spec.icon] || BiCodeAlt;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between dark:bg-primary-bg bg-zinc-50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 p-6 rounded-xl transition duration-200"
              >
                <div>
                  <div className="flex items-center gap-x-3 mb-4">
                    <div className="p-3 dark:bg-zinc-800 bg-zinc-200 rounded-lg text-2xl dark:text-primary-color text-secondary-color">
                      <IconComponent aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-incognito text-xl font-bold tracking-tight">
                        {spec.title}
                      </h3>
                      <p className="text-xs dark:text-zinc-400 text-zinc-500 font-gitlabmono">
                        {spec.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="dark:text-zinc-400 text-zinc-600 text-sm leading-relaxed mb-6">
                    {spec.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t dark:border-zinc-800/80 border-zinc-200">
                  {spec.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs font-gitlabmono px-2.5 py-1 rounded-md dark:bg-zinc-800/80 bg-zinc-200/80 dark:text-zinc-300 text-zinc-700"
                    >
                      {tag}
                    </span>
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
