import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ name, _id, imageURL }) => {
  return (
    <Link to={`/services/${_id}`} className="block">
      <div className="relative m-4 flex h-[400px] max-w-xs transform flex-col justify-between overflow-hidden rounded-lg bg-black/50 shadow-lg shadow-white/35 transition-transform hover:scale-105 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="relative h-[400px]">
          <img
            className="absolute inset-0 h-full w-full rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-110"
            src={imageURL?.toString()}
            alt={name}
          />
        </div>
        <div className="flex flex-col justify-end bg-primary-active p-4 sm:p-6">
          <h1 className="truncate text-3xl font-bold text-white transition-transform duration-300 hover:scale-105">
            {name}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
