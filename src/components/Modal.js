import React, { Component } from 'react'


const Modal = (props) => {
    const {
      toggleModal,
      showInfo
    } = props
    
    return (
      <div className="modal">
          <div className="wrapper"> 
            <p>{showInfo}</p>
            <button onClick={toggleModal}>Click to Close</button>
          </div>
      </div>
    )
  }

export default Modal