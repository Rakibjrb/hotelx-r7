import { BiSupport, BiCoffee, BiExclude } from "react-icons/bi";
import { MdOutlinePriceChange } from "react-icons/md";

const TopServices = () => {
  return (
    <div className="my-24 max-w-6xl mx-auto px-10 lg:px-0 font-roboto">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl mb-5">Our Top Services</h2>
        <div className="flex justify-center">
          <div className="w-24 h-2 bg-red-500 rounded-xl"></div>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="800"
        className="w-full h-auto py-16 lg:h-72 bg-gradient-to-b from-[#00000083] to-[#525252] mt-8 flex justify-center items-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="border-2 border-white rounded-md p-6 text-white hover:border-black hover:text-black hover:cursor-pointer transition-colors"
          >
            <div className="flex justify-center mb-5">
              <BiSupport className="text-5xl" />
            </div>
            <h4 className="text-center">24/7 Support</h4>
          </div>
          <div
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="border-2 border-white rounded-md p-6 text-white hover:border-black hover:text-black hover:cursor-pointer transition-colors "
          >
            <div className="flex justify-center mb-5">
              <MdOutlinePriceChange className="text-5xl" />
            </div>
            <h4 className="text-center">Loyalty Programs</h4>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="border-2 border-white rounded-md p-6 text-white hover:border-black hover:text-black hover:cursor-pointer transition-colors"
          >
            <div className="flex justify-center mb-5">
              <BiCoffee className="text-5xl" />
            </div>
            <h4 className="text-center">Coffee Shop</h4>
          </div>
          <div
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="border-2 border-white rounded-md p-6 text-white hover:border-black hover:text-black hover:cursor-pointer transition-colors"
          >
            <div className="flex justify-center mb-5">
              <BiExclude className="text-5xl" />
            </div>
            <h4 className="text-center">Excluesive Bundle</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopServices;
