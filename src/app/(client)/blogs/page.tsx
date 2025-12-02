import BlogCard from "@/components/BlogCard";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { fetchSanity } from "@/sanity/lib/fetch";
import { paginatedPostsQuery, totalPostsQuery } from "@/sanity/lib/queries";
import { Post } from "@/types";
import Link from "next/link";

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;

  // Current page
  const page = Number(params.page || 1);

  // Number of posts per page
  const PER_PAGE = 2;

  // GROQ slicing indexes
  const start = (page - 1) * PER_PAGE;
  const end = start + PER_PAGE;

  // fetch paginated posts
  const posts: Post[] = await fetchSanity(
    paginatedPostsQuery,
    { start, end },
    {
      revalidate: 60,
      tags: ["posts"],
    },
  );

  // fetch total count for pagination
  const totalPosts: number = await fetchSanity(
    totalPostsQuery,
    {},
    {
      revalidate: 60,
      tags: ["posts-total-count"],
    },
  );
  const totalPages = Math.ceil(totalPosts / PER_PAGE);

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
                <BlogCard post={post} />
              </li>
            ))}
          </ul>

          {/* pagination */}
          {totalPages > 1 && (
            <div className="flex flex-wrap justify-center items-center gap-2 mt-10">
              {/* previous button */}
              {page > 1 && (
                <Link href={`?page=${page - 1}`}>
                  <Button>previous</Button>
                </Link>
              )}
              {/* page numbers */}
              <div className="flex flex-wrap justify-center items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pageNum) => (
                    <Link
                      key={pageNum}
                      href={`?page=${pageNum}`}
                      className={`${page === pageNum} ? pointer-none" : pointer-auto"`}
                    >
                      <Button variant={"ghost"} disabled={page === pageNum}>
                        {pageNum}
                      </Button>
                    </Link>
                  ),
                )}
              </div>
              {/* next button */}
              {page < totalPages && (
                <Link href={`?page=${page + 1}`}>
                  <Button>Next</Button>
                </Link>
              )}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
