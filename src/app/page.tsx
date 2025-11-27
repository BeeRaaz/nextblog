import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="pt-28 pb-10 min-h-screen flex flex-wrap justify-center items-center">
      <Container className="text-center">
        <h1 className="mb-4">Welcome, to my NextBlog!</h1>
        <Link href={"/blogs"}>
          <Button size={'lg'}>Read Blogs</Button>
        </Link>
      </Container>
    </section>
  );
}
