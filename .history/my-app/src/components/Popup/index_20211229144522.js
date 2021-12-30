import React, { useState } from 'react'



export default function Popup() {
    return (
    <div class="popup" onClick="myFunction()">
        Click me!
        <span className="popuptext" id="myPopup">Popup text...
        </span>
    </div>
    )
}
