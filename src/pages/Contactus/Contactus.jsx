import ReactHelmet from "../../components/commonComponents/ReactHelmet";
import "./contact.css";

const Contactus = () => {
  return (
    <div>
      <ReactHelmet title="Contact Us" />
      <div className="contact-page w-full h-[760px] flex justify-center items-center mt-[88px] px-4 md:px-0">
        <form className="border-2 border-white form-control p-10 w-[500px] rounded-lg">
          <div className="w-full space-y-5">
            <input
              type="name"
              placeholder="Enter name"
              className="px-3 py-2 rounded-lg w-full text-white bg-transparent border-2 border-white"
              name="name"
              required
            />
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              className="px-3 py-2 rounded-lg w-full text-white bg-transparent border-2 border-white"
              required
            />
            <input
              type="text"
              placeholder="Enter Address"
              name="address"
              className="px-3 py-2 rounded-lg w-full text-white bg-transparent border-2 border-white"
              required
            />
            <textarea
              type="text"
              placeholder="Enter Message"
              className="px-3 py-2 rounded-lg w-full text-white bg-transparent border-2 border-white"
              name="message"
              rows="6"
              required
            ></textarea>
            <button className="font-semibold btn bg-transparent text-white w-full">
              Submit Info
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
