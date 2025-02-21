/* eslint-disable react/prop-types */

function Input({
  type = "text",
  placeholder = "",
  value = "",
  handleChange = () => {},
  handleBlur = () => {},
  error,
  name,
  disabled,
  label,
}) {
  return (
    <div className="relative mb-6">
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-semibold capitalize text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        disabled={disabled}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`block w-full rounded-md border px-4 py-3 placeholder-gray-500 shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 
          ${error
            ? "border-red-500 text-red-900 placeholder-red-400 focus:ring-red-600"
            : "border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-blue-600"}
          dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:ring-blue-400
          disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-800 disabled:placeholder-gray-500 disabled:opacity-70 disabled:shadow-none disabled:focus:ring-blue-600`}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1 text-sm font-medium text-red-500 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;
