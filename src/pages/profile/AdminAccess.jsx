import { useState } from "react";

import Tabs from "../../components/Tabs";
import AllUserBookingTable from "../../features/booking/AllUserBookingTable";
import ServiceTable from "../../features/services/ServiceTable";
import BannerForm from "../../features/profile/BannerForm";

function AdminAccess() {
  const [activeTab, setActiveTab] = useState("Booking Table");
  const tabs = [
    { id: "Booking Table", label: "Bookings" },
    { id: "Service", label: "Services" },
  ];
  const section = {
    "Booking Table": {
      title: "User Bookings",
      component: <AllUserBookingTable />,
    },
    Service: {
      title: "Services",
      component: <ServiceTable />,
    },
  };
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div className="space-y-6">
      <div className="flex justify-between py-4">
        <Tabs tabs={tabs} onActiveTab={handleTabChange} activeTab={activeTab} />
        <BannerForm />
      </div>
      <h2 className="mb-4 text-xl font-semibold">
        {section[activeTab].title || null}
      </h2>
      {section[activeTab].component || null}
    </div>
  );
}

export default AdminAccess;
