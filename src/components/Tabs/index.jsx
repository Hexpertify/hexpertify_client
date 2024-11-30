/* eslint-disable react/prop-types */
const Tabs = ({ tabs, onActiveTab, activeTab }) => {
  return (
    <div className="max-w-2xl rounded-xl border border-gray-300 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
      {Array.isArray(tabs) &&
        tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={`flex-1 px-4 py-2 text-center transition-colors duration-300 ease-in-out ${index === 0 ? "rounded-s-xl" : "rounded-e-xl"} ${
              tab.id === activeTab
                ? "bg-primary-active text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            }`}
            onClick={() => onActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
    </div>
  );
};

export default Tabs;
