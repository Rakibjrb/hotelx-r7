import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./room.css";

const Room = ({ room }) => {
  const { _id, roomImage, title } = room;
  return (
    <Link to={`/room-details/${_id}`}>
      <div className="relative effect-of overflow-hidden rounded-lg">
        <img className="rounded-xl" src={roomImage} alt={title} />
        <div className="absolute left-0 w-full h-full bg-[#00000067] effect-on transition-all duration-300">
          <h2 className="text-white text-2xl font-roboto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            View Details
          </h2>
        </div>
      </div>
    </Link>
  );
};

Room.propTypes = {
  room: PropTypes.object,
};

export default Room;
