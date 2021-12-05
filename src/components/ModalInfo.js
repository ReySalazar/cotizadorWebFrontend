import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import modalInfo from '../assets/img/modalInfo.png'

const ModalInfo = () => {
    return(
        
            <div>
                <img src={modalInfo}/>
            </div>
        );
    
}

export default ModalInfo;