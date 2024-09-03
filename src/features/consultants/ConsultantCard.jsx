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

  return (
    <div className="text-primary-active shadow-theme relative m-4 flex flex-col items-center overflow-hidden rounded-lg bg-[#F5F4F7] sm:max-w-sm sm:flex-row md:max-w-md lg:max-w-lg xl:max-w-xl">
      <img
        className="h-48 w-full object-cover object-center p-4 sm:h-64 sm:w-48 md:h-72 lg:h-80"
        src={imageURL?.toString()}
        alt={name}
      />
      <div className="w-full p-4 sm:p-6">
        <div className="flex w-full justify-end">
          {isCertified && (
            <p className="!bg-primary-button-color font-Acme rounded-lg px-2 py-1 text-xs font-normal text-white shadow-lg sm:text-sm">
              Certified
            </p>
          )}
        </div>
        <h2 className="font-B font-Baloo mb-2 text-xl font-normal text-black sm:text-2xl md:text-3xl lg:text-4xl">
          {name}
        </h2>
        <p className="font-Alata text-sm font-normal text-black sm:text-base md:text-lg">
          {about}
        </p>

        <p className="font-Baloo my-2 text-sm font-normal text-black sm:text-base md:text-lg">
          Languages: {languages}
        </p>
        <div className="flex items-center justify-between">
          <p className="font-Baloo text-lg font-normal text-black sm:text-xl md:text-2xl lg:text-3xl">
            Fees: ₹ {fees}
          </p>
          <Button
            title="Consult Now"
            className="mt-4 rounded-full sm:ml-4 sm:mt-0"
            variant="primary"
            handleClick={() => navigate(`consultant/${_id}`)}
          />
        </div>
      </div>
    </div>
  );
}

export default ConsultantCard;
