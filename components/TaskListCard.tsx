"use client";

import { motion, Reorder, useDragControls } from "motion/react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { v4 as uuid } from "uuid";

type Task = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: string;
};

const TaskListCard = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const controls = useDragControls();

  const addTask = (task: string) => {
    setTaskList((prevState) => [
      ...prevState,
      {
        id: uuid(),
        task,
        completed: false,
        createdAt: new Date().toISOString(),
      },
    ]);
    console.log(taskList);
  };

  const removeTask = (task: Task) => {
    setTaskList((prevState) => prevState.filter((t) => t.id !== task.id));
    console.log(taskList);
  };

  const toggleTask = (task: Task) => {
    setTaskList((prevState) =>
      prevState.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <motion.div
      layout
      style={{
        padding: "1rem",
      }}
    >
      <motion.div id='clockin' className='flex flex-col'>
        <h1 className='text-xl font-bold font-serif'> Today's task </h1>
        <motion.div className='flex flex-col gap-2 mb-4'>
          <Reorder.Group axis='y' values={taskList} onReorder={setTaskList}>
            {taskList.map((task) => (
              <Reorder.Item
                key={task.id}
                value={task}
                drag='y'
                dragControls={controls}
                dragListener={false}
                style={{
                  backgroundColor: "#fcf3cf",
                  borderRadius: "0.6rem",
                  padding: "0.5rem",
                  touchAction: "none",
                }}
                className='flex flex-row gap-2 items-center'
                onPointerDown={(e) => controls.start(e)}
              >
                <motion.div className='flex flex-row w-full items-center px-2 py-2'>
                  <motion.button
                    id='checkbox'
                    style={{
                      marginRight: "0.5rem",
                      backgroundColor: "#ffffff",
                      height: "1.5rem",
                      width: "1.5rem",
                      borderRadius: "0.3rem",
                    }}
                    className='flex items-center justify-center'
                    onClick={() => toggleTask(task)}
                    whileHover={{ borderColor: "#C59B2C" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {task.completed ? (
                      <FaCheck />
                    ) : (
                      <FaCheck style={{ color: "#FFFFFF" }} />
                    )}
                  </motion.button>

                  <h1 className='text-md font-medium'> {task.task} </h1>
                </motion.div>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </motion.div>
        <motion.input
          className='block w-full rounded-xl  px-3 py-4 text-left text-sm font-semibold text-white '
          style={{ backgroundColor: "#DDAD4D" }}
          whileHover={{ backgroundColor: "#C59B2C" }}
          whileTap={{ backgroundColor: "#C59B2C", scale: 0.98 }}
          placeholder='Add a task'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              addTask(newTask);
              setNewTask("");
            }
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default TaskListCard;
