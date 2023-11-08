import { useEffect, useState } from "react";
import Bookings from "./Bookings";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import ReactHelmet from "../../components/commonComponents/ReactHelmet";

const MyBookings = () => {
  const axios = useAxiosSecure();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);

  const handleReloadBooking = (id) => {
    const filtered = bookings.filter((booking) => booking._id !== id);
    setBookings(filtered);
  };

  useEffect(() => {
    setLoading(true);
    axios.get(`/get-booking-rooms?email=${user.email}`).then((res) => {
      setBookings(res.data);
      setLoading(false);
    });
  }, [axios]);
  return (
    <div className="mt-[88px] mb-16 max-w-6xl mx-auto px-3 xl:px-0">
      <div className="overflow-x-auto max-w-6xl">
        {loading ? (
          "Loading your data please wait"
        ) : (
          <table className="table w-[1080px] xl:w-full">
            <thead>
              <tr>
                <th></th>
                <th className="text-xl">Room</th>
                <th className="text-xl">Title</th>
                <th className="text-xl">Review</th>
                <th className="text-xl">Update Date</th>
                <th className="text-xl">Delete Bookings</th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((booking) => (
                <Bookings
                  key={booking._id}
                  booking={booking}
                  handleReloadBooking={handleReloadBooking}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
      <ReactHelmet title="Hotel X || My Booking rooms" />
    </div>
  );
};

export default MyBookings;
