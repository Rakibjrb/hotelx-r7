import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const ReactHelmet = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};
ReactHelmet.propTypes = {
  title: PropTypes.string,
  description: PropTypes.description,
};
export default ReactHelmet;
