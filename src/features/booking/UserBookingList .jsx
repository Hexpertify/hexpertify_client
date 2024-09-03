import { useState } from "react";
import Pagination from "../../components/Pagination";
import CancelBooking from "./CancelBooking";
import Spinner from "../../components/Spinner";
import useUserBookingList from "./hooks/useUserBookingList";

const UserBookingList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isPending, pagination } = useUserBookingList(currentPage);
  if (isPending) {
    return (
      <div className="flex min-h-40 items-center justify-center">
        <Spinner />
      </div>
    );
  }
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const bookingStatus = {
    pending: "text-yellow-600",
    completed: "text-green-600",
    cancelled: "text-red-600",
  };
  return (
    <div className="p-6">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-theme">
        <header className="bg-blue-700 py-4 text-center text-white">
          <h1 className="text-3xl font-bold">List of Booking</h1>
        </header>
        <main className="p-6">
          {data?.booking?.length > 0 ? (
            <ul className="space-y-4">
              {Array.isArray(data?.booking) &&
                data?.booking?.map((booking) => (
                  <li
                    key={booking.bookingId}
                    className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                  >
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">
                        {booking.serviceName}
                      </h2>
                      <p className="text-gray-600">
                        Consultant:{" "}
                        <span className="font-medium">
                          {booking.consultantName}
                        </span>
                      </p>
                      <p className="text-gray-600">
                        Booking Status:{" "}
                        <span
                          className={`font-semibold ${
                            bookingStatus[booking.bookingStatus] ?? ""
                          }`}
                        >
                          {booking.bookingStatus}
                        </span>
                      </p>
                      <p className="text-sm text-gray-500">
                        Created At:{" "}
                        {new Date(booking.createdAt).toLocaleString()}
                      </p>
                    </div>
                    {booking.bookingStatus === "pending" && (
                      <CancelBooking orderId={booking?.bookingId} />
                    )}
                  </li>
                ))}
              <Pagination
                currentPage={pagination?.page || 1}
                totalPages={pagination?.totalPages || 10}
                onPageChange={handlePageChange}
              />
            </ul>
          ) : (
            <p className="text-center text-gray-600">No booking found.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default UserBookingList;
