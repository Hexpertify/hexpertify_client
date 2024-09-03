/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  cloneElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { createRef } from "react";

import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutSideClick } from "../../hooks/useOutSideClick";

export const ModalContext = createContext({
  openName: "",
  close: () => {},
  open: () => {},
});

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = useCallback(() => {
    setOpenName("");
  }, []);

  const open = useCallback((name) => setOpenName(name), []);

  useEffect(() => {
    setModalRef({ open, close });
  }, [open, close]);
  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Close({ children }) {
  const { close } = useContext(ModalContext);
  return cloneElement(children, { onClick: close });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutSideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 bg-opacity-30 backdrop-blur-sm transition-all">
      <div className="fixed inset-0 flex items-center justify-center p-1 sm:p-8">
        <div
          ref={ref}
          className="mx-2 w-full max-w-md rounded-lg border border-gray-300 bg-primary-background p-1 shadow-lg sm:mx-4 sm:p-2"
        >
          <div className="relative">
            <button
              onClick={close}
              className="absolute right-2 top-0 translate-x-2 transform cursor-pointer border-none bg-transparent p-1 transition-all"
            >
              <HiXMark className="h-6 w-6 text-gray-600" />
            </button>
            <div className="hide-scrollbar max-h-[500px] overflow-y-auto">
              {children}
              {children({ onCloseModal: close })}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function Button({ title, onClick, variant, className }) {
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
    <button className={`${buttonStyle()} ${className}`} onClick={onClick}>
      {title}
    </button>
  );
}

Modal.Open = Open;
Modal.Close = Close;
Modal.Button = Button;
Modal.Window = Window;

export default Modal;

const modalRef = createRef();

export const setModalRef = (ref) => {
  modalRef.current = ref;
};

export const openModal = (name) => {
  if (modalRef.current) {
    modalRef.current.open(name);
  }
};

export const closeModal = () => {
  if (modalRef.current) {
    modalRef.current.close();
  }
};
