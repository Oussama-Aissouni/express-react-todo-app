import React, { useState } from 'react';
import './PopUp.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const PopUp = ({id, topic, details}) => {
  const [newTopic, setNewTopic] = useState(String(topic));
  const [newDetails, setNewDetails] = useState(String(details));

  const updateTask = () => {
    axios
      .patch(`http://localhost:5000/todos/${id}`, {
        topic: String(newTopic),
        details: String(newDetails),
      })
      .then(() => toast.success("Task Updated Successfully"))
      .catch(function (error) {
        console.log(error);
      });
    };
  return (
    <div>
      <h4 className="pop-up__title">Are you sure to edit ?</h4>
      <form>
        <input
          maxLength={50}
          type="text"
          className="pop-up__input"
          placeholder={"you editing " + topic}
          onChange={(e) => setNewTopic(e.target.value)}
        />
        <textarea
          maxLength={75}
          className="pop-up__content"
          placeholder="edit content ..."
          onChange={(e) => setNewDetails(e.target.value)}
        ></textarea>
        <div className="pop-up__buttons">
          <button type="submit" className="pop-up__button ok" onClick={updateTask}>
            confirm
          </button>
          <button
            type="submit"
            className="pop-up__button no"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default PopUp;