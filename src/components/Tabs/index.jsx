/* eslint-disable react/prop-types */
const Tabs = ({ tabs, onActiveTab, activeTab }) => {
  return (
    <div className="mx-auto my-6 max-w-2xl rounded-lg border p-4 shadow-md">
      <div className="flex border-b">
        {Array.isArray(tabs) &&
          tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex-1 px-4 py-2 text-center transition-colors duration-300 ease-in-out ${tab.id === activeTab ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
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
