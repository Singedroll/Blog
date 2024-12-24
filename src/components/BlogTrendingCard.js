export const BlogTrendingCard = ({ image, title }) => {
  return (
    <div
      className="flex flex-col w-[289px] h-[320px] bg-cover bg-center flex-shrink-0 justify-end border rounded-[12px] p-7 gap-4 bg-blend-darken"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div>
        <div className="btn btn-sm btn-active btn-primary dark:bg-slate-900">
          Technology
        </div>
      </div>
      <div className="text-white">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
    </div>
  );
};
