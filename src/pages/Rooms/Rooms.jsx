import { useEffect, useState } from "react";
import Room from "./Room";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";

const Rooms = () => {
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState([]);
  const [price, setPrice] = useState(0);
  const axios = useAxiosSecure();
  const { data } = useLoaderData();

  useEffect(() => {
    axios.get(`/get-rooms`).then((res) => {
      const filtered = res.data.filter(
        (forfilter) => forfilter.pricePerNight <= price
      );
      setRooms(filtered);
      setLoading(false);
    });
  }, [price]);

  useEffect(() => {
    setLoading(true);
    axios.get(`/get-rooms`).then((res) => {
      setRooms(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="mt-[88px] max-w-6xl mx-auto px-3 xl:px-0 mb-24">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl capitalize mb-5">Our All Rooms</h2>
        <div className="flex justify-center">
          <div className="w-24 h-2 bg-red-500 rounded-xl"></div>
        </div>
      </div>

      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Reviewed Rooms : {data.length}</h2>
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">Filter Price :</h2>
          <select
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            className="border-2 border-black px-3 rounded-lg"
          >
            <option>Select</option>
            <option value="200">200$</option>
            <option value="300">300$</option>
            <option value="400">400$</option>
            <option value="500">500$</option>
            <option value="800">800$</option>
            <option value="1000">1000$</option>
          </select>
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
  );
};

export default Rooms;
