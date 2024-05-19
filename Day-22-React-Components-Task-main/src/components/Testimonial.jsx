import PropTypes from "prop-types";

const Testimonial = ({ imgSrc, name, quote }) => {
  return (
    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
      <img
        className="img-fluid rounded-circle mb-3"
        src={imgSrc}
        alt="..."
      />
      <h5>{name}</h5>
      <p className="font-weight-light mb-0">{quote}</p>
    </div>
  );
};

Testimonial.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
  };

export default Testimonial;
