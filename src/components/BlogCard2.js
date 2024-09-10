import moment from "moment";

export const BlogCard = (props) => {
  const { image, title, date } = props;
  return (
    <div className="flex flex-col items-center gap-5 w-[362px] p-4 border border-[#e8e8ea] rounded-xl h-[400px] overflow-hidden">
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
        <h2 className="text-[#181a2a] text-2xl font-semibold font-['WorkSans'] leading-7 truncate">
          {title}
        </h2>
      </div>
      <div className="flex self-start items-end mt-auto">
        <p className="text-[#97989f]">{moment(date).format("MMMM D, YYYY")}</p>
      </div>
    </div>
  );
};
