import React, { useState } from "react";
import Note from "./Components/Note";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const formsubmited = (e) => {
    e.preventDefault();

    // Prevent adding an empty note (both title and details empty)
    if (title.trim() === "" && details.trim() === "") {
      return;
    }

    const copyTask = [...task, { title: title.trim(), details: details.trim() }];
    setTask(copyTask);
    setTitle("");
    setDetails("");
  };
  let deleteNote=(idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1);
    setTask(copyTask)
  }

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col md:flex-row gap-2 overflow-y-auto">
      <div className="w-full md:w-1/2 items-center px-4 py-6 md:px-0 md:py-0">
        <h1 className="text-3xl font-bold font-sans text-center italic text-white mt-4 md:mt-10">
          Notes...
        </h1>

        <form onSubmit={formsubmited} className="flex flex-col gap-2 justify-center mt-6 md:mt-10 items-center">
          <input
            type="text"
            placeholder="Enter the title"
            className="text-white bg-gray-600 p-3 w-full max-w-xl text-xl mt-2 border rounded-xl"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Enter Notes here...."
            className="text-white bg-gray-600 h-40 md:h-50 resize-none p-2 w-full max-w-xl border rounded-xl"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />

          <button
            type="submit"
            disabled={title.trim() === "" && details.trim() === ""}
            className={`bg-white text-xl font-bold font-sans w-full max-w-xl p-2 border-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            Submit
          </button>
        </form>
      </div>

      <div className="w-full md:w-1/2 bg-gray-600 gap-2 p-4 md:p-2 min-h-[45vh] md:min-h-screen overflow-hidden">
        <h1 className="text-3xl font-bold justify-center text-center text-white underline mt-2 md:mt-7">
          Recent Notes
        </h1>
        <div className="flex-1 p-3 md:p-7 flex flex-wrap content-start gap-3 justify-center md:justify-center overflow-y-auto pb-8 scrollbar-none">
          {task.map((elem, idx) => (
            <Note key={idx} elem={elem} idx={idx} deleteNote={deleteNote} />
          ))}
        </div>
      </div>

      <footer className="w-full py-3 text-center text-[11px] text-gray-400 md:fixed md:bottom-2 md:left-0 md:right-0 md:pointer-events-none">
        Created by Mahesh18.ai
      </footer>
    </div>
  );
};

export default App;
