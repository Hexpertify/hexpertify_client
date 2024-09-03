// import axios from "axios";
import { useState } from "react";

import Pagination from "../../components/Pagination";
import Spinner from "../../components/Spinner";
import useServiceList from "./hooks/useServiceList";
import ServiceCard from "./ServiceCard";

const ServicesContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isPending, pagination } = useServiceList(currentPage);

  const handlePageChange = (page) => {
    console.log(page);
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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {Array.isArray(data) &&
          data?.map((service) => (
            <ServiceCard key={service?._id} {...service} />
          ))}
      </div>
      {Array.isArray(data) && (
        <Pagination
          currentPage={pagination?.page || 1}
          totalPages={pagination?.totalPages || 10}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default ServicesContainer;
