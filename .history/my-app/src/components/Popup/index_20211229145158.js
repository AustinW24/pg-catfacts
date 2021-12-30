import React, { useState } from 'react';
import Popup from 'reactjs-popup';

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

export default function PopupModal() {
    return (
        <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Popup content here !!</div>
      </Popup>
    )
}
