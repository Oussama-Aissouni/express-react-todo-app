import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddTask.css";
const AddTask = () => {
  return (
    <div className="add-task">
      <ToastContainer />
      <div className="add-task__title">
        <img
          className="add-task__title__icon"
          src="./svg/add-task.svg"
          alt=""
        />
        <h2 className="add-task__title__text">Make New Task</h2>
      </div>
      <div className="add-task__inputs">
        <div>
          <p className="add-task__lether-count">0/50</p>
          <input
            maxLength={50}
            className="input add-task__inputs__name"
            type="text"
            placeholder="your task topic"
          />
        </div>
        <div>
          <p className="add-task__lether-count">0/75</p>
          <textarea
            maxLength={75}
            className="input add-task__inputs__content"
            type="text"
            placeholder="more info about task"
          />
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="add-task__inputs__submit"
        >
          Create New Task
        </motion.button>
      </div>
    </div>
  );
};

export default AddTask;
