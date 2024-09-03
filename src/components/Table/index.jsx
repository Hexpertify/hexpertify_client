import PropTypes from "prop-types";
import { useState } from "react";

/**
 * A reusable Table component with customizable cell rendering per column.
 * @param {Object} props - The component props.
 * @param {Array} props.columns - An array of objects representing the table columns.
 * @param {Array} props.rows - An array of objects representing the table rows.
 * @returns {JSX.Element} The rendered table component.
 */
export default function Table({ columns, rows }) {
  const [hoveredRow, setHoveredRow] = useState(null);

  if (!columns || !rows) {
    return <p className="text-center text-gray-600">No data available</p>; // Display a message if rows or data are missing
  }

  return (
    <div className="relative flex flex-col overflow-x-auto">
      {/* <div className="sm:-mx-6 lg:-mx-8"> */}
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-200 text-left text-sm font-light">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                {columns.map((column) => (
                  <th
                    scope="col"
                    key={column.id}
                    className="px-6 py-4 font-medium uppercase tracking-wider text-gray-600"
                  >
                    {column.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              {rows.length > 0 ? (
                rows.map((item, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`transition-colors duration-200 ease-in-out hover:bg-gray-100 ${
                      hoveredRow === rowIndex ? "bg-gray-100" : ""
                    }`}
                    onMouseEnter={() => setHoveredRow(rowIndex)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    {columns.map((column) => (
                      <td
                        key={column.id}
                        className="whitespace-nowrap px-6 py-4 text-gray-700"
                      >
                        {column.cellRender
                          ? column.cellRender(item, column, rowIndex)
                          : item[column.key] || "N/A"}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="whitespace-nowrap px-6 py-4 text-center text-gray-500"
                  >
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      cellRender: PropTypes.func,
    }),
  ).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};
