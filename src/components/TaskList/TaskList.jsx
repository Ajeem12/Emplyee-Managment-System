import React from "react";
import AcceptedTask from "./AcceptedTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  console.log(data);

  return (
    <div
      id="taskList"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptedTask key={idx} />;
        }
        if (elem.newTask) {
          return <NewTask key={idx} />;
        }
        if (elem.complete) {
          return <CompleteTask key={idx} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} />;
        }
      })}
    </div>
  );
};

export default TaskList;
