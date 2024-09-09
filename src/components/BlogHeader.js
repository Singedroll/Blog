import { useState } from "react";

const BlogHeader = ({ tags, onTagClick }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedTags = showAll ? tags : tags.slice(0, 4);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex">
        <p className="w-[184px] text-2xl font-bold text-[#181A2A]">
          All Blog Post
        </p>
      </div>
      <div className="flex gap-[30px] flex-wrap">
        <div className="flex gap-5 text-sm font-bold text-[#181A2A] flex-wrap">
          <button
            onClick={() => onTagClick(null)} // Show all blogs when "All" is clicked
            className="text-custom-blue-light hover:underline"
          >
            All
          </button>
          {displayedTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => onTagClick(tag)} // Filter blogs by the clicked tag
              className="text-custom-blue-light hover:underline"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="text-right text-sm font-bold text-[#181A2A] mt-2">
        <button
          onClick={toggleShowAll}
          className="text-custom-blue-light hover:underline"
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>
    </div>
  );
};

export default BlogHeader;
