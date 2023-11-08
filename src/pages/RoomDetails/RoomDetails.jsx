import { FaCheck } from "react-icons/fa6";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useToaster from "../../hooks/useToaster";
import { useState } from "react";
import moment from "moment/moment";
import ReactHelmet from "../../components/commonComponents/ReactHelmet";

const RoomDetails = () => {
  const { data } = useLoaderData();
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const {
    _id,
    roomImage,
    title,
    featured,
    address,
    roomSize,
    pricePerNight,
    roomDescription,
    availability,
  } = data[0];

  const axios = useAxiosSecure();
  const { user } = useAuth();
  const { toast } = useToaster();

  const handleRoomBook = (id, title) => {
    if (!user) {
      return navigate("/user-login");
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
          bookingDate: date ? date : moment().format("Y-M-D"),
          user: user.email,
          roomId: _id,
        };
        data[0].availability = "Booked";
        axios.post("/booking", bookingInfo).then(() => {
          axios
            .patch(`/get-available-rooms/${id}`, { availability: "Booked" })
            .then(() => {
              toast("Room booking succesfull", true);
            })
            .catch(() => toast("Something went wrong ", true));
        });
      }
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-3 xl:px-0 mt-[128px] mb-24">
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Booking Summary</h3>
          <div className="py-4 space-y-2">
            <img className="w-full h-[200px]" src={roomImage} alt="" />
            <p>
              <span className="font-semibold">Price : </span>
              {pricePerNight}$/night
            </p>
            <p>
              <span className="font-semibold">Booking on : </span>
              {date ? date : moment().format("Y-M-D")}
            </p>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Okay</button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl capitalize mb-5">Room Details</h2>
        <div className="flex justify-center">
          <div className="w-24 h-2 bg-red-500 rounded-xl"></div>
        </div>
      </div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure className="relative">
          <img className="w-full h-[350px]" src={roomImage} alt={title} />
          <h3 className="absolute top-2 right-2 text-white bg-green-500 py-1 px-4 rounded-md font-semibold">
            {pricePerNight}$/day
          </h3>
        </figure>
        <div className="card-body">
          <div className="space-y-3 mb-6 h-full">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <h2 className="text-xl font-semibold">
              Featured : {featured ? "Featured Room" : "Not Featured Room"}
            </h2>
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
              <input
                className="px-2 border-2"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
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
            <button
              onClick={() => {
                document.getElementById("my_modal_1").showModal();
                handleRoomBook(_id, title);
              }}
              className="btn bg-red-500 w-full text-white hover:text-black"
              disabled={availability === "Available" ? false : true}
            >
              {availability === "Available" ? "Book Now" : "Already Booked"}
            </button>
          </div>
        </div>
      </div>
      <ReactHelmet title="Hotel X || Room Details" />
    </div>
  );
};

export default RoomDetails;
