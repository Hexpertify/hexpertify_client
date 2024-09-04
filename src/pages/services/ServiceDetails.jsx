import { useParams } from "react-router-dom";
import useServiceDetails from "./hooks/useServiceDetails";
import ConsultantCard from "../../features/consultants/ConsultantCard";
import Spinner from "../../components/Spinner";
import BackButton from "../../components/Button/BackButton";
import Pagination from "../../components/Pagination";
import { useState } from "react";

function ServiceDetails() {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isPending, pagination } = useServiceDetails({
    id,
    currentPage,
  });

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (isPending) {
    return (
      <div className="flex min-h-[calc(100vh-15rem)] items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="relative mt-5 px-[40px]">
        <BackButton />
        {/* <div className="relative flex w-full justify-center">
          <h1 className="absolute inset-0 m-auto flex h-32 w-64 items-center justify-center font-Akshar text-4xl font-semibold text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {data?.[0].name}
          </h1>
          <img
            src={data?.[0].imageURL}
            className="h-36 w-[90%] rounded-3xl object-cover object-center shadow-theme sm:h-48 md:h-60 lg:h-72 xl:h-80"
            alt={data?.[0].name}
          />
        </div> */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50 p-4 text-center">
            <h1 className="absolute inset-0 m-auto flex h-32 w-64 items-center justify-center font-Akshar text-4xl font-semibold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {data?.[0].name}
            </h1>
          </div>
          <img
            src={data?.[0].imageURL}
            alt={data?.[0].name}
            className="h-64 w-full rounded-lg object-cover"
          />
        </div>
        <h1 className="py-4 text-center font-Alata text-5xl font-normal">
          Featured Professionals
        </h1>

        {data?.[0]?.consultants?.length === 0 && (
          <p className="flex h-36 items-center justify-center text-center font-Alata text-2xl font-normal">
            No consultants available for this service
          </p>
        )}

        {data?.[0]?.consultants?.map((consultant) => (
          <ConsultantCard key={consultant?._id} {...consultant} />
        ))}

        {data?.[0]?.consultants?.length !== 0 && (
          <div className="col-span-2 mt-10 flex items-center justify-center">
            <Pagination
              currentPage={pagination?.page || 1}
              totalPages={pagination?.totalPages || 1}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default ServiceDetails;
