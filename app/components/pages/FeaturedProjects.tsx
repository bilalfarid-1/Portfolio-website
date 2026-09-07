import Link from "next/link";
import Image from "next/image";
import { Slide } from "../../animation/Slide";
import { sanityFetch } from "@/lib/sanity.client";
import { projectsQuery } from "@/lib/sanity.query";
import { ProjectType } from "@/types";
import { BiRightArrowAlt } from "react-icons/bi";

export default async function FeaturedProjects() {
  const projects: ProjectType[] = await sanityFetch({
    query: projectsQuery,
    tags: ["project"],
  });

  const featured = projects.slice(0, 4);

  return (
    <section className="mt-28 mb-16">
      <Slide delay={0.16}>
        <div className="flex items-center justify-between flex-wrap gap-4 mb-12">
          <div>
            <h2 className="font-incognito text-4xl mb-3 font-bold tracking-tight">
              Featured Projects
            </h2>
            <p className="dark:text-zinc-400 text-zinc-600 max-w-xl text-base">
              Hand-picked selection of production APIs, machine learning pipelines, and full-stack platforms.
            </p>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-x-1 font-semibold dark:text-primary-color text-secondary-color hover:underline text-base group"
          >
            <span>Explore All ({projects.length})</span>
            <BiRightArrowAlt className="text-xl group-hover:translate-x-1 duration-200" />
          </Link>
        </div>
      </Slide>

      <Slide delay={0.18}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {featured.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project._id}
              className="flex flex-col justify-between dark:bg-primary-bg bg-zinc-50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 p-6 rounded-xl transition duration-200 group"
            >
              <div className="flex items-start gap-x-4">
                {project.logo ? (
                  <Image
                    src={project.logo}
                    width={52}
                    height={52}
                    alt={project.name}
                    className="dark:bg-zinc-800 bg-zinc-200 rounded-lg p-2 shrink-0"
                  />
                ) : (
                  <div className="w-12 h-12 flex items-center justify-center dark:bg-zinc-800 bg-zinc-200 rounded-lg text-2xl shrink-0">
                    ⚡
                  </div>
                )}
                <div>
                  <h3 className="font-incognito text-xl font-bold tracking-tight mb-1 group-hover:text-primary-color duration-200">
                    {project.name}
                  </h3>
                  <p className="dark:text-zinc-400 text-zinc-600 text-sm leading-relaxed">
                    {project.tagline}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end mt-4 pt-3 border-t dark:border-zinc-800/80 border-zinc-200 text-xs font-gitlabmono dark:text-zinc-400 text-zinc-600">
                <span className="flex items-center gap-x-1 group-hover:dark:text-white group-hover:text-zinc-900 duration-200">
                  View Case Study <BiRightArrowAlt />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Slide>
    </section>
  );
}
