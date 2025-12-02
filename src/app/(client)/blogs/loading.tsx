import BlogCardSkeleton from "@/components/BlogCardSkeleton";
import Container from "@/components/Container";

const PER_PAGE = 2; // same as blog page

export default async function BlogsLoadingPage() {
  return (
    <>
      <section className="pt-28 pb-10">
        <Container>
          <h1 className="mb-5">Blogs</h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {Array.from({ length: PER_PAGE }).map((_, i) => (
              <li key={i}>
                <BlogCardSkeleton />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
