import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import moment from "moment/moment";
import useToaster from "../../hooks/useToaster";

const Bookings = ({ booking, handleReloadBooking }) => {
  const { _id, bookingDate, pricePerNight, roomImage, title } = booking;
  const { toast } = useToaster();
  const axios = useAxiosSecure();
  const handleBookingDelete = (id) => {
    const bookedOn = moment(bookingDate, "Y-M-D");
    const cancelDate = moment().format("Y-M-D");
    const formated = moment(cancelDate, "Y-M-D");

    if (formated.isBefore(bookedOn)) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          axios.delete(`/delete-bookings/${id}`).then((res) => {
            if (res?.data?.updated?.deletedCount > 0) handleReloadBooking(id);
          });
        }
      });
    } else {
      toast("Can't delete this booking because you booked today", true);
    }
  };

  const handleUpdateBookingDate = (id) => {
    console.log(id);
    // axios
    //   .patch(`/update-booking-date/${id}`, { updatedDate: "10/11/23" })
    //   .then((res) => console.log(res));
  };
  return (
    <tr>
      <th></th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask w-12 h-12">
              <img src={roomImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">Price : {pricePerNight}</div>
          </div>
        </div>
      </td>
      <td>
        {title}
        <br />
        <span className="badge badge-ghost badge-sm">
          Booked for : {bookingDate}
        </span>
      </td>
      <td>
        <Link to="/post-review" className="btn btn-sm">
          Post Review
        </Link>
      </td>
      <th>
        <button
          className="btn btn-sm"
          onClick={() => handleUpdateBookingDate(_id)}
        >
          Update Date
        </button>
      </th>
      <th>
        <button onClick={() => handleBookingDelete(_id)} className="btn btn-sm">
          Delete
        </button>
      </th>
    </tr>
  );
};

Bookings.propTypes = {
  booking: PropTypes.object,
  handleReloadBooking: PropTypes.func,
};
export default Bookings;
