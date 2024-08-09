import React from "react";
import { IoCloseSharp } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="lg:w-full w-[350px] max-w-md rounded-lg bg-white p-6">
        <div className="mb-4 flex items-center justify-between py-2 border-b border-gray-200">
          <h2 className="text-3xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-red-500 hover:text-red-900">
            <IoCloseSharp className="size-6" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
