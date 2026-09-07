import Image from "next/image";
import { jobQuery } from "@/lib/sanity.query";
import type { JobType } from "@/types";
import { formatDate } from "../../utils/date";
import { Slide } from "../../animation/Slide";
import { sanityFetch } from "@/lib/sanity.client";
import RefLink from "../shared/RefLink";
import EmptyState from "../shared/EmptyState";
import { RiBriefcase3Fill } from "react-icons/ri";

export default async function Job() {
  const jobs: JobType[] = await sanityFetch({
    query: jobQuery,
    tags: ["job"],
  });

  return (
    <section className="mt-32">
      <Slide delay={0.16}>
        <div className="mb-16">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Work Experience
          </h2>
        </div>
      </Slide>

      {jobs.length > 0 ? (
        <Slide delay={0.18}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
            {jobs.map((job) => (
              <div
                key={job._id}
                className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] dark:before:bg-zinc-800 before:bg-zinc-200"
              >
                <RefLink
                  href={job.url}
                  className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[60px] min-w-[60px] p-2 rounded-md overflow-clip relative"
                >
                  {job.logo ? (
                    <Image
                      src={job.logo}
                      className="object-contain duration-300"
                      alt={`${job.name} logo`}
                      width={50}
                      height={50}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-bold text-sm">
                      💼
                    </div>
                  )}
                </RefLink>
                <div className="flex flex-col items-start">
                  <h3 className="text-xl font-semibold">{job.name}</h3>
                  <p>{job.jobTitle}</p>
                  <time className="text-xs text-zinc-500 mt-2 tracking-widest uppercase font-gitlabmono">
                    {formatDate(job.startDate)} -{" "}
                    {job.endDate && job.endDate.toLowerCase() !== "present" ? (
                      formatDate(job.endDate)
                    ) : (
                      <span className="dark:text-primary-color text-tertiary-color">
                        PRESENT
                      </span>
                    )}
                  </time>
                  <p className="tracking-tight dark:text-zinc-400 text-zinc-600 my-4">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Slide>
      ) : (
        <EmptyState
          icon={<RiBriefcase3Fill />}
          title="Work Experience Not Provided"
          message="We could not find any work experience at the moment. To add one, visit the Sanity studio to start editing the content."
        />
      )}
    </section>
  );
}
