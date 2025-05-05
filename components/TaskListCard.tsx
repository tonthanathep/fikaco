"use client";

import { AnimatePresence, motion, Reorder } from "motion/react";
import { useEffect, useState } from "react";
import { FaCheck, FaCheckSquare } from "react-icons/fa";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { PiConfettiDuotone } from "react-icons/pi";
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
  const taskLimit = 4;

  useEffect(() => {
    setTaskLength(taskList.length);
    setTaskCompleted(taskList.filter((t) => t.completed).length);
  }, [taskList]);

  const addTask = (task: string) => {
    if (!task.trim()) return;
    setTaskList((prevState) => {
      const newTaskList = [
        ...prevState,
        {
          id: uuid(),
          task,
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ];
      return sortTasks(newTaskList);
    });
    setNewTask(""); // Reset input after adding
  };

  const removeTask = (task: Task) => {
    setTaskList((prevState) => {
      const updatedTaskList = prevState.filter((t) => t.id !== task.id);
      return sortTasks(updatedTaskList);
    });
  };

  const toggleTask = (task: Task) => {
    setTaskList((prevState) => {
      const updatedTaskList = prevState.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      );
      return sortTasks(updatedTaskList);
    });
  };

  const sortTasks = (tasks: Task[]): Task[] => {
    return tasks.sort((a, b) => Number(a.completed) - Number(b.completed));
  };

  return (
    <motion.div
      layout
      style={{
        padding: "0.6rem",
        paddingTop: "0.6rem",
        paddingBottom: "0rem",
      }}
      className='flex flex-col min-h-full min-w-full'
    >
      <motion.div layout id='clockin' className='flex flex-col'>
        <motion.div
          layout='position'
          className='flex flex-row gap-2 items-center justify-between'
        >
          <h1 className='text-lg font-bold font-serif'> Today's task </h1>
          <motion.div
            animate={{
              opacity: taskLength === 0 ? 0 : 1,
              y: taskLength === 0 ? 20 : 0,
              filter: taskLength === 0 ? "blur(6px)" : "blur(0px)",
              color: taskLength === taskCompleted ? "#DDAD4D" : "#000000",
            }}
            className='inline-flex items-center gap-1 text-md font-semibold font-serif text-center'
          >
            <AnimatePresence mode='popLayout'>
              <motion.span
                key={taskCompleted + 0.5}
                initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
                transition={{ duration: 0.4 }}
              >
                {taskCompleted}
              </motion.span>
              <motion.span>/ </motion.span>
              <motion.span
                key={taskLength}
                initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
                transition={{ duration: 0.4 }}
              >
                {taskLength}
              </motion.span>
            </AnimatePresence>{" "}
            <FaCheckSquare />
          </motion.div>
        </motion.div>

        <AnimatePresence mode='popLayout'>
          {taskList.length > 0 ? (
            <Reorder.Group
              axis='y'
              values={taskList}
              onReorder={setTaskList}
              className='grid grid-cols-1 gap-3 mt-4 relative'
            >
              <AnimatePresence mode='popLayout'>
                {taskList.map((task) => (
                  <Reorder.Item
                    key={task.id}
                    value={task}
                    style={{
                      borderRadius: "0.6rem",
                      padding: "1rem",
                      paddingRight: "1.5rem",
                      touchAction: "none",
                      backdropFilter: "blur(10px)",
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
                      borderWidth: "0.05rem",
                      borderColor: "#dddddd",
                    }}
                    exit={{
                      opacity: 0,
                      x: -20,
                      filter: "blur(10px)",
                      transition: { duration: 0.2 },
                    }}
                    transition={{ duration: 0.4 }}
                    layout
                    className='cursor-pointer flex flex-row items-center'
                  >
                    <motion.div className='flex flex-row w-full items-center'>
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

                      <motion.span
                        className='text-md font-medium select-none font-sans'
                        style={{
                          display: "inline-block",
                          position: "relative",
                        }}
                        initial={false}
                        animate={{
                          opacity: task.completed ? 0.5 : 1,
                          textDecoration: task.completed
                            ? "line-through"
                            : "none",
                        }}
                      >
                        {task.task}
                      </motion.span>
                    </motion.div>
                    <motion.div
                      style={{ opacity: 0.2 }}
                      whileHover={{ opacity: 0.8 }}
                      onClick={() => removeTask(task)}
                    >
                      <FaTrash scale={1.5} />
                    </motion.div>
                  </Reorder.Item>
                ))}
              </AnimatePresence>
            </Reorder.Group>
          ) : (
            <motion.div
              style={{
                borderRadius: "0.6rem",
                padding: "4rem",
                touchAction: "none",
                backdropFilter: "blur(10px)",
              }}
              initial={{
                opacity: 0,
                y: 20,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 0.7,
                y: 0,
                filter: "blur(0px)",
                borderWidth: "0.1rem",
                borderColor: "#dddddd",
                borderStyle: "dashed",
              }}
              exit={{
                opacity: 0,
                x: -20,
                filter: "blur(10px)",
                transition: { duration: 0.2 },
              }}
              transition={{ duration: 0.4 }}
              layout
              className=' flex flex-col items-center justify-center mt-4 min-w-full'
            >
              <PiConfettiDuotone className='text-6xl' />
              <motion.h1 className='text-md font-semibold font-serif'>
                Hooray !
              </motion.h1>
              <motion.h1 className='text-sm font-light font-sans'>
                Seems like you have no task yet.
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          layout='position'
          className='block w-full rounded-xl text-left mt-4 text-sm font-semibold items-center justify-between'
          style={{
            backgroundColor: "#ffffff",
            color: "#5b5b5b",

            padding: "1rem",
            paddingLeft: "1.3rem",
          }}
          animate={{
            opacity: taskList.length >= taskLimit ? 0 : 1,
            display: taskList.length >= taskLimit ? "none" : "flex",
          }}
          whileHover={{ backgroundColor: "#fefef7" }}
          whileTap={{ backgroundColor: "#fefef7", scale: 0.98 }}
        >
          <motion.div className='flex flex-row items-center'>
            <FaPencil className='opacity-50' />
            <motion.input
              className='outline-0 ml-5 font-sans'
              placeholder='What do you need to do?'
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
          <motion.div
            animate={{
              display: newTask.length > 0 ? "block" : "none",
              opacity: newTask.length > 0 ? 0.4 : 0,
              filter: newTask.length > 0 ? "blur(0px)" : "blur(2px)",
              transition: { duration: 0.2 },
            }}
            className='text-sm font-normal font-sans'
          >
            Add new task
            <motion.span className='border-1 rounded-md py-1 px-2 ml-2 text-xs font-semibold'>
              Enter
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TaskListCard;
