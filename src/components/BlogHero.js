import { useState, useContext } from "react";
import moment from "moment";
import useSWR from "swr";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ThemeContext } from "@/context/ThemeContext";

const url = "https://dev.to/api/articles?state=rising";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const BlogHero = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useContext(ThemeContext);

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

  const currentArticle = data[currentIndex];

  return (
    <div>
      <Link href={`blog/${currentArticle.id}`}>
        <div
          style={{ backgroundImage: `url(${currentArticle.cover_image})` }}
          className={`border border-solid rounded h-[600px] bg-cover bg-center flex items-end p-2 cursor-pointer ${
            theme === "dark" ? "bg-opacity-60" : "bg-opacity-80"
          }`}
        >
          <div
            className={`flex border h-fit p-10 w-[598px] flex-col gap-6 rounded-xl 
              ${
                theme === "dark" ? "bg-black text-white" : "bg-white text-black"
              }`}
          >
            <div className="flex flex-col gap-2">
              <div>
                <div
                  className={`btn btn-sm btn-active btn-primary ${
                    theme === "dark" ? "dark:bg-slate-900" : ""
                  }`}
                >
                  Technology
                </div>
              </div>
              <h2 className="font-semibold text-4xl">{currentArticle.title}</h2>
            </div>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-gray-400" : "text-gray-800"
              }`}
            >
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
