import Link from "next/link";
import SearchIcon from "./icons/SearchIcon";
import ThemeToggle from "../context/ThemeToggle";
import { BlogIcon } from "./icons/BlogIcon";

const BlogNav = () => {
  return (
    <div className="dark:bg-black bg-white flex flex-col items-center mx-auto mb-12 dark:text-white text-black">
      <div className="flex gap-[118px] py-8 pl-11">
        <Link href="/" className="flex items-center gap-2">
          <BlogIcon />
          <div className="flex">
            <div className="flex text-lg">
              <span className="text-black dark:text-white">Meta</span>
              <span className="text-black font-extrabold dark:text-white">
                Blog
              </span>
            </div>
          </div>
        </Link>
        <div className="flex gap-[21px] justify-center items-center">
          <div className="flex w-[667px] h-[24px] gap-[21px] items-center justify-between">
            <div className="flex gap-10 items-center justify-center w-[667px]">
              <Link href="/" className="text-black dark:text-white">
                Home
              </Link>
              <Link href="/blogpage" className="text-black dark:text-white">
                Blog
              </Link>
              <Link href="/contactus" className="text-black dark:text-white">
                Contact
              </Link>
            </div>
            <div className="h-9 justify-start items-center gap-10 inline-flex bg-[#f4f4f5] pl-4 pr-2 py-2 rounded-[5px]">
              <input
                className="w-[114px] h-5 text-zinc-600 bg-[#f4f4f5] text-sm font-normal font-['Inter'] leading-tight  "
                placeholder="Search"
              />
              <SearchIcon />
            </div>
          </div>
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNav;
