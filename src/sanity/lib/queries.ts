import { Post } from "@/types";

export const allPostsQuery = `
*[_type == 'post'] | order(publishedAt desc) {
_id,
title,
slug,
mainImage,
excerpt,
publishedAt,
"authorName": author->name,
"categories": categories[]->title,
}
`;

export const singlePostQuery = `
*[_type == 'post' && slug.current == $slug][0]{
_id,
title,
slug,
mainImage,
body,
publishedAt,
"author": author->{name, picture},
"categories": category[]->title,
}
`;
