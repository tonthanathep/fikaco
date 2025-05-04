"use client";

import { AnimatePresence, motion, Reorder } from "motion/react";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
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
  const [taskLength, setTaskLength] = useState(0);
  const [taskCompleted, setTaskCompleted] = useState(0);

  useEffect(() => {
    setTaskLength(taskList.length);
    setTaskCompleted(taskList.filter((t) => t.completed).length);
  }, [taskList]);

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
  };

  const removeTask = (task: Task) => {
    setTaskList((prevState) => prevState.filter((t) => t.id !== task.id));
  };

  const toggleTask = (task: Task) => {
    setTaskList((prevState) =>
      prevState.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <motion.div style={{ padding: "1rem" }}>
      <motion.div layout id='clockin' className='flex flex-col '>
        <motion.div
          layout='position'
          className='flex flex-row gap-2 items-center justify-between'
        >
          <h1 className='text-xl font-bold font-serif'> Today's task </h1>
          <motion.div
            animate={{ opacity: taskLength === 0 ? 0 : 1 }}
            className='inline-flex items-center gap-1 text-md font-medium font-sans'
          >
            <motion.span initial={{ y: 20 }} animate={{ y: 0 }}>
              {taskCompleted}
            </motion.span>
            /
            <motion.span initial={{ y: 20 }} animate={{ y: 0 }}>
              {taskLength}
            </motion.span>{" "}
            completed
          </motion.div>
        </motion.div>
        <motion.div className='flex flex-col gap-2 mb-2 mt-4 relative'>
          <Reorder.Group axis='y' values={taskList} onReorder={setTaskList}>
            <AnimatePresence mode='popLayout'>
              {taskList.map((task) => (
                <Reorder.Item
                  key={task.id}
                  value={task}
                  style={{
                    borderRadius: "0.6rem",
                    padding: "0.5rem",
                    touchAction: "none",
                    marginBottom: "0.6rem",
                    backgroundColor: "#fafafa",
                  }}
                  whileHover={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.08)" }}
                  whileDrag={{
                    scale: 1.05,
                    boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.06)",
                  }}
                  initial={{
                    opacity: 0,
                    y: 20,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    backgroundColor: "#fafafa",
                  }}
                  exit={{
                    opacity: 0,
                    x: -20,
                    filter: "blur(10px)",
                    transition: { duration: 0.2 },
                  }}
                  transition={{ duration: 0.4 }}
                  layout
                  className='flex flex-row gap-2 items-center cursor-pointer'
                >
                  <motion.div className='flex flex-row w-full items-center px-2 py-2'>
                    <motion.button
                      id='checkbox'
                      style={{
                        marginRight: "1rem",
                        backgroundColor: "#ffffff",
                        height: "1.5rem",
                        width: "1.5rem",
                        borderRadius: "0.3rem",
                        border: "1px solid #dddddd",
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

                    <motion.h1
                      className='text-md font-medium select-none font-sans'
                      initial={false}
                    >
                      {task.task}
                    </motion.h1>
                  </motion.div>
                  <motion.div
                    className='cursor-pointer'
                    style={{ opacity: 0.5 }}
                    whileHover={{ opacity: 1 }}
                    onClick={() => removeTask(task)}
                  >
                    <FaTrash scale={1.5} />
                  </motion.div>
                </Reorder.Item>
              ))}
            </AnimatePresence>
          </Reorder.Group>
        </motion.div>
        <motion.input
          layout='position'
          className='block w-full rounded-xl px-3 py-4 text-left text-sm font-semibold text-white'
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
