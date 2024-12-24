import { FacebookIcon } from "../components/icons/FacebookIcon";
import { TweeterIcon } from "../components/icons/TweeterIcon";
import { InstagramIcon } from "../components/icons/InstagramIcon";
import { LnIcon } from "./icons/LnIcon";
import { BlogIcon } from "./icons/BlogIcon";
import Link from "next/link";

export const BlogFooter = () => {
  return (
    <div className="flex items-center justify-center w-screen bg-[#f6f6f7] dark:bg-black">
      <div className="flex flex-col gap-[25px] pt-16 px-[352px]">
        <div className="flex w-full gap-5 mb-[25px]">
          <div className="flex flex-col gap-6 w-[289px]">
            <div className="flex flex-col gap-3">
              <p className="text-lg font-semibold text-[#181A2A] dark:text-white">
                About
              </p>
              <p className="text-[#696A75] text-base dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center">
                <span className="mr-2 text-[#181a2a] text-base font-normal font-work-sans leading-normal dark:text-white">
                  Email:
                </span>
                <span className="text-[#3b3c4a] text-base font-normal font-work-sans leading-normal dark:text-gray-400">
                  info@jstemplate.net
                </span>
              </div>
              <p className="font-work-sans text-[#3b3c4a] dark:text-gray-400">
                Phone: 880 123 456 789
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center w-[521px]">
            <Link href="/" className="dark:text-white">
              Home
            </Link>
            <Link href={"/blogpage"} className="dark:text-white">
              Blog
            </Link>
            <Link href={"/contactus"} className="dark:text-white">
              Contact
            </Link>
          </div>
          <div className="flex w-36 justify-between h-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://x.com/?lang=en "
              target="_blank"
              rel="noopener noreferrer"
            >
              <TweeterIcon />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LnIcon />
            </a>
          </div>
        </div>
        <div className="flex w-full py-8 px-0 border-t border-gray-300 dark:border-gray-700">
          <div className="flex items-center justify-between w-full max-w-[929px] mx-auto">
            <div className="flex items-center gap-[10px]">
              <BlogIcon />
              <div className="flex flex-col">
                <div className="text-lg">
                  Meta
                  <span className="font-bold text-black dark:text-white">
                    Blog
                  </span>
                </div>
                <div className="text-sm text-[#696A75] dark:text-gray-400">
                  © All Rights Reserved.
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-[#696A75] dark:text-gray-400">
                Terms of Use
              </span>
              <span className="text-[#696A75] dark:text-gray-400">
                Privacy Policy
              </span>
              <span className="text-[#696A75] dark:text-gray-400">
                Cookie Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
