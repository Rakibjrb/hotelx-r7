import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useToaster from "../../../hooks/useToaster";

const Room = ({ room, setReload }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axios = useAxiosSecure();
  const { toast } = useToaster();

  const {
    _id,
    roomImage,
    title,
    roomDescription,
    address,
    roomSize,
    pricePerNight,
    availability,
    bookingFor,
  } = room;

  const handleFeaturedRoomBook = (id, title) => {
    if (!user) {
      navigate("/user-login");
      return;
    }
    Swal.fire({
      title: "Click ok to confirm",
      text: title,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Confirmed!",
          text: "Thank you for confirmed",
          icon: "success",
        });
        const bookingInfo = {
          roomImage,
          title,
          pricePerNight,
          availability: "Booked",
          bookingDate: moment().format("Y-M-D"),
          user: user.email,
          roomId: _id,
        };
        axios.post("/booking", bookingInfo).then(() => {
          axios
            .patch(`/get-available-rooms/${id}`, { availability: "Booked" })
            .then(() => {
              toast("Room booking succesfull", true);
              setReload(true);
            })
            .catch(() => toast("Something went wrong ", true));
        });
      }
    });
  };

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="relative">
        <img src={roomImage} alt={title} />
        <h3 className="absolute top-2 right-2 text-white bg-green-500 py-1 px-4 rounded-md font-semibold">
          {pricePerNight}$/day
        </h3>
      </figure>
      <div className="card-body">
        <div className="space-y-2 mb-6 h-full">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-justify">{roomDescription}</p>
          <p>
            <span className="font-semibold">Room Size : </span>
            {roomSize}
          </p>
          <p>
            <span className="font-semibold mr-2">Book for :</span>
            {bookingFor}
          </p>
          <div>
            {availability === "Available" ? (
              <p className="flex items-center gap-2">
                <span className="font-semibold">Availability : </span>
                {availability}
                <FaCheck className="text-xl text-green-500" />
              </p>
            ) : (
              <p className="flex items-center gap-2">
                <span className="font-semibold">Availability : </span>
                Not Available Now
                <RxCross2 className="text-xl text-red-500" />
              </p>
            )}
          </div>
          <p>
            <span className="font-semibold">Location : </span>
            {address}
          </p>
        </div>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleFeaturedRoomBook(_id, title)}
            className="btn bg-red-500 w-full text-white hover:text-black"
            disabled={availability === "Available" ? false : true}
          >
            {availability === "Available" ? "Book Now" : "Not Available"}
          </button>
        </div>
      </div>
    </div>
  );
};

Room.propTypes = {
  room: PropTypes.object,
  setReload: PropTypes.func,
};

export default Room;
