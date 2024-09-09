import { FacebookIcon } from "../components/icons/FacebookIcon";
import { TweeterIcon } from "../components/icons/TweeterIcon";
import { InstagramIcon } from "../components/icons/InstagramIcon";
import { LnIcon } from "./icons/LnIcon";
import { BlogIcon } from "./icons/BlogIcon";
import Link from "next/link";

export const BlogFooter = () => {
  return (
    <div className="flex items-center justify-center w-screen bg-[#f6f6f7]">
      <div className="flex flex-col gap-[25px] pt-16 px-[352px]">
        <div className="flex w-full gap-5 mb-[25px]">
          <div className="flex flex-col gap-6 w-[289px]">
            <div className="flex flex-col gap-3">
              <p className="text-lg font-semibold text-[#181A2A]">About</p>
              <p className="text-[#696A75] text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center">
                <span className="mr-2 text-[#181a2a] text-base font-normal font-work-sans leading-normal">
                  Email:
                </span>
                <span className="text-[#3b3c4a] text-base font-normal font-work-sans leading-normal">
                  info@jstemplate.net
                </span>
              </div>
              <p className="font-work-sans">Phone: 880 123 456 789</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center w-[521px]">
            <Link href="/">Home</Link>
            <Link href={"/blogpage"}>Blog</Link>
            <Link href={"/contactus"}>Contact</Link>
          </div>
          <div className="flex w-36 justify-between h-4">
            <FacebookIcon />
            <TweeterIcon />
            <InstagramIcon />
            <LnIcon />
          </div>
        </div>
        <div className="flex w-full py-8 px-0 border-t">
          <div className="flex justify-center items-center">
            <div className="flex gap-[10px] items-center">
              <BlogIcon />
              <p>
                Meta<span className="font-bold">Blog</span>
                <p>© All Rights Reserved.</p>
              </p>
            </div>
            <div className="flex justify-end w-[929px] gap-4">
              <span>Terms of Use</span>
              <span>Privacy Policy</span>
              <span>Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
