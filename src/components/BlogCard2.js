import moment from "moment";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export const BlogCard = (props) => {
  const { image, title, date } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col items-center gap-5 w-[362px] p-4 border rounded-xl h-[400px] overflow-hidden ${
        theme === "dark"
          ? "bg-slate-900 border-slate-700"
          : "bg-white border-[#e8e8ea]"
      }`}
    >
      <img
        className="w-full h-[200px] object-cover rounded-t-xl"
        src={image}
        alt={title}
      />
      <div className="flex self-start">
        <div className="btn btn-sm btn-active bg-custom-blue-light text-custom-blue font-medium leading-tight">
          Technology
        </div>
      </div>
      <div className="w-full">
        <h2
          className={`text-2xl font-semibold font-['WorkSans'] leading-7 truncate ${
            theme === "dark" ? "text-white" : "text-[#181a2a]"
          }`}
        >
          {title}
        </h2>
      </div>
      <div className="flex self-start items-end mt-auto">
        <p
          className={`${theme === "dark" ? "text-gray-400" : "text-[#97989f]"}`}
        >
          {moment(date).format("MMMM D, YYYY")}
        </p>
      </div>
    </div>
  );
};
