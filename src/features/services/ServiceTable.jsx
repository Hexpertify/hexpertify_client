import { useState } from "react";

import Table from "../../components/Table";
import useServiceList from "./hooks/useServiceList";
import Pagination from "../../components/Pagination";
import SwitchButton from "../../components/Button/SwitchButton";
import useUpdateServiceStatus from "./hooks/useUpdateServiceStatus";
import Menu from "../../components/Menu";
import ServiceForm from "./ServiceForm";
import { openModal } from "../../components/Modal";
import { Button } from "../../components/Button";
import useDeleteService from "./hooks/useDeleteService";
import ConsultantTable from "../consultants/ConsultantTable";

export default function ServiceTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isPending, pagination } = useServiceList(currentPage, true);
  const { updateServiceStatusAction, isloading } = useUpdateServiceStatus();
  const { deleteService } = useDeleteService();
  const [serviceDetail, setServiceDetail] = useState();
  const [isService, setIsService] = useState(true);

  const handleSwitchToggle = (item) => {
    const payload = {
      id: item?._id,
      status: !item?.isEnable,
    };
    updateServiceStatusAction(payload);
  };
  const menuItems = [
    { label: "View" },
    { label: "View Consultants" },
    { label: "Delete" },
  ];

  const columns = [
    { id: "1", title: "Name", key: "name" },
    {
      id: "3",
      title: "Status",
      key: "isEnable",
      cellRender: (item) => (
        <SwitchButton
          isOn={item?.isEnable || false}
          disabled={isloading}
          onToggle={() => handleSwitchToggle(item)}
        />
      ),
    },
    {
      id: "6",
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
    setServiceDetail({ ...item, isUpdate: true });

    switch (type?.label) {
      case "View":
        setServiceDetail({ ...item, isUpdate: true });
        openModal("serviceForm");
        break;
      case "Delete":
        deleteService({ ...item, id: item?._id });
        break;
      case "View Consultants":
        setIsService(false);
        break;
      default:
        return;
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (isPending) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  const handleOpenServiceForm = () => {
    setServiceDetail();
    openModal("serviceForm");
  };
  return (
    <div>
      {!isService ? (
        <ConsultantTable
          serviceId={serviceDetail?._id}
          backToService={() => setIsService(true)}
        />
      ) : (
        <>
          <div className="flex justify-end py-4">
            <Button title="Create" handleClick={handleOpenServiceForm} />
            <ServiceForm serviceDetail={serviceDetail} />
          </div>
          <Table columns={columns} rows={data} />
          <Pagination
            currentPage={pagination?.page || 1}
            totalPages={pagination?.totalPages || 1}
            onPageChange={handlePageChange}
            className="mt-4 flex !justify-end"
          />
        </>
      )}
    </div>
  );
}
