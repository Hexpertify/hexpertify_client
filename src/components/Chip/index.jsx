/* eslint-disable react/prop-types */
const bookingStatus = {
  pending: {
    style: "text-blue-700 bg-blue-200 border-blue-400 shadow-blue-300",
    label: "Pending",
  },
  completed: {
    style: "text-green-700 bg-green-200 border-green-400 shadow-green-300",
    label: "Completed",
  },
  onprogress: {
    style: "text-orange-700 bg-orange-200 border-orange-400 shadow-orange-300",
    label: "On Progress",
  },
  cancelled: {
    style: "text-red-700 bg-red-200 border-red-400 shadow-red-300",
    label: "Cancelled",
  },
};
const Chip = ({ status }) => {
  const { style, label } = bookingStatus[status] || {};

  if (!style || !label) {
    return null; // Handle unknown status gracefully
  }

  return (
    <span
      className={`inline-flex transform items-center rounded-full border border-opacity-50 px-4 py-2 text-sm font-medium transition-transform hover:scale-105 ${style}`}
    >
      {label}
    </span>
  );
};

export default Chip;
