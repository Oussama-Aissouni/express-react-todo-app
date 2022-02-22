import React from "react";
import "./Task.css";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Modal from 'react-modal';
import Modals from "../Modals/Modal";

const Task = ({ isCompleted, topic, details, id }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const _delete = (_id) => {
    axios
      .delete(`http://localhost:5000/todos/${_id}`)
      .then(() => toast.dark("deleted Successfully"))
      .catch((err) => console.log(err));
  };
  const _done = (_id) => {
    axios.patch(`http://localhost:5000/todos/${_id}`, {
      isCompleted: Boolean(true),
    });
  };
  return (
    <motion.div
      className="task"
      initial={{ x: "-100%", margin: 0 }}
      animate={{ x: 0, marginTop: 25 }}
      exit={{
        x: "-100%",
        height: 0,
        marginTop: 0,
        padding: 0,
        opacity: 0,
        width: 0,
        transition: {
          duration: 0.3,
        },
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 10,
      }}
    >
      <span className={`task-line done-${isCompleted}`}></span>
      <div className="task__status">
        <motion.button
          whileTap={{ scale: 2 }}
          className="ball task__close"
          onClick={() => _delete(id)}
        ></motion.button>
        <motion.button
          whileTap={{ scale: 2 }}
          className="ball task__edit"
          onClick={openModal}
        ></motion.button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="modal"
        >
          <Modals id={id} topic ={topic} details = {details}/>
        </Modal>
        <motion.button
          whileTap={{ scale: 2 }}
          className="ball task__done"
          onClick={() => _done(id)}
        ></motion.button>
      </div>
      <h4 className="task__title">
        {isCompleted === true ? <del>{topic}</del> : topic}
      </h4>
      <p className="task__content">
        {isCompleted === true ? <del>{details}</del> : details}
      </p>
    </motion.div>
  );
};
export default Task;
