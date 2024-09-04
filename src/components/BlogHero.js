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
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="border border-solid rounded h-[600px] bg-cover bg-center flex items-end p-2"
      >
        <div className="flex border h-fit  p-10  w-[598px] bg-white  flex-col gap-6 rounded-xl">
          <div className="flex flex-col gap-2">
            <div>
              <div className="btn btn-sm btn-active btn-primary">
                Technology
              </div>
            </div>
            <h2 className="font-semibold text-4xl">{title}</h2>
          </div>
          <p className="text-[#97989f]">{moment(date).format("ll")}</p>
        </div>
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
