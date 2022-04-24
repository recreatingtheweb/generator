import React from "react";
import  ReactDOM  from "react-dom";

const url = 'https://picsum.photos/v2/list';


function ReloadPage() {
    window.location.reload(true);
}

async function  getJSON() {
    const response = await fetch(url);
    const data = await response.json();
    // const obj = JSON.parse(data);
    console.log(data)
    console.log("Hello");
    
    
} 

function Button() {
    return <div className="button-position">
    <h1 > Click the button to generate a random background.</h1>

    <div class="d-grid gap-2 col-6 mx-auto">
        <button onClick={getJSON}   class="btn btn-secondary btn-outline-light" type="button">Try Me!</button>
    </div>

    </div>
}

 export default Button;