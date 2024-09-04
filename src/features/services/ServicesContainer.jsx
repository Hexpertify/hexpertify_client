import { useState } from "react";

import Pagination from "../../components/Pagination";
import Spinner from "../../components/Spinner";
import useServiceList from "./hooks/useServiceList";
import ServiceCard from "./ServiceCard";

const ServicesContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isPending, pagination } = useServiceList(currentPage);

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

  if (Array.isArray(data) && data.length === 0) {
    return (
      <div className="flex min-h-[calc(100vh-15rem)] flex-col items-center justify-center p-6 text-center">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          No Services Available
        </h2>
        <p className="mb-6 text-lg text-gray-600">
          It looks like there are no services available at the moment. Please
          check back later or contact support for more information.
        </p>
        <button
          className="mt-4 rounded-lg bg-blue-500 px-6 py-2 text-white shadow-md transition-colors duration-300 hover:bg-blue-600"
          onClick={() => window.location.reload()} // Optional: Reloads the page
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {Array.isArray(data) &&
          data.map((service) => <ServiceCard key={service._id} {...service} />)}
      </div>
      {Array.isArray(data) && (
        <Pagination
          currentPage={pagination?.page || 1}
          totalPages={pagination?.totalPages || 1}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default ServicesContainer;
