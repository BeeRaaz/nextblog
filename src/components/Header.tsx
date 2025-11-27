import Link from "next/link";
import Container from "./Container";

export default function Header() {
  const navLinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/blogs",
      title: "Blogs",
    },
  ]
  return (
    <>
      <header className="py-5 bg-background border-b border-b-accent-foreground/20 fixed top-0 left-0 right-0 z-9999">
        <Container className="flex flex-wrap justify-between items-center gap-5">
          <div>
            <Link href={"/"} className="font-bold tracking-tighter text-2xl md:text-3xl">NextBlog</Link>
          </div>
          <div>
            <ul className="flex flex-wrap items-center gap-5">
              {navLinks.map((navLink) => (
                <li key={navLink.title}>
                  <Link href={navLink.path} className="hover:opacity-80">{navLink.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </header>
    </>
  )
}