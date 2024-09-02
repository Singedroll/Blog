const BlogHeader = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex ">
        <p className="w-[184px text-2xl font-bold text-[#181A2A]">
          All Blog Post
        </p>
      </div>
      <div className="flex gap-[30px]  justify-between">
        <div className="flex gap-5 text-sm1 font-bold text-[#181A2A]">
          <span>All</span>
          <span>Design</span>
          <span>Travel</span>
          <span>Fashion</span>
          <span>Technology</span>
          <span>Branding</span>
        </div>
        <div className="text-center text-sm1 font-bold text-[#181A2A] ">
          <p className="text-right">View All</p>
        </div>
      </div>
    </div>
  );
};
export default BlogHeader;
