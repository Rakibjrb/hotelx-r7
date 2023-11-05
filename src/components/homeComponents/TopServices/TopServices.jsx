import { BiSupport, BiCoffee, BiExclude } from "react-icons/bi";
import { MdOutlinePriceChange } from "react-icons/md";

const TopServices = () => {
  return (
    <div className="my-24 max-w-6xl mx-auto px-10 lg:px-0 font-roboto">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-5">
          Our Top Services
        </h2>
        <div className="flex justify-center">
          <div className="w-24 h-2 bg-red-500 rounded-xl"></div>
        </div>
      </div>
      <div className="w-full h-auto py-16 lg:h-72 bg-gray-400 mt-8 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="border-2 border-white rounded-md p-6 text-white hover:border-black hover:text-black hover:cursor-pointer transition-colors">
            <div className="flex justify-center mb-5">
              <BiSupport className="text-5xl" />
            </div>
            <h4 className="text-center">24/7 Support</h4>
          </div>
          <div className="border-2 border-white rounded-md p-6 text-white hover:border-black hover:text-black hover:cursor-pointer transition-colors ">
            <div className="flex justify-center mb-5">
              <MdOutlinePriceChange className="text-5xl" />
            </div>
            <h4 className="text-center">Loyalty Programs</h4>
          </div>
          <div className="border-2 border-white rounded-md p-6 text-white hover:border-black hover:text-black hover:cursor-pointer transition-colors">
            <div className="flex justify-center mb-5">
              <BiCoffee className="text-5xl" />
            </div>
            <h4 className="text-center">Coffee Shop</h4>
          </div>
          <div className="border-2 border-white rounded-md p-6 text-white hover:border-black hover:text-black hover:cursor-pointer transition-colors">
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