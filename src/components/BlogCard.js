import moment from "moment";
export const BlogCard = (props) => {
  const { image, title, date } = props;
  return (
    <div className="px-4 py-2 border border-solid rounded w-[360px] h-[240px]">
      <img width={300} src={image} alt={title} />
      <h2>{title}</h2>
      <p>{moment(date).format("ll")}</p>
    </div>
  );
};
