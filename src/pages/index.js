import { useState } from "react";
import useSWR from "swr";
import BlogNav from "../components/BlogNav";
import BlogHeader from "@/components/BlogHeader";
import { BlogCard } from "@/components/BlogCard";
import { BlogHero } from "@/components/BlogHero";
import { BlogTrending } from "../components/BlogTrending";
import { BlogFooter } from "../components/BlogFooter";
import Link from "next/link";

const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Home = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  const [visibleBlogs, setVisibleBlogs] = useState(6); // Initial number of visible blogs
  const [selectedTag, setSelectedTag] = useState(null); // State for the selected tag

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3); // Add 3 more blogs
  };

  if (!data) {
    return null; // Or a fallback UI
  }

  // Extract unique tags from the blog data
  const tags = [...new Set(data.flatMap((blog) => blog.tags))];

  // Filter blogs based on selected tag
  const filteredBlogs = selectedTag
    ? data.filter((blog) => blog.tags.includes(selectedTag))
    : data;

  return (
    <div>
      <div className="flex flex-col max-w-[1216px] mx-auto gap-24 mt-[100px]">
        <BlogHero
          key={data[0].id}
          image={data[0].cover_image}
          title={data[0].title}
          date={data[0].published_at}
        />
        <BlogTrending />
        <BlogHeader tags={tags} onTagClick={setSelectedTag} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredBlogs.slice(0, visibleBlogs).map((blog) => (
            <Link key={blog.id} href={`blog/${blog.id}`}>
              <BlogCard
                image={blog.cover_image}
                title={blog.title}
                date={blog.published_at}
              />
            </Link>
          ))}
        </div>
        {visibleBlogs < filteredBlogs.length && (
          <div className="flex justify-center mt-4 mb-24">
            <button
              onClick={loadMoreBlogs}
              className="btn btn-primary bg-custom-blue-light text-white px-4 py-2 rounded-lg"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
