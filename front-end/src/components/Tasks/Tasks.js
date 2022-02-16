import './Task.css';
import DropDown from '../DropDown/DropDown'
import {motion, AnimatePresence } from 'framer-motion';
import Task from '../Task/Task';

const Task = () => {

  return (
    <div className='tasks'>
      <div className='tasks__title'>
        <img className='tasks__title__icon' src='./svg/all-task.svg' alt='' />
        <h2 className='tasks__title__text'>All Tasks</h2>
      </div>
      <div className='tasks__sort'>
        <DropDown/>
        <motion.button whileTap={{scale:.9}} className='clear-all' >Clear All</motion.button>
      </div>
      <div className='tasks__container'>
        <AnimatePresence>
          {tasks.length !== 0 ? (
            all === true ? (
              tasks.map((task) => (
                <Task
                  key={task.id}
                  id={task.id}
                  isDone={task.isDone}
                  topic={task.topic}
                  content={task.content}
                />
              ))
            ) : (
              doneTaskList.map((task) => (
                <Task
                  key={task.id}
                  id={task.id}
                  isDone={task.isDone}
                  topic={task.topic}
                  content={task.content}
                />
              ))
            )
          ) : (
            <h4 className='nothing'>You dont have any task to do</h4>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default Task;