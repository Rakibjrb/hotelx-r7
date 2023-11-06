import Room from "./Room";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const FeaturedRooms = () => {
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState([]);

  const axios = useAxiosSecure();

  useEffect(() => {
    axios.get("/get-rooms").then((res) => {
      setRooms(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="mb-24 font-roboto">
      <div className="max-w-6xl mx-auto px-3 xl:px-0">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl capitalize mb-5">
            Our Featured Rooms
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-2 bg-red-500 rounded-xl"></div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="flex justify-center md:col-span-2 lg:col-span-3">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            rooms?.map((room, index) => <Room key={index} room={room} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedRooms;
