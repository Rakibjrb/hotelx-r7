import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const ReactHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};
ReactHelmet.propTypes = {
  title: PropTypes.string,
};
export default ReactHelmet;
