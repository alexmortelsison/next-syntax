import BlogCard from "@/components/BlogCard";
import SearchForm from "@/components/SearchForm";
import React from "react";

const HomePage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Alex" },
      _id: 1,
      description: "This is a description",
      image:
        "https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Machine Learning",
      title: "Unlocking the Power of Machine Learning",
    },
  ];
  return (
    <div>
      <SearchForm query={query} />
      <section className="mt-12">
        {query ? `Search results for "${query}"` : "All blogs"}
      </section>

      <ul className="mt-7 grid md:grid-cols-3 gap-3">
        {posts?.length > 0 ? (
          posts.map((post: BlogCardTypeCard, index) => (
            <BlogCard key={post?._id} post={post} />
          ))
        ) : (
          <p>No Blogs found</p>
        )}
      </ul>
    </div>
  );
};

export default HomePage;
