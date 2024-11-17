import BlogCard, { BlogCardTypeCard } from "@/components/BlogCard";
import SearchForm from "@/components/SearchForm";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { BLOG_QUERY } from "@/sanity/lib/queries";
import React from "react";

const HomePage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;
  const { data: posts } = await sanityFetch({ query: BLOG_QUERY });
  console.log(posts); // Check how many posts are being returned

  return (
    <div>
      <SearchForm query={query} />
      <section className="mt-12">
        {query ? `Search results for "${query}"` : "All blogs"}
      </section>

      <ul className="mt-7 grid md:grid-cols-3 gap-3">
        {posts?.length > 0 ? (
          posts.map((post: BlogCardTypeCard) => (
            <BlogCard key={post?._id} post={post} />
          ))
        ) : (
          <p>No Blogs found</p>
        )}
      </ul>

      <SanityLive />
    </div>
  );
};

export default HomePage;
