/* eslint-disable react/prop-types */
const Tabs = ({ tabs, onActiveTab, activeTab }) => {
  return (
    <div className="max-w-2xl rounded-xl border shadow-md">
      <div className="flex border-b">
        {Array.isArray(tabs) &&
          tabs.map((tab, index) => (
            <button
              key={tab.id}
              className={`flex-1 px-4 ${index == 0 ? "rounded-s-xl" : "rounded-e-xl"} py-2 text-center transition-colors duration-300 ease-in-out ${tab.id === activeTab ? "bg-primary-active text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
              onClick={() => onActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Tabs;
