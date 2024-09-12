import Link from "next/link";

const fail = () => {
  return (
    <div className="flex justify-center items-center my-[100px]">
      <div className="flex justify-center items-center h-[208px]">
        <div className="flex gap-11 h-[208px] justify-center">
          <p className="font-work-sans w-[133px] font-normal leading-[72px] text-[72px] self-center text-black">
            404
          </p>
          <p className="border-r "></p>
        </div>
        <div className="flex flex-col ml-6 gap-5">
          <p className="text-black text-2xl font-semibold font-['WorkSans'] leading-10">
            Page Not Found
          </p>
          <p className="w-[392px] text-[#696a75] text-lg font-normal font-work-sans leading-relaxed">
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </p>
          <Link href="/">
            <button className="h-10 px-4 py-2.5 bg-[#4b6bfb] rounded-md justify-center items-center inline-flex self-start] text-white">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default fail;
