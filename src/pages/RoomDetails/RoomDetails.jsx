import { FaCheck } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";

const RoomDetails = () => {
  const { data } = useLoaderData();
  const {
    roomImage,
    title,
    address,
    roomSize,
    pricePerNight,
    roomDescription,
    availability,
    bookingFor,
  } = data[0];

  return (
    <div className="max-w-3xl mx-auto px-3 xl:px-0 mt-[128px] mb-24">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl capitalize mb-5">Room Details</h2>
        <div className="flex justify-center">
          <div className="w-24 h-2 bg-red-500 rounded-xl"></div>
        </div>
      </div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure className="relative">
          <img src={roomImage} alt={title} />
          <h3 className="absolute top-2 right-2 text-white bg-green-500 py-1 px-4 rounded-md font-semibold">
            {pricePerNight}$/day
          </h3>
        </figure>
        <div className="card-body">
          <div className="space-y-3 mb-6 h-full">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p>
              <span className="font-semibold">Room Size : </span>
              {roomSize}
            </p>
            <p className="text-justify">
              <span className="font-bold">Description : </span>
              {roomDescription}
            </p>
            <p>
              <span className="font-semibold mr-2">Book for :</span>
              {bookingFor}
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold">Availability : </span>
              {availability}
              <FaCheck className="text-xl text-green-500" />
            </p>
            <p>
              <span className="font-semibold">Location : </span>
              {address}
            </p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn bg-red-500 w-full text-white hover:text-black">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
