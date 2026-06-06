import React from "react";

const Note = ({ elem, idx, deleteNote }) => {
  return (
    <div
      className="relative flex flex-col justify-between h-52 w-40 bg-amber-200 rounded-xl text-black pt-7 pb-4 px-4 overflow-hidden"
    >
      <div className="absolute top-1 left-1/2 -translate-x-1/2 flex flex-row gap-2">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="w-2 h-2 bg-black rounded-full mt-1" />
        ))}
      </div>

      <div className="flex-1 overflow-hidden">
        <h3 className="leading-tight text-lg font-bold">{elem.title}</h3>
        <p className="mt-2 max-h-24 overflow-y-auto leading-tight text-xs font-semibold text-gray-600 pr-1 scrollbar-none">
          {elem.details}
        </p>
      </div>

      <button
        onClick={() => deleteNote(idx)}
        className="mt-auto w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white"
      >
        Delete
      </button>
    </div>
  );
};

export default Note;
