import { useState, useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const BlogHeader = ({ tags, onTagClick }) => {
  const { theme } = useContext(ThemeContext);
  const [showAll, setShowAll] = useState(false);

  const displayedTags = showAll ? tags : tags.slice(0, 4);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div
      className={`flex flex-col gap-8 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex">
        <p
          className={`w-[184px] text-2xl font-bold ${
            theme === "dark" ? "text-white" : "text-[#181A2A]"
          }`}
        >
          All Blog Post
        </p>
      </div>
      <div className="flex gap-[30px] flex-wrap">
        <div
          className={`flex gap-5 text-sm font-bold ${
            theme === "dark" ? "text-white" : "text-[#181A2A]"
          } flex-wrap`}
        >
          <button
            onClick={() => onTagClick(null)}
            className={`text-custom-blue-light hover:underline ${
              theme === "dark" ? "dark:text-custom-blue-light" : ""
            }`}
          >
            All
          </button>
          {displayedTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => onTagClick(tag)}
              className={`text-custom-blue-light hover:underline ${
                theme === "dark" ? "dark:text-custom-blue-light" : ""
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <button
          onClick={toggleShowAll}
          className={`text-custom-blue-light hover:underline ml-auto text-sm font-bold mt-2 ${
            theme === "dark" ? "dark:text-custom-blue-light" : ""
          }`}
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>
    </div>
  );
};

export default BlogHeader;
