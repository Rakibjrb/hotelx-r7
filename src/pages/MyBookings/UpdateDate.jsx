import moment from "moment";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import useToaster from "../../hooks/useToaster";
import ReactHelmet from "../../components/commonComponents/ReactHelmet";

const UpdateDate = () => {
  const bookingId = useParams().id;
  const axios = useAxiosSecure();
  const navigate = useNavigate();
  const { toast } = useToaster();
  const handleUpdateBookingDate = (e) => {
    e.preventDefault();
    const newDate = e.target.updatedate.value || moment().format("Y-M-D");
    axios
      .patch(`/update-booking-date/${bookingId}`, { updatedDate: newDate })
      .then((res) => {
        toast("update successfull", true);
        if (res.data.modifiedCount) navigate("/my-bookings");
      });
  };

  return (
    <div className="mt-[128px] mb-24 max-w-6xl mx-auto px-3 xl:px-0">
      <div className="hero min-h-screen lg:min-h-[300px]">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleUpdateBookingDate} className="card-body">
            <h2 className="text-center font-bold mb-4 text-2xl">
              Update Booking Date
            </h2>
            <div className="form-control">
              <input
                type="date"
                placeholder=""
                name="updatedate"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update Now</button>
            </div>
          </form>
        </div>
      </div>
      <ReactHelmet title="Hotel X || Booking Date Update" />
    </div>
  );
};

export default UpdateDate;
