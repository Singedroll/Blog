import Link from "next/link";
import SearchIcon from "./icons/SearchIcon";

const BlogNav = () => {
  return (
    <div className="max-w-[1216px] mx-auto mb-12">
      <div className="flex gap-[118px] py-8 pl-11">
        <Link href="/">
          <img src="./MetaBlogIcon.png" />
        </Link>
        <div className="flex gap-[21px] justify-center items-center">
          <div className="flex w-[667px] h-[24px] gap-[21px] items-center justify-between">
            <div className="flex gap-10 items-center justify-center w-[667px]">
              <Link href="/">Home</Link>
              <Link href={"/blogpage"}>Blog</Link>
              <Link href={"/contactus"}>Contact</Link>
            </div>
            <div className="flex justify-center items-center gap-3 pl-4 bg-#52525B border border-none w-[166px]">
              <input className="w-[114px] h-5" placeholder="Search" />
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNav;
