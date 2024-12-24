import { useState, useContext, useEffect } from "react";
import BlogHeader from "@/components/BlogHeader";
import { BlogCard } from "@/components/BlogCard";
import { BlogHero } from "@/components/BlogHero";
import { BlogTrending } from "../components/BlogTrending";
import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContext";

const Home = (props) => {
  const { data } = props;
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  const [selectedTag, setSelectedTag] = useState(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3);
  };

  if (!data) {
    return <div>Failed to load blogs. Please try again later.</div>;
  }

  const tags = [...new Set(data.flatMap((blog) => blog.tags))];

  const filteredBlogs = selectedTag
    ? data.filter((blog) => blog.tags.includes(selectedTag))
    : data;

  return (
    <div
      className={`flex flex-col max-w-[1216px] mx-auto gap-24 mt-[100px] ${
        theme === "dark" ? "bg-slade-900 text-white" : "bg-white text-black"
      }`}
    >
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
            className="h-12 px-5 py-3 rounded-md border border-white/30 justify-center items-center gap-3 inline-flex"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  try {
    const res = await fetch("https://dev.to/api/articles");
    const blogs = await res.json();
    return {
      props: {
        data: blogs,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
