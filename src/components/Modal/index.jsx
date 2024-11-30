/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  cloneElement,
  createContext,
  createRef,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { useOutSideClick } from "../../hooks/useOutSideClick";
import { HiXMark } from "react-icons/hi2";

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
    <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 dark:bg-gray-900 dark:bg-opacity-80">
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div
          ref={ref}
          className="w-full max-w-md rounded-lg border border-gray-300 bg-white shadow-lg dark:bg-gray-800"
        >
          <div className="relative">
            <button
              onClick={close}
              className="absolute right-2 top-2 p-2 text-gray-600 transition-colors duration-200 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
            >
              <HiXMark className="h-6 w-6" />
            </button>
            <div className="hide-scrollbar max-h-[500px] overflow-y-auto rounded-lg">
              {children}
              {typeof children === "function" &&
                children({ onCloseModal: close })}
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
        return "bg-primary-active text-white rounded-full px-4 py-2 shadow-md ";
      case "cancel":
        return "bg-red-600 dark:bg-red-700 text-white rounded-lg px-4 py-2 transition-colors duration-200 hover:bg-red-700 dark:hover:bg-red-800";
      default:
        return "bg-primary-active text-white rounded-lg px-4 py-2 shadow-md ";
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
