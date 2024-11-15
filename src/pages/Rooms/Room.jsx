import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import "./room.css";

const Room = ({ room }) => {
  const { _id, roomImage, title, availability } = room;
  return (
    <Link to={`/room-details/${_id}`}>
      <div className="relative effect-of overflow-hidden rounded-lg">
        <img
          className="rounded-xl w-full h-[241px]"
          src={roomImage}
          alt={title}
        />
        <div className="absolute left-0 w-full h-full bg-[#00000067] effect-on transition-all duration-300">
          <h2 className="text-white text-2xl font-roboto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            View Details
          </h2>
        </div>
      </div>
      <div className="shadow-xl p-3 rounded-lg">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="flex items-center gap-2">
          <span className="font-semibold">Availability : </span>
          {availability}
          <FaCheck className="text-xl text-green-500" />
        </p>
      </div>
    </Link>
  );
};

Room.propTypes = {
  room: PropTypes.object,
};

export default Room;
