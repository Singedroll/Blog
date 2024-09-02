import SearchIcon from "./icons/SearchIcon";
const BlogNav = () => {
  return (
    <div className="flex gap-[118px] py-8 pl-11">
      <img src="./MetaBlogIcon.png" />
      <div className="flex gap-[21px] justify-center items-center">
        <div className="flex w-[667px] h-[24px] gap-[21px] items-center justify-between">
          <div className="flex gap-10 items-center justify-center w-[667px]">
            <div>Home</div>
            <div>Blog</div>
            <div>Contact</div>
          </div>
          <div className="flex justify-center items-center gap-3 pl-4 bg-#52525B border border-none w-[166px]">
            <input className=" w-[114px] h-5" placeholder="Search" />
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogNav;
