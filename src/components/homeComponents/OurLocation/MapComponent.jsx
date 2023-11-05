import GoogleMapReact from "google-map-react";
import { PropTypes } from "prop-types";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
AnyReactComponent.propTypes = {
  text: PropTypes.string,
};

const MapComponent = () => {
  const defaultProps = {
    center: {
      lat: 25.761681,
      lng: -80.191788,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="Miami rent" />
      </GoogleMapReact>
    </div>
  );
};

export default MapComponent;
