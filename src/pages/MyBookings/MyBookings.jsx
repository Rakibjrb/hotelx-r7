import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Bookings from "./Bookings";

const MyBookings = () => {
  const { data } = useLoaderData();
  const [bookings, setBookings] = useState(data);
  return (
    <div className="mt-[88px] mb-16 max-w-6xl mx-auto px-3 xl:px-0">
      <div className="overflow-x-auto max-w-6xl">
        <table className="table w-[768px] md:w-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-xl">Room</th>
              <th className="text-xl">Title</th>
              <th className="text-xl">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings ? (
              bookings?.map((booking) => (
                <Bookings key={booking._id} booking={booking} />
              ))
            ) : (
              <div className="text center">
                <h2 className="text-3xl  font-bold">Oooops...</h2>
                <h3 className="text-xl">No data found</h3>
              </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
