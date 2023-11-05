import React from "react";

export default function Button() {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <button
      onClick={reloadPage}
      className="w-fit rounded-lg border border-neutral-100 bg-neutral-100/30 px-6 py-2 font-mono text-neutral-100 transition duration-300 hover:border-neutral-200  hover:bg-neutral-100/80 hover:text-neutral-600"
    >
      Reset
    </button>
  );
}
