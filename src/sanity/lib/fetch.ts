import { client } from "./client";

export async function fetchSanity(
  query: string,
  params: Record<string, unknown> = {},
  options: { revalidate?: number; tags?: string[] } = {},
) {
  const { revalidate = 60, tags = [] } = options;

  return client.fetch(query, params, {
    cache: "force-cache",
    next: { revalidate, tags },
  });
}
