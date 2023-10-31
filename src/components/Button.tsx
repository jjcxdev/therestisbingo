import React from "react";

export default function Button() {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <button
      onClick={reloadPage}
      className="4xl:text-7xl 4xl:px-20 w-fit rounded-lg border border-neutral-100 bg-neutral-100/10 px-6 py-2 text-neutral-100  transition duration-300 hover:bg-neutral-100/30 sm:px-12 sm:text-3xl lg:px-10 lg:text-2xl"
    >
      Reset
    </button>
  );
}
