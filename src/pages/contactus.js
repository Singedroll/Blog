export const Contact = () => {
  return (
    <div className="container mx-auto max-w-fit mb-24">
      <div className="pt-4 px-3">
        <div className="w-fit flex flex-col m-5 gap-5 ">
          <p className="w-[196px] h-[40px] font-bold text-3xl">Contact Us</p>
          <p className="w-[640px] h-[103px] text-[#696a75] leading-normal font-normal font-['Plus Jakarta Sans']">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="flex gap-[50px] p-[10px] pb-10">
          <div className="w-[270px] h-[133px] border border-solid p-[16px] rounded-lg">
            <p className="font-bold text-xl">Address</p>
            <p className="w-[260px] text-[#696a75] text-lg font-normal font-['Work Sans'] leading-relaxed">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </p>
          </div>
          <div className="w-[270px] h-[133px] border border-solid p-[16px] rounded-lg leading-relaxed ">
            <p className="font-bold text-xl">Contact</p>
            <p className="w-40 text-[#696a75] text-lg font-normal font-['Work Sans'] leading-relaxed">
              313-332-8662 info@email.com
            </p>
          </div>
        </div>
      </div>
      <div className="w-[643px] h-[440px] pl-[35px] pr-[130px] pt-[29px] pb-[26px] bg-[#f6f6f7] rounded-[10px] justify-start items-center inline-flex">
        <form
          action="/action_page.php"
          className="self-stretch flex-col justify-start items-start gap-6 inline-flex"
        >
          <div className="text-black text-lg font-semibold font-['Work Sans'] leading-relaxed">
            Leave a Message
          </div>
          <div className="w-[478px] pb-[18px] justify-center items-center inline-flex">
            <div className="w-[478px] h-[317px] relative flex-col justify-start items-start flex">
              <div className="w-[589px] h-[39px] relative mb-4">
                <div className="w-[225px] h-[38px] pl-5 pr-3.5 py-3.5 left-0 top-0 absolute bg-white rounded-[5px] border border-[#dcdddf] justify-start items-center gap-3 inline-flex">
                  <div className="w-6 h-6 relative" />
                </div>
                <input
                  placeholder="Your Name"
                  className="left-[18px] top-[5px] absolute text-base font-normal font-['Work Sans'] leading-relaxed"
                ></input>
                <div className="w-[225px] h-[38px] pl-5 pr-3.5 py-3.5 left-[253px] top-[1px] absolute bg-white rounded-[5px] border border-[#dcdddf]" />
                <input
                  placeholder="Your Email"
                  className="left-[272px] top-[7px] absolute  text-base font-normal font-['Work Sans'] leading-relaxed"
                ></input>
              </div>
              <div className="w-[478px] h-[35px] pl-5 pr-3.5 py-3.5 bg-white rounded-[5px] border border-[#dcdddf] justify-start items-center gap-3 inline-flex mb-5">
                <input
                  placeholder="Subject"
                  className="grow shrink basis-0  text-base font-normal font-['Inter'] leading-normal"
                ></input>
                <div className="w-6 h-6 relative" />
              </div>
              <div className="w-[478px] h-[134px] pl-5 pr-3.5 py-3.5 bg-white rounded-[5px] border border-[#dcdddf] justify-start items-start gap-3 inline-flex mb-10">
                <textarea
                  placeholder="Write a message"
                  className="w-full h-full text-base font-normal font-['Inter'] leading-normal text-left resize-none overflow-auto"
                ></textarea>
              </div>
              <div className="px-4 py-2.5 bg-[#4b6bfb] rounded-md flex-col justify-center items-center inline-flex">
                <input
                  type="submit"
                  value="Send Message"
                  className="text-center text-white text-sm font-medium font-['Work Sans'] leading-tight"
                ></input>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
