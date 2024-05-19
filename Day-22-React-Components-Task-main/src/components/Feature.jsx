import PropTypes from "prop-types";

const Feature = ({ icon, title, description }) => {
  return (
    <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
      <div className="features-icons-icon d-flex">
        <i className={icon}></i>
      </div>
      <h3>{title}</h3>
      <p className="lead mb-0">{description}</p>
    </div>
  );
};

Feature.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Feature;
