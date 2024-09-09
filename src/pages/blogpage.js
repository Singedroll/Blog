import { useState } from "react";
import useSWR from "swr";
import { BlogCard } from "@/components/BlogCard";
import BlogHeader from "../components/BlogHeader2";
import Link from "next/link";

const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const BlogPage = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  const [visibleBlogs, setVisibleBlogs] = useState(6);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3);
  };

  if (!data) {
    return null;
  }

  return (
    <div className="flex max-w-[1216px] mx-auto ">
      <div className="flex flex-col max-w-[1216px] mx-auto gap-24 ">
        <BlogHeader />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.slice(0, visibleBlogs).map((blog) => (
            <Link key={blog.id} href={`blog/${blog.id}`}>
              <BlogCard
                image={blog.cover_image}
                title={blog.title}
                date={blog.published_at}
              />
            </Link>
          ))}
        </div>
        {visibleBlogs < data.length && (
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

export default BlogPage;
