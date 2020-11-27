import React from "react";
import './BaseModal.scss'
import closeIcon from '../../../images/icon-close.svg'

export const BaseModal = ({modalContent, closeModal}) => {

    return (
            <div className='modal-window'>
                <div className="modal-wrapper">
                    <div className="modal-close" onClick={closeModal}>
                        <img src={closeIcon}/>
                    </div>
                    { modalContent() }
                </div>
            </div>
    )
}