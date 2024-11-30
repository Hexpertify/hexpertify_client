/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

const Menu = ({ items, onSelect, selectedLabel = "label" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleSelect = (item) => {
    onSelect(item);
    setIsOpen(false);
  };

  const Modal = ({ children }) => {
    return ReactDOM.createPortal(
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm transition-opacity duration-300 dark:bg-gray-900/50"
        onClick={handleClickOutside}
      >
        <div
          ref={modalRef}
          className="scale-100 transform rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 dark:bg-gray-800"
        >
          {children}
        </div>
      </div>,
      document.body,
    );
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="rounded-full bg-gray-200 p-2 text-gray-900 shadow-md transition-colors duration-200 ease-in-out hover:bg-gray-300 focus:outline-none dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
      >
        <BsThreeDotsVertical className="text-lg" />
      </button>
      {isOpen && (
        <Modal>
          <ul className="w-48 rounded-lg border border-gray-300 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-800">
            {items?.length ? (
              items.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(item)}
                  className="cursor-pointer px-5 py-3 transition-colors duration-200 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  {item[selectedLabel]}
                </li>
              ))
            ) : (
              <li
                onClick={() => setIsOpen(false)}
                className="cursor-pointer px-5 py-3 transition-colors duration-200 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                No data
              </li>
            )}
          </ul>
        </Modal>
      )}
    </div>
  );
};

export default Menu;
