import { FaRegStar, FaStar } from "react-icons/fa";

export default function StarRating({ setRating, rating }) {
  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };
  return (
    <div className="flex justify-center">
      {[1, 2, 3, 4, 5].map((index) => (
        <button
          type="button"
          key={index}
          onClick={() => handleRatingChange(index)}
          className="focus:outline-none"
        >
          {index <= rating ? (
            <FaStar color="#FFD700" size={30} />
          ) : (
            <FaRegStar color="#D4D4D4" size={30} />
          )}
        </button>
      ))}
    </div>
  );
}
