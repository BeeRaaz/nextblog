import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { singlePostQuery } from "@/sanity/lib/queries";
import { Post } from "@/types";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

interface BlogSingleProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogSingle({ params }: BlogSingleProps) {
  const { slug } = await params;

  const post = await client.fetch<Post | null>(singlePostQuery, {
    slug,
  });

  if (!post) {
    return (
      <section className="min-h-screen pt-28 pb-10 flex flex-wrap justify-center items-center">
        <Container className="text-center">
          <h1>Not found</h1>
          <Link href={"/blogs"}>
            <Button size={"lg"}>Blogs</Button>
          </Link>
        </Container>
      </section>
    );
  }

  return (
    <>
      <section className="pt-28 pb-10">
        <Container>
          <div>
            <h1 className="mb-3">{post.title}</h1>
            <p className="text-gray-500 mb-6">
              {post.author?.name} —{" "}
              {new Date(post.publishedAt || "").toLocaleDateString()}
            </p>
          </div>
          <div className="relative w-full pt-96 mb-10">
            <Image
              src={urlFor(post.mainImage).url() || ""}
              alt={post.title}
              fill
              className="object-cover rounded-sm"
            />
          </div>
          {post.body && <PortableText value={post.body} />}
        </Container>
      </section>
    </>
  );
}
