import { useEffect, useState } from "react";
import Room from "./Room";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";
import ReactHelmet from "../../components/commonComponents/ReactHelmet";

const Rooms = () => {
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState([]);
  const [price, setPrice] = useState(Infinity);
  const axios = useAxiosSecure();
  const { data } = useLoaderData();

  useEffect(() => {
    axios.get(`/get-available-rooms?price=${price}`).then((res) => {
      const filtered = res.data.filter(
        (forfilter) => forfilter.pricePerNight <= price
      );
      setRooms(filtered);
      setLoading(false);
    });
  }, [price]);

  return (
    <div className="mt-[128px] max-w-6xl mx-auto px-3 xl:px-0 mb-24">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl capitalize mb-5">
          Our Available Rooms
        </h2>
        <div className="flex justify-center">
          <div className="w-24 h-2 bg-red-500 rounded-xl"></div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Reviewed Rooms : {data.length}</h2>
          <h2 className="text-xl font-bold">
            Available Rooms : {rooms.length}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">Filter Price :</h2>
          <select
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            className="border-2 border-black px-3 rounded-lg"
          >
            <option value={Infinity}>Get All</option>
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
      <ReactHelmet title="Hotel X | All Rooms" />
    </div>
  );
};

export default Rooms;
