import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "./env.api";

const imageBuilder = imageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "production",
});

export function urlFor(source: any) {
  if (!projectId || typeof source === "string") {
    return {
      width: (_w?: number) => ({
        height: (_h?: number) => ({
          url: () => (typeof source === "string" ? source : ""),
        }),
      }),
      url: () => (typeof source === "string" ? source : ""),
    } as any;
  }
  return imageBuilder.image(source).auto("format").fit("max");
}
