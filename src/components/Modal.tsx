import React from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
  if (!show) return null;
  return (
    <div className="fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center">
      <div
        className="absolute left-0 top-0 h-full w-full bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative z-30 w-3/4 max-w-sm rounded bg-white p-8 shadow-lg">
        <h2 className="mb-4 text-2xl">Congratulations!</h2>
        <p>You've won. Now, go tell Alan and see if he gives a fuck.</p>
        <div className="">
          <button
            onClick={onClose}
            className="mt-4 rounded-lg bg-green-700 px-6 py-1 text-neutral-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
