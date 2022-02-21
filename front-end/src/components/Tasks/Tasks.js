import "./Tasks.css";
import { motion, AnimatePresence } from "framer-motion";
import Task from "../Task/Task";
import axios from "axios";
import { useEffect, useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() =>
    axios
      .get("http://localhost:5000/todos/")
      .then((response) => setTasks(response.data.todo))
      .catch((err) => console.log(err))
  );
  return (
    <div className="tasks">
      <div className="tasks__title">
        <img className="tasks__title__icon" src="./svg/all-task.svg" alt="" />
        <h2 className="tasks__title__text">All Tasks</h2>
      </div>
      <div className="tasks__sort">
        <motion.button whileTap={{ scale: 0.9 }} className="clear-all">
          Clear All
        </motion.button>
      </div>
      <div className="tasks__container">
        <AnimatePresence>
          {tasks.length > 0 ? tasks.map((task) => 
            <Task
              key={task._id}
              id={task._id}
              isCompleted={task.isCompleted}
              topic={task.topic}
              details={task.details}
            />
          ): <div>No tasks found</div>}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default Tasks;
