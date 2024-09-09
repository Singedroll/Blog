import { useState } from "react";
import moment from "moment";
import useSWR from "swr";
import Link from "next/link"; // Import Next.js Link
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const url = "https://dev.to/api/articles?state=rising";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const BlogHero = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current article index

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Sorry! Internal server occurred, please reload again.</p>;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentArticle = data[currentIndex]; // Get the current article

  return (
    <div className="">
      <Link href={`blog/${currentArticle.id}`}>
        <div
          style={{ backgroundImage: `url(${currentArticle.cover_image})` }}
          className="border border-solid rounded h-[600px] bg-cover bg-center flex items-end p-2 cursor-pointer"
        >
          <div className="flex border h-fit p-10 w-[598px] bg-white flex-col gap-6 rounded-xl">
            <div className="flex flex-col gap-2">
              <div>
                <div className="btn btn-sm btn-active btn-primary">
                  Technology
                </div>
              </div>
              <h2 className="font-semibold text-4xl">{currentArticle.title}</h2>
            </div>
            <p className="text-[#97989f]">
              {moment(currentArticle.published_at).format("ll")}
            </p>
          </div>
        </div>
      </Link>

      <div className="flex justify-end mt-5">
        <div className="flex gap-2">
          <button onClick={handlePrev} className="btn">
            <FaChevronLeft />
          </button>
          <button onClick={handleNext} className="btn">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};
