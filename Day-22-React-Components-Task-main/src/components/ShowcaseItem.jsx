import PropTypes from "prop-types";

const ShowcaseItem = ({ order, imgUrl, title, description }) => {
  const imgOrder = order === "order-lg-2" ? "order-lg-1" : "order-lg-2";
  const textOrder = order === "order-lg-2" ? "order-lg-2" : "order-lg-1";

  return (
    <div className="row g-0">
      <div
        className={`col-lg-6 ${imgOrder} showcase-img`}
        style={{ backgroundImage: `url('${imgUrl}')` }}
      ></div>
      <div className={`col-lg-6 my-auto showcase-text ${textOrder}`}>
        <h2>{title}</h2>
        <p className="lead mb-0">{description}</p>
      </div>
    </div>
  );
};

ShowcaseItem.propTypes = {
  order: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ShowcaseItem;
