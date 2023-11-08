import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useToaster from "../../hooks/useToaster";
import ReactHelmet from "../../components/commonComponents/ReactHelmet";

const PostReview = () => {
  const { user } = useAuth();
  const { toast } = useToaster();
  const axios = useAxiosSecure();
  const navigate = useNavigate();

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const testimonials = {
      userImage: user.photoURL,
      name: user.displayName,
      occupation: e.target.occupation.value,
      testimonial: e.target.message.value,
    };

    axios.post("/postTestimonials", testimonials).then((res) => {
      if (res) {
        toast("Review post successfull", true);
        navigate("/my-bookings");
      }
    });
  };

  return (
    <div className="mt-[128px] mb-24 max-w-6xl mx-auto px-3 xl:px-0">
      <div className="hero min-h-screen">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleReviewSubmit} className="card-body">
            <h2 className="text-center font-bold mb-4 text-2xl">
              Post a Review
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Occupation</span>
              </label>
              <input
                type="text"
                placeholder=""
                name="occupation"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="border-2 rounded-lg p-1"
                name="message"
                cols="30"
                rows="4"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Post Now</button>
            </div>
          </form>
        </div>
      </div>
      <ReactHelmet title="Hotel X | Review Post" />
    </div>
  );
};

export default PostReview;
