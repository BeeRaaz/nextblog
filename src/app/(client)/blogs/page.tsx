import BlogCard from "@/components/BlogCard";
import Container from "@/components/Container";
import { client } from "@/sanity/lib/client";
import { allPostsQuery } from "@/sanity/lib/queries";
import { Post } from "@/types";

export default async function Blogs() {
  const posts: Post[] = await client.fetch(allPostsQuery);

  if (posts.length === 0) {
    return (
      <section className="min-h-screen pt-28 pb-10 flex flex-wrap justify-center items-center">
        <Container className="text-center">
          <h1>Not found any posts.</h1>
        </Container>
      </section>
    );
  }

  return (
    <>
      <section className="pt-28 pb-10">
        <Container>
          <h1 className="mb-5">Blogs</h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {posts.map((post: Post) => (
              <li key={post._id}>
                <BlogCard
                  title={post.title}
                  slug={post.slug.current}
                  excerpt={post.excerpt}
                  mainImage={post.mainImage}
                  publishedAt={post.publishedAt}
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
