import { useEffect, useState } from "react";
import Bookings from "./Bookings";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const MyBookings = () => {
  const axios = useAxiosSecure();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);
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
          <table className="table w-[768px] md:w-full">
            <thead>
              <tr>
                <th></th>
                <th className="text-xl">Room</th>
                <th className="text-xl">Title</th>
                <th className="text-xl">Review</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((booking) => (
                <Bookings key={booking._id} booking={booking} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
