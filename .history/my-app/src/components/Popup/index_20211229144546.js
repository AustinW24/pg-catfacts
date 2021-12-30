import React, { useState } from 'react'

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

export default function Popup() {
    return (
    <div class="popup" onClick={() => myFunction}">
        Click me!
        <span className="popuptext" id="myPopup">Popup text...
        </span>
    </div>
    )
}
