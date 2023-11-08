import axios from "axios";

const instance = axios.create({
  baseURL: "https://hotel-x-server-eight.vercel.app/api/v1",
  withCredentials: true,
});

const useAxiosSecure = () => {
  return instance;
};

export default useAxiosSecure;
