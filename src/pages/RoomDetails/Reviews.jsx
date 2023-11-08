import PropTypes from "prop-types";

const Reviews = ({ review }) => {
  const { _id, testimonial, name, occupation, userImage } = review;
  return (
    <div className="h-full px-14">
      <div className="flex gap-2">
        <img className="w-12 h-12 rounded-full" src={userImage} alt={name} />
        <div>
          <h2 className="text-xl">{name}</h2>
          <h3>{occupation}</h3>
        </div>
      </div>
      <p className="my-4 text-justify">{testimonial}</p>
      <div className="rating">
        <input
          type="radio"
          name={`rating-${_id}`}
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name={`rating-${_id}`}
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name={`rating-${_id}`}
          className="mask mask-star-2 bg-orange-400"
          defaultChecked
        />
        <input
          type="radio"
          name={`rating-${_id}`}
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name={`rating-${_id}`}
          className="mask mask-star-2 bg-orange-400"
        />
      </div>
    </div>
  );
};

Reviews.propTypes = {
  review: PropTypes.object,
};
export default Reviews;
