/* eslint-disable react/prop-types */
const SwitchButton = ({ isOn, onToggle, label, disabled }) => {
  return (
    <div className="flex gap-2">
      <div
        className={`flex w-fit cursor-pointer items-center ${isOn ? "bg-green-500" : "bg-gray-300"} rounded-full p-0.5 transition-colors duration-300`}
        onClick={() => onToggle(!isOn)}
        disabled={disabled}
      >
        <div
          className={`h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 ${isOn ? "translate-x-4" : "translate-x-0"}`}
        />
        <span className="ml-1 w-3 text-sm text-gray-700" />
      </div>
      <spam className="font-semibold capitalize text-primary-text">
        {label}
      </spam>
    </div>
  );
};

export default SwitchButton;
