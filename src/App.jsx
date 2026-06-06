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
    <div className="bg-gray-950 overflow-y-auto h-screen flex gap-2 wrap">
      <div className="w-1/2 items-center">
        <h1 className="text-3xl font-bold font-sans text-center italic text-white mt-10">
          Notes...
        </h1>

        <form onSubmit={formsubmited} className="flex flex-col gap-2 justify-center mt-10 items-center">
          <input
            type="text"
            placeholder="Enter the title"
            className="text-white bg-gray-600 p-3 w-1/2 text-xl mt-2 border-1 rounded-xl"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Enter Notes here...."
            className="text-white bg-gray-600 h-50 resize-none p-2 w-1/2 border-1 rounded-xl"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />

          <button
            type="submit"
            disabled={title.trim() === "" && details.trim() === ""}
            className={`bg-white text-xl font-bold font-sans w-1/2 p-2 border-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            Submit
          </button>
        </form>
      </div>

      <div className="w-1/2 bg-gray-600 gap-2 p-2 h-screen overflow-hidden">
        <h1 className="text-3xl font-bold justify-center text-center text-white underline mt-7">
          Recent Notes
        </h1>
        <div className="flex-1 p-7 flex flex-wrap content-start gap-2 justify-center overflow-y-auto pb-8 scrollbar-none">
          {task.map((elem, idx) => (
            <Note key={idx} elem={elem} idx={idx} deleteNote={deleteNote} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
