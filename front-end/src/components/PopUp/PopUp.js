import { toast } from 'react-toastify';
import './PopUp.css';
const PopUp = () => {
  return (
    <div className={PopUp.in === false ? 'pop-up' : 'pop-up pop-up-show'}>
      <h4 className='pop-up__title'>Are you sure to edit ?</h4>
      <input
        maxLength={50}
        type='text'
        className='pop-up__input'
      />
      <textarea
        maxLength={75}
        className='pop-up__content'
        placeholder='edit content ...'
      ></textarea>
      <div className='pop-up__buttons'>
        <button
          className='pop-up__button ok'
        >
          confirm
        </button>
        <button
          className='pop-up__button no'
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
export default PopUp;