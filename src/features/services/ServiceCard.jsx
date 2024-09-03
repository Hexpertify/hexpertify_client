import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ name, _id, imageURL }) => {
  return (
    <Link to={`/services/${_id}`}>
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50 p-4 text-center">
          <h1 className="absolute inset-0 m-auto flex h-32 w-64 items-center justify-center font-Akshar text-xl font-semibold text-white sm:text-2xl md:text-3xl lg:text-5xl">
            {name}
          </h1>
        </div>
        <img
          src={imageURL?.toString()}
          alt={name}
          className="h-64 w-full rounded-lg object-cover"
        />
      </div>
    </Link>
  );
};

export default ServiceCard;
