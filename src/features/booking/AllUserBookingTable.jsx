import { useState } from "react";
import Table from "../../components/Table";
import useAllUserBooking from "./hooks/useAllUserBooking";
import Pagination from "../../components/Pagination";
import Menu from "../../components/Menu";
import useUpdateBookingStatus from "./hooks/useUpdateBookingStatus";
import dayjs from "dayjs";
import Chip from "../../components/Chip";

const menuItems = {
  onprogress: [{ label: "Completed" }, { label: "Cancel" }],
  pending: [{ label: "On Progress" }, { label: "Cancel" }],
  completed: [],
  cancelled: [],
};

export default function AllUserBookingTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isPending, pagination } = useAllUserBooking(currentPage);
  const { updateBookingStatusAction } = useUpdateBookingStatus();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const columns = [
    { id: "1", title: "Name", key: "userName" },
    { id: "2", title: "Email", key: "userEmail" },
    { id: "8", title: "Phone", key: "userPhoneNumber" },
    {
      id: "7",
      title: "Created At",
      key: "createdAt",
      cellRender: (item) => (
        <span className={`font-semibold text-gray-500`}>
          {dayjs(item?.createdAt).isValid()
            ? dayjs(item?.createdAt).format("MMMM D, YYYY at h:mm A")
            : "N/A"}
        </span>
      ),
    },
    { id: "3", title: "Consultant Name", key: "consultantName" },
    { id: "4", title: "Service Name", key: "serviceName" },
    {
      id: "5",
      title: "Status",
      key: "bookingStatus",
      cellRender: (item) => <Chip status={item?.bookingStatus ?? ""} />,
    },
    {
      id: "6",
      title: "Action",
      key: "Action",
      cellRender: (item) => (
        <Menu
          items={menuItems[item?.bookingStatus] || []}
          onSelect={(label) => handleTableAction(label, item)}
        />
      ),
    },
  ];

  const handleTableAction = async (type, item) => {
    var payload = { id: item?._id };
    switch (type?.label) {
      case "On Progress":
        payload.status = "onprogress";
        break;
      case "Cancel":
        payload.status = "cancelled";
        break;
      case "Completed":
        payload.status = "completed";
        break;
      default:
        return;
    }
    await updateBookingStatusAction(payload);
  };

  if (isPending) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Table
        columns={columns}
        rows={data}
        className="min-w-full overflow-hidden rounded-lg bg-gray-50 shadow-md"
      />
      <Pagination
        currentPage={pagination?.page || 1}
        totalPages={pagination?.totalPages || 1}
        onPageChange={handlePageChange}
        className="mt-4 flex !justify-end"
      />
    </>
  );
}
