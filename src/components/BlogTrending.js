import useSWR from "swr";
import Link from "next/link";
import { BlogTrendingCard } from "@/components/BlogTrendingCard";

const url = "https://dev.to/api/articles?state=rising";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const BlogTrending = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  console.log(data);

  return (
    <div className="flex flex-col gap-[30px]">
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
