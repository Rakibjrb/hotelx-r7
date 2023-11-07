import PropTypes from "prop-types";

const Bookings = ({ booking }) => {
  const { availability, bookingFor, date, pricePerNight, roomImage, title } =
    booking;
  return (
    <tr>
      <th></th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask w-12 h-12">
              <img src={roomImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">Price : {pricePerNight}</div>
            <div className="text-sm">Booked For : {bookingFor}</div>
          </div>
        </div>
      </td>
      <td>
        {title}
        <br />
        <span className="badge badge-ghost badge-sm">Booked on : {date}</span>
      </td>
      <td>{availability}</td>
      <th>
        <button className="btn btn-xs">Cancel</button>
      </th>
    </tr>
  );
};

Bookings.propTypes = {
  booking: PropTypes.object,
};
export default Bookings;
