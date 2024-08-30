import useSWR from "swr";
const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const BlogPage = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  console.log(data);

  return (
    <div className="max-w-[1920px] h-[2891px] grid grid-cols-3 mx-auto grid-rows-5">
      {data.map((blog) => {
        return (
          <BlogCard
            key={blog.id}
            image={blog.cover_image}
            title={blog.title}
            date={blog.published_at}
          />
        );
      })}
    </div>
  );
};

export default BlogPage;

const BlogCard = (props) => {
  const { image, title, date } = props;
  return (
    <div className="px-4 py-2 border border-solid rounded w-[360px] h-[240px]">
      <img width={300} src={image} alt={title} />
      <h2>{title}</h2>
      <p>{date}</p>
    </div>
  );
};
