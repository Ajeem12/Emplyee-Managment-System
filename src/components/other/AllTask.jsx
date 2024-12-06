import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 round">
      <div className="bg-red-600 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5 text-lg font-medium">Employee Name</h2>
        <h3 className="w-1/5 text-lg font-medium">New Task</h3>
        <h5 className="w-1/5 text-lg font-medium">Active Task</h5>
        <h5 className="w-1/5 text-lg font-medium">Completed</h5>
        <h5 className="w-1/5 text-lg font-medium">Failed</h5>
      </div>
      <div className="">
        {authData.employees.map(function (elem) {
          return (
            <div className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
              <h2 className="w-1/5">{elem.firstName}</h2>
              <h3 className="w-1/5 font-medium text-blue-500 rounded">
                {elem.taskCount.newTask}
              </h3>
              <h5 className="w-1/5 font-medium text-yellow-400 rounded">
                {elem.taskCount.active}
              </h5>
              <h5 className="w-1/5 font-medium text-green-400 rounded">
                {elem.taskCount.complete}
              </h5>
              <h5 className="w-1/5 text-lg font-medium text-red-400 rounded">
                {elem.taskCount.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
