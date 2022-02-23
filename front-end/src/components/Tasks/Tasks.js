import "./Tasks.css";
import { motion, AnimatePresence } from "framer-motion";
import Task from "../Task/Task";
import axios from "axios";
import { useEffect, useState } from "react";
import env from "react-dotenv"

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() =>
    axios
      .get(env.ORIGIN)
      .then((response) => setTasks(response.data.todo))
      .catch((err) => console.log(err))
  );

  const deleteAll = async () => {
    await axios
      .delete(env.ORIGIN) 
      .catch((err) => console.log(err));
  };

  return (
    <div className="tasks">
      <div className="tasks__title">
        <img className="tasks__title__icon" src="./icons/all-tasks" alt="" />
        <h2 className="tasks__title__text">All Tasks</h2>
      </div>
      <div className="tasks__sort">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="clear-all"
          onClick={deleteAll}
        >
          Clear All
        </motion.button>
      </div>
      <div className="tasks__container">
        <AnimatePresence>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Task
                key={task._id}
                id={task._id}
                isCompleted={task.isCompleted}
                topic={task.topic}
                details={task.details}
              />
            ))
          ) : (
            <div>No tasks found</div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default Tasks;
