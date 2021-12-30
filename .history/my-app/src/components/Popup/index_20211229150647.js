import React, { useState } from 'react';
import Modal from '../../context/Modal';



export default function PopupModal() {

    const [showModal, setShowModal] = useState()

    return (
       <div>
           <Modal></Modal>
       </div>
    )
}
