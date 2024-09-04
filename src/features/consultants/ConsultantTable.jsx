/* eslint-disable react/prop-types */
import { useState } from "react";
import Pagination from "../../components/Pagination";
import Table from "../../components/Table";
import useConsultantList from "./hooks/useConsultantList";
import Menu from "../../components/Menu";
import { openModal } from "../../components/Modal";
import ConsultantForm from "./ConsultantForm";
import { Button } from "../../components/Button";
import useDeleteConsultant from "./hooks/useDeleteConsultant";
import { IoCaretBackOutline } from "react-icons/io5";

export default function ConsultantTable({ serviceId, backToService }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [consultantDetails, setConsultantDetails] = useState();
  const { deleteConsultant } = useDeleteConsultant();

  const { data, pagination, isPending } = useConsultantList(
    serviceId,
    currentPage,
    true,
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const menuItems = [{ label: "View" }, { label: "Delete" }];
  const columns = [
    {
      id: "1",
      title: "Name",
      key: "name",
      cellRender: (item) => (
        <span className="font-semibold text-gray-800">{item?.name}</span>
      ),
    },
    {
      id: "2",
      title: "Experience",
      key: "experience",
      cellRender: (item) => (
        <span className="text-gray-600">
          {item?.experience?.year} years {item?.experience?.month} months
        </span>
      ),
    },
    {
      id: "3",
      title: "Ratings",
      key: "ratings",
      cellRender: (item) => (
        <span className="text-lg text-yellow-500">
          {"★".repeat(item?.ratings)}
        </span>
      ),
    },
    {
      id: "4",
      title: "Languages",
      key: "languages",
      cellRender: (item) => (
        <span className="text-gray-600">{item?.languages?.join(", ")}</span>
      ),
    },
    {
      id: "5",
      title: "Fees",
      key: "fees",
      cellRender: (item) => (
        <span className="font-medium text-blue-600">₹{item?.fees}</span>
      ),
    },
    {
      id: "6",
      title: "Certified",
      key: "isCertified",
      cellRender: (item) =>
        item?.isCertified ? (
          <span className="font-semibold text-green-600">Yes</span>
        ) : (
          <span className="font-semibold text-red-600">No</span>
        ),
    },
    {
      id: "7",
      title: "Action",
      key: "Action",
      cellRender: (item) => (
        <Menu
          items={menuItems || []}
          onSelect={(label) => handleTableAction(label, item)}
        />
      ),
    },
  ];

  const handleTableAction = async (type, item) => {
    switch (type?.label) {
      case "View":
        setConsultantDetails({ ...item, isUpdate: true });
        openModal("consultantForm");
        break;
      case "Delete":
        deleteConsultant(item?._id);
        break;
      default:
        return;
    }
  };

  const handleOpenConsultantForm = () => {
    setConsultantDetails({ serviceId: serviceId });
    openModal("consultantForm");
  };

  return (
    <div className="container mx-auto p-6">
      {isPending ? (
        <div className="flex h-64 items-center justify-center rounded-lg bg-gray-100 shadow-md">
          <span className="text-gray-500">Loading...</span>
        </div>
      ) : (
        <>
          <ConsultantForm consultantDetails={consultantDetails} />

          <div className="mb-6 flex items-center justify-between">
            <span
              onClick={backToService}
              className="inline-flex cursor-pointer items-center text-lg font-medium text-primary-text"
            >
              <IoCaretBackOutline className="mr-2" />
              Back
            </span>
            <h1 className="text-3xl font-bold text-gray-800">Consultant</h1>
            <Button title="Create" handleClick={handleOpenConsultantForm} />
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50 p-4 text-center">
              <h2 className="text-4xl font-bold text-white shadow-lg">
                {data?.[0]?.name}
              </h2>
            </div>
            <img
              src={data?.[0]?.imageURL}
              alt={data?.[0]?.name}
              className="h-64 w-full rounded-lg object-cover"
            />
          </div>

          <Table
            columns={columns}
            rows={data?.[0].consultants}
            className="mb-6"
          />

          <Pagination
            currentPage={pagination?.page || 1}
            totalPages={pagination?.totalPages || 1}
            onPageChange={handlePageChange}
            className="mt-4 flex justify-end"
          />
        </>
      )}
    </div>
  );
}
