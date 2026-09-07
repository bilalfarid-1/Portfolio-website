import "server-only";
import { createClient, type ClientConfig, type QueryParams } from "next-sanity";
import { projectId, dataset, apiVersion, token, mode } from "@/lib/env.api";
import {
  fallbackProfile,
  fallbackJobs,
  fallbackProjects,
  fallbackHeroes,
} from "@/lib/fallback-data";

const config: ClientConfig = {
  projectId: projectId || "mock-project-id",
  dataset: dataset || "production",
  apiVersion: apiVersion || "2023-08-01",
  useCdn: mode === "development" ? true : false,
  ignoreBrowserTokenWarning: true,
  token,
  perspective: "published",
};

const client = createClient(config);

export async function sanityFetch<QueryResponse>({
  query,
  qParams = {},
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  try {
    if (projectId && projectId !== "mock-project-id") {
      const data = await client.fetch<QueryResponse>(query, qParams, {
        cache: mode === "development" ? "no-store" : "force-cache",
        next: { tags },
      });
      if (data) return data;
    }
  } catch {
    // Fall back to local data gracefully
  }

  // Safe local fallbacks for Muhammad Bilal Farid
  if (tags.includes("profile")) {
    return fallbackProfile as unknown as QueryResponse;
  }
  if (tags.includes("job")) {
    return fallbackJobs as unknown as QueryResponse;
  }
  if (tags.includes("project")) {
    if (qParams && qParams.slug) {
      const p = fallbackProjects.find((proj) => proj.slug === qParams.slug);
      return (p || fallbackProjects[0]) as unknown as QueryResponse;
    }
    return fallbackProjects as unknown as QueryResponse;
  }
  if (tags.includes("heroe")) {
    return fallbackHeroes as unknown as QueryResponse;
  }

  return fallbackProfile as unknown as QueryResponse;
}
