import useSWR from "swr";
import BlogNav from "../components/BlogNav";
import BlogHeader from "@/components/BlogHeader";
import { BlogCard } from "@/components/BlogCard";
import { BlogHero } from "@/components/BlogHero";
import { BlogTrending } from "../components/BlogTrending";
import { BlogFooter } from "../components/BlogFooter";

const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const BlogPage = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  console.log(data);

  return (
    <div className=" flex flex-col max-w-[1216px] mx-auto gap-[100px]">
      <BlogNav />
      <BlogHero
        key={data[0].id}
        image={data[0].cover_image}
        title={data[0].title}
        date={data[0].published_at}
      />
      <BlogHeader />
      <BlogTrending />
      <div className="grid-rows-5 grid grid-cols-3">
        {data.map((blog) => {
          return (
            <BlogCard
              key={blog.id}
              image={blog.cover_image}
              title={blog.title}
              date={blog.published_at}
            />
          );
        })}
      </div>
      <BlogFooter />
    </div>
  );
};

export default BlogPage;
