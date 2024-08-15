"use client";

import MoreItems from "@/components/ui/moreitems";
import NewTask from "@/components/ui/newtask";
import { useState } from "react";

export default function TodoPage() {
  const [tasks, setTasks] = useState<string[]>([
    "Gess how to put single quote in react",
    "Finish TodoPage",
    "Create moreitems component",
    "Finish label component",
  ]);
  const TasksNames = ["Improve NewTask component"];

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-orange-50 dark:bg-slate-950">
      <div className="flex h-full w-full max-w-7xl flex-col gap-20 px-10 pb-10">
        <div className="mx-auto flex w-full flex-col items-center justify-center gap-3 py-10">
          <button
            onClick={function () {
              // tasks
              setTasks(function (prevTasks) {
                // tasks.push("new task") -> NO - modifies tasks
                // return tasks.concat("new task"); // Concat creates a new array
                const nextTask = TasksNames[prevTasks.length];
                if (nextTask) {
                  return prevTasks.concat(nextTask);
                }
                return prevTasks;
              });
            }}
            className="py-3 text-xl font-medium text-orange-500 dark:text-orange-500"
          >
            Add new task
          </button>
          {tasks.map(function (task, i) {
            return (
              <div key={i} className="h-full w-full">
                <NewTask title={`Task ${i}`} message={task} checkbox></NewTask>
              </div>
            );
          })}
        </div>
        {/* <div className="flex flex-col gap-10">
          <span className="text-xl text-orange-500 dark:text-slate-50">
            New things
          </span>
          <div className="flex gap-10">
            <span className="pt-4">Product button:</span>
            <MoreItems></MoreItems>
          </div>
        </div> */}
      </div>
    </div>
  );
}
