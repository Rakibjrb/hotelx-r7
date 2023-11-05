import PropTypes from "prop-types";

const Review = ({ review }) => {
  const { userImage, name, occupation, testimonial } = review;
  return (
    <div className="h-full border-2 rounded-lg flex justify-center">
      <div className="p-10">
        <div className="flex items-start mb-5">
          <img className="w-14 rounded-full mr-5" src={userImage} alt={name} />
          <div>
            <h3 className="font-semibold text-xl">{name}</h3>
            <p>{occupation}</p>
          </div>
        </div>
        <p className="text-justify lg:text-left">{testimonial}</p>
      </div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.object,
};
export default Review;
