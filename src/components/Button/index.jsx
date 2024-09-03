/* eslint-disable react/prop-types */
export const Button = ({
  handleClick,
  title,
  variant,
  type,
  className,
  disabled,
}) => {
  const buttonStyle = () => {
    switch (variant) {
      case "primary":
        return "bg-primary-active text-white rounded-full px-4 py-2 shadow-lg";
      case "cancel":
        return "rounded-lg bg-red-600 px-4 py-2 text-white transition-colors duration-200 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500";

      default:
        return "bg-primary-active text-white rounded-lg px-4 py-2 shadow-lg";
    }
  };

  return (
    <button
      className={`${buttonStyle()} ${className} focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none`}
      onClick={handleClick}
      disabled={disabled}
      type={type ?? "button"}
    >
      {title}
    </button>
  );
};
