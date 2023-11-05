import MapComponent from "./MapComponent";

const OurLocation = () => {
  return (
    <div className="max-w-6xl mx-auto font-roboto mb-24">
      <div className="flex items-center flex-col md:flex-row gap-8 md:gap-0">
        <div className="md:flex-1">
          <div className="lg:w-4/5">
            <div>
              <h2 className="text-4xl capitalize mb-5 font-semibold">
                Find us on google map
              </h2>
              <div className="flex">
                <div className="w-24 h-2 bg-red-500 rounded-xl"></div>
              </div>
            </div>
            <p className="mb-3 mt-5">
              Miami, FL, USA Lat Long Coordinates Info The latitude of Miami,
              FL,
            </p>
            <p>
              USA is 25.761681, and the longitude is -80.191788. Miami, FL, USA
              is located at United States
            </p>
          </div>
        </div>
        <div className="w-full h-[350px] md:flex-1">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default OurLocation;
