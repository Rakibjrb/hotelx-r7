import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="max-w-6xl mx-auto h-[700px] md:h-screen lg:h-screen xl:h-[768px] font-roboto flex items-center">
        <div className="md:w-full text-white text-center lg:w-1/2 lg:text-black lg:text-left">
          <h1 className="px-3 xl:px-0 text-5xl md:text-7xl mb-7">
            Apartments for rent <span className="font-extrabold">Miami.</span>
          </h1>
          <div className="flex justify-center lg:justify-start">
            <div className="flex gap-4 items-center">
              <div className="w-16 h-1 bg-red-500"></div>
              <p className="text-red-500 font-bold md:text-xl">
                From 59$ per night
              </p>
            </div>
          </div>
          <p className="text-xl mt-7 px-2 xl:px-0">
            Search millions of apartments houses, and private office suites for
            rent with our exclusive hotels & apartments webite
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
