import { FacebookIcon } from "../components/icons/FacebookIcon";
import { TweeterIcon } from "../components/icons/TweeterIcon";
import { InstagramIcon } from "../components/icons/InstagramIcon";
import { LnIcon } from "./icons/LnIcon";
import { BlogIcon } from "./icons/BlogIcon";

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
            <p className="font-work-sans font-normal text-base text-[#3b3c4a]">
              Home
            </p>
            <p className="font-work-sans font-normal text-base text-[#3b3c4a]">
              Blog
            </p>
            <p className="font-work-sans font-normal text-base text-[#3b3c4a]">
              Contact
            </p>
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
              <p className="flex flex-col">
                Meta<span className="font-bold">Blog</span>
                <span>© All Rights Reserved.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
