import React, { useState } from 'react';
import Popup from 'reactjs-popup';

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

export default function PopupModal() {
    return (
    <div className="popup" onClick={() => myFunction()}>
        Click me!
        <span className="popuptext" id="myPopup">Popup text...
        </span>
    </div>
    )
}
