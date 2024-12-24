import useSWR from "swr";
import Link from "next/link";
import { BlogTrendingCard } from "@/components/BlogTrendingCard";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const url = "https://dev.to/api/articles?state=rising";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const BlogTrending = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  const { theme } = useContext(ThemeContext);

  if (isLoading) {
    return (
      <div
        className={`${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        } flex justify-center items-center h-[200px]`}
      >
        <p>...loading</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        } flex justify-center items-center h-[200px]`}
      >
        <p>...oh sorry, there was an error</p>
      </div>
    );
  }

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } flex flex-col gap-[30px]`}
    >
      <p className="w-[184px] text-sm2 font-bold">Trending</p>
      <div className="grid grid-cols-4 gap-4">
        {data.slice(0, 4).map((trending) => (
          <Link key={trending.id} href={`/blog/${trending.id}`} passHref>
            <div>
              <BlogTrendingCard
                image={trending.cover_image}
                title={trending.title}
                date={trending.published_at}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
