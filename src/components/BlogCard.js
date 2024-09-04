import moment from "moment";

export const BlogCard = (props) => {
  const { image, title, date } = props;
  return (
    <div className="flex flex-col items-center gap-5 w-[362px] h-[560px] p-4 rounded-[12px] border-none bg-white">
      <img
        className="w-full h-[200px] object-cover rounded-t-[12px]"
        src={image}
        alt={title}
      />
      <div className="flex self-start">
        <div className="btn btn-sm btn-active bg-custom-blue-light text-custom-blue font-medium leading-tight">
          Technology
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-[#181a2a] text-2xl font-semibold font-['WorkSans']leading-7">
          {title}
        </h2>
      </div>
      <div className="flex self-start items-end mt-auto">
        <p className="text-[#97989f]">{moment(date).format("MMMM D, YYYY")}</p>
      </div>
    </div>
  );
};
