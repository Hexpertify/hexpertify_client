import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ name, _id, imageURL }) => {
  return (
    <Link to={`/services/${name.toLowerCase().replace(/ /g, "-")}/${_id}`}>
      <div className="container-card !w-full rounded-lg bg-primary-active">
        <div>
          <img
            className="inset-0 h-[200px] w-full rounded-lg object-cover object-center sm:h-[250px]"
            src={imageURL?.toString()}
            alt={name}
          />
        </div>
        <div className="flex flex-col justify-end p-4 sm:p-6">
          <h3 className="truncate text-lg font-bold text-white sm:text-xl md:text-2xl">
            {name}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
