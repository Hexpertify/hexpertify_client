/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

const Modal = ({ children, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-30 backdrop-blur-sm transition-opacity duration-300"
      onClick={handleClickOutside}
    >
      <div
        ref={modalRef}
        className="scale-95 transform rounded-lg bg-white p-6 shadow-lg transition-transform duration-300"
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};

const Menu = ({ items, onSelect, selectedLabel = "label" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="rounded-full bg-gray-200 px-3 py-3 text-black shadow-md transition-colors duration-200 ease-in-out hover:bg-gray-300 focus:outline-none"
      >
        <BsThreeDotsVertical className="text-lg" />
      </button>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <ul className="w-48 rounded-lg border border-gray-300 bg-white shadow-lg">
            {items?.length ? (
              items.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    onSelect(item);
                    setIsOpen(false);
                  }}
                  className="cursor-pointer px-5 py-3 transition-colors duration-200 ease-in-out hover:bg-gray-100"
                >
                  {item[selectedLabel]}
                </li>
              ))
            ) : (
              <li
                onClick={() => setIsOpen(false)}
                className="cursor-pointer px-5 py-3 transition-colors duration-200 ease-in-out hover:bg-gray-100"
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
