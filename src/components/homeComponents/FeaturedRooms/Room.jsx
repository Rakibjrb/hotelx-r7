import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa6";

const Room = ({ room }) => {
  const {
    roomImage,
    title,
    address,
    roomSize,
    pricePerNight,
    roomDescription,
    availability,
    bookingFor,
  } = room;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="relative">
        <img src={roomImage} alt={title} />
        <h3 className="absolute top-2 right-2 text-white bg-green-500 py-1 px-4 rounded-md font-semibold">
          {pricePerNight}$/Night
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
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

Room.propTypes = {
  room: PropTypes.object,
};

export default Room;
