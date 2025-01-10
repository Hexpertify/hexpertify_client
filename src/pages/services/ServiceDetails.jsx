import { useParams } from "react-router-dom";
import useServiceDetails from "./hooks/useServiceDetails";
import ConsultantCard from "../../features/consultants/ConsultantCard";
import Spinner from "../../components/Spinner";
import BackButton from "../../components/Button/BackButton";
import Pagination from "../../components/Pagination";
import { useState } from "react";
import ReactMarkdown from 'react-markdown';


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
      <div className="relative mt-5 px-4">
        <BackButton />
        <div className="relative mb-6 mt-4">
          <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-black bg-opacity-50 p-4 text-center">
            <h1 className="absolute inset-0 m-auto flex h-32 w-64 items-center justify-center rounded-3xl font-Akshar text-4xl font-semibold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {data?.[0]?.name}
            </h1>
          </div>
          <img
            src={data?.[0]?.imageURL}
            alt={data?.[0]?.name}
            className="aspect-video h-48 w-full rounded-3xl object-cover shadow-lg sm:h-64"
          />
        </div>
        <h1 className="py-4 text-start font-Alata text-2xl font-normal sm:text-center sm:text-5xl">
          Featured Consultants
        </h1>

        {data?.[0]?.consultants?.length === 0 && (
          <p className="flex h-36 items-center justify-center text-center font-Alata text-2xl font-normal">
            No consultants available for this service
          </p>
        )}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          {data?.[0]?.consultants?.map((consultant) => (
            <ConsultantCard key={consultant?._id} {...consultant} />
          ))}
        </div>

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
  <ReactMarkdown>{data?.[0]?.screenDescription}</ReactMarkdown>

    </>
  );
}

export default ServiceDetails;
