import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import moment from "moment/moment";
import useToaster from "../../hooks/useToaster";

const Bookings = ({ booking }) => {
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
            console.log(res.data);
          });
        }
      });
    } else {
      toast("Can't delete this booking", true);
    }
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
        <h3 className="btn btn-sm bg-green-500 hover:bg-green-500">Booked</h3>
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
};
export default Bookings;
