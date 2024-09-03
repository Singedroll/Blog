import moment from "moment";
import react from "react";
import useSWR from "swr";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
const url = "https://dev.to./api/articles?state=rising";

export const BlogHero = (props) => {
  const { image, title, date } = props;
  return (
    <div className="">
      <div className="border border-solid rounded ">
        <img width={1216} src={image} alt={title} />
        <h2>{title}</h2>
        <p>{moment(date).format("ll")}</p>
      </div>
      <div className="flex justify-end mt-5">
        <div className="flex gap-2">
          <button className="btn">
            <FaChevronLeft />
          </button>
          <button className="btn">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};
