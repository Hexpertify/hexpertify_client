/* eslint-disable react/prop-types */
const SwitchButton = ({ isOn, onToggle, label, disabled }) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex w-fit cursor-pointer items-center ${isOn ? "bg-green-500" : "bg-gray-300"} dark:${isOn ? "bg-green-600" : "bg-gray-700"} rounded-full p-0.5 transition-colors duration-300 ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
        onClick={() => !disabled && onToggle(!isOn)}
        disabled={disabled}
      >
        <div
          className={`h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 dark:bg-gray-800 ${isOn ? "translate-x-4" : "translate-x-0"}`}
        />
        <span className="ml-1 w-3 text-sm text-gray-700 dark:text-gray-300" />
      </div>
      <span className="dark:text-primary-text-dark font-semibold capitalize text-primary-text">
        {label}
      </span>
    </div>
  );
};

export default SwitchButton;
