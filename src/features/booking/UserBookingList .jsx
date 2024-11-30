import { useState } from "react";
import Pagination from "../../components/Pagination";
import CancelBooking from "./CancelBooking";
import Spinner from "../../components/Spinner";
import useUserBookingList from "./hooks/useUserBookingList";
import Chip from "../../components/Chip";

const UserBookingList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isPending, pagination } = useUserBookingList(currentPage);

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="py-6">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg">
        <header className="rounded-t-lg bg-primary-active px-6 py-4 text-white">
          <h1 className="text-2xl font-semibold">Your Bookings</h1>
        </header>
        <main className="p-6">
          {data?.booking?.length > 0 ? (
            <>
              <ul className="space-y-4">
                {Array.isArray(data?.booking) &&
                  data?.booking?.map((booking) => (
                    <li
                      key={booking?.bookingId}
                      className="flex transform items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-md transition-transform hover:scale-105 hover:shadow-xl"
                    >
                      <div className="flex-1">
                        <h2 className="mb-1 text-lg font-semibold text-gray-800">
                          {booking?.serviceName}
                        </h2>
                        <p className="text-gray-600">
                          Consultant:{" "}
                          <span className="font-medium text-gray-700">
                            {booking.consultantName}
                          </span>
                        </p>
                        <div className="mt-2">
                          <Chip status={booking?.bookingStatus ?? ""} />
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0 text-right">
                        <p className="text-xs text-gray-500">
                          Created At:{" "}
                          {new Date(booking?.createdAt).toLocaleDateString()}
                        </p>
                        {booking.bookingStatus === "pending" && (
                          <div className="mt-2">
                            <CancelBooking orderId={booking?.bookingId} />
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
              </ul>
              <Pagination
                className="mt-6"
                currentPage={pagination?.page || 1}
                totalPages={pagination?.totalPages || 1}
                onPageChange={handlePageChange}
              />
            </>
          ) : (
            <p className="text-center text-sm text-gray-600">
              No bookings found.
            </p>
          )}
        </main>
      </div>
    </div>
  );
};

export default UserBookingList;
