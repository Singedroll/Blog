import { useRouter } from "next/router";
import useSWR from "swr";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Page = () => {
  const router = useRouter();
  const blogId = router.query.blogId;
  const url = `https://dev.to/api/articles/${blogId}`;
  const { data: blogDetail = {}, error } = useSWR(url, fetcher);

  if (!blogDetail && !error) return <div>Loading...</div>;
  if (error) return <div>Error loading blog</div>;

  const bodyMarkdown = blogDetail.body_markdown || "";

  // Clean up unsupported tags in the markdown
  const cleanMarkdown = bodyMarkdown
    ? bodyMarkdown.replace(
        /{% cta (.*?) %}(.*?){% endcta %}/g,
        '<a href="$1" class="cta-link">$2</a>'
      )
    : "";

  return (
    <div className="mx-auto w-[655px] flex flex-col gap-10 justify-center">
      <div className="text-2xl">{blogDetail.title}</div>
      <img src={blogDetail.cover_image} alt={blogDetail.title} />
      <div className="prose">
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {cleanMarkdown}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Page;
