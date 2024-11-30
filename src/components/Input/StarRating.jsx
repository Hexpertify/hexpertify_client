/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating = 0, onChange, label = "Rating" }) => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const handleClick = (index) => {
    if (onChange) {
      onChange(index);
    }
  };

  const renderStar = (index) => {
    const starRating = hovered !== null ? hovered : rating;
    const isFilled = starRating >= index;
    const isHalf = starRating >= index - 0.5 && starRating < index;

    return (
      <div
        key={index}
        className={`p-1 transition-transform duration-300 hover:scale-125 ${isFilled ? "text-yellow-500" : "text-gray-300"}`}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(index)}
      >
        {isHalf ? (
          <FaStarHalfAlt size={30} />
        ) : isFilled ? (
          <FaStar size={30} />
        ) : (
          <FaRegStar size={30} />
        )}
      </div>
    );
  };

  return (
    <div>
      <label className="mb-1 block text-sm font-semibold capitalize text-primary-text">
        {label}
      </label>
      <div className="flex cursor-pointer">
        {Array.from({ length: 5 }, (_, index) => renderStar(index + 1))}
      </div>
    </div>
  );
};

export default StarRating;
