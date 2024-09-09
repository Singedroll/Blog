const ContactUs = () => {
  return (
    <div className="flex max-w-[895px] h-[895px] mx-auto gap-[100px] mt-[100px] ">
      <div className="flex  flex-col gap-5">
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-col gap-5 w-[624px] ">
            <p className="font-semibold text-4xl self-start">Contact Us</p>
            <p className="text-base font-normal text-[#696A75]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="border rounded-xl flex flex-col gap-4 w-[262px] font-normal p-4">
            <p className="font-semibold">Address</p>
            <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
