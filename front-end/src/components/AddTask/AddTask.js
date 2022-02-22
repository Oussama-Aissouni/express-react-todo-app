import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "./AddTask.css";
import { useState } from "react";

const AddTask = () => {
  const [topic, setTopic] = useState("");
  const [details, setDetails] = useState("");

  const err = () => {
    toast.error("please fill the form");
  }
  const createTask = () => {
    if (topic.length === 0 || details.length === 0)
      err();
    else {
      axios
        .post("http://localhost:5000/todos/", {
          topic: String(topic),
          details: String(details),
          isCompleted: Boolean(false),
        })
        .then(() => toast.success("Task Created Successfully"))
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  const clearFields = () => 
  {
    setTopic("")
    setDetails("")
  }
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
          <p className="add-task__lether-count">{topic.length}/20</p>
          <input
            maxLength={20}
            className="input add-task__inputs__name"
            type="text"
            placeholder="your task topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div>
          <p className="add-task__lether-count">{details.length}/40</p>
          <textarea
            maxLength={40}
            className="input add-task__inputs__content"
            type="text"
            placeholder="more info about task"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="add-task__inputs__submit"
          onClick={() => { createTask(); clearFields();}}
        >
          Create New Task
        </motion.button>
      </div>
    </div>
  );
};

export default AddTask;
