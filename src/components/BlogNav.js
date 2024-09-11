import Link from "next/link";
import SearchIcon from "./icons/SearchIcon";
import ThemeToggle from "../context/ThemeToggle"; // Import the ThemeToggle button

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
              <Link href="/blogpage">Blog</Link>
              <Link href="/contactus">Contact</Link>
            </div>
            <div className="h-9 justify-start items-center gap-10 inline-flex bg-[#f4f4f5] pl-4 pr-2 py-2 rounded-[5px]">
              <input
                className="w-[114px] h-5 text-zinc-600 bg-[#f4f4f5] text-sm font-normal font-['Inter'] leading-tight"
                placeholder="Search"
              />
              <SearchIcon />
            </div>
          </div>
          {/* Add the ThemeToggle button here */}
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNav;
