import React from 'react';
import "./ModalLog.css";


function ModalLog({ setOpenModal }) {
  return (
    <>
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              demo content
            </p>
            <button className="close-modal" onClick={() => {
                setOpenModal(false);
                }}>
              CLOSE
            </button>
          </div>
        </div>
        {/* <div className='modalContainer'>
            <div className='overlay'></div>
        <form>
            <div>
                <label>Name:</label>
                <input type='text' value="name"/>
            </div>
            <div>
                <label>Password:</label>
                <input type='text' value="password"/>
            </div>
        </form>
        <div className="footer">
            <button
            onClick={() => {
                setOpenModal(false);
                }}
                id="cancelBtn"
                >
            Cancel
            </button>
        <button>Continue</button>
        </div>
        </div> */}
    </>
  )
}

export default ModalLog;