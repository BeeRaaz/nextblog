// Fetch paginated posts with all required fields
export const paginatedPostsQuery = `
  *[_type == 'post'] | order(publishedAt desc) [$start...$end] {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    excerpt,
    publishedAt,
  }
`;

// Fetch TOTAL number of posts (used to compute total pages)
export const totalPostsQuery = `
  count(*[_type == 'post'])
`;

// (Optional) Fetch ALL posts (not paginated)
export const allPostsQuery = `
  *[_type == 'post'] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    excerpt,
    publishedAt,
  }
`;

// Fetch a single post with full data
export const singlePostQuery = `
  *[_type == 'post' && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    mainImage,
    body,
    publishedAt,
    "author": author->{name, picture},
    "categories": categories[]->title,
  }
`;
