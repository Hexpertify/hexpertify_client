import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";

/* eslint-disable react/prop-types */
function ConsultantCard({
  _id,
  name,
  about,
  languages,
  fees,
  imageURL,
  isCertified,
}) {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const textThreshold = 100;

  const shouldShowMore = about.length > textThreshold;

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative flex items-center overflow-hidden rounded-lg bg-[#F5F4F7] text-primary-active shadow-lg">
      <img
        className="h-full w-[40%] rounded-3xl object-cover object-center p-2"
        src={imageURL?.toString()}
        alt={name}
      />
      <div className="flex w-full flex-col items-stretch gap-3 px-4 py-2">
        <div className="flex w-full justify-end gap-3">
          {/* <p className="rounded-lg !bg-[#606060] px-4 py-1 font-Acme text-lg font-bold text-white shadow-lg">
            Experienced
          </p> */}
          {isCertified ? (
            <p className="rounded-lg !bg-primary-button-color px-4 py-1 pl-8 font-Acme text-lg font-bold text-white shadow-lg">
              Certified
            </p>
          ) : (
            <p className="rounded-lg bg-[#606060] px-4 py-1 pl-8 font-Acme text-lg font-bold text-white shadow-lg">
              Experienced
            </p>
          )}
        </div>
        <h2 className="font-B font-Baloo text-xl font-semibold text-black sm:text-2xl">
          {name}
        </h2>
        <p className="font-Alata text-sm font-normal text-black">
          {isExpanded ? about : `${about.substring(0, textThreshold)}...`}
          {shouldShowMore && (
            <span
              onClick={toggleReadMore}
              className="text-primary-active hover:underline focus:outline-none"
            >
              {isExpanded ? "Show less" : "See more"}
            </span>
          )}
        </p>
        <div className="flex flex-col items-center justify-end gap-2">
          <div>
            <p className="font-Baloo text-sm font-medium text-black sm:text-2xl">
              Languages: {languages}
            </p>
          </div>
          <div>
            <span className="mx-2 font-Baloo text-lg font-semibold text-black sm:text-2xl">
              ₹ {fees}
            </span>
            <Button
              title="Consult Now"
              variant="primary"
              className="rounded-full text-xs font-semibold sm:text-2xl"
              handleClick={() => navigate(`consultant/${_id}`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultantCard;
