export const BlogTrendingCard = ({ image, title }) => {
  return (
    <div
      className="flex flex-col w-[289px] h-[320px] bg-cover bg-center flex-shrink-0  justify-end border rounded-[12px] p-7 gap-4  bg-blend-darken bg-[#14162466]"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div>
        <div className="btn btn-sm btn-active btn-primary">Technology</div>
      </div>
      <div className="text-white">
        <h2>{title}</h2>
      </div>
    </div>
  );
};
