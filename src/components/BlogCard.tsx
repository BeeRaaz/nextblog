import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { Post } from "@/types";

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { slug, title, publishedAt, mainImage, excerpt } = post;
  return (
    <>
      <Link href={`/blogs/${slug}`} className="group">
        <article>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>
                <h2>{title}</h2>
              </CardTitle>
              <CardDescription>
                {publishedAt ? new Date(publishedAt).toLocaleDateString() : ""}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative py-40 rounded-sm overflow-hidden mb-5">
                <Image
                  src={urlFor(mainImage).url()}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-125 transition-all duration-500"
                />
              </div>
              <p>{excerpt}</p>
            </CardContent>
          </Card>
        </article>
      </Link>
    </>
  );
}
