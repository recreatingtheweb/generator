import React from "react";
import  ReactDOM  from "react-dom";
import Button from "./Button";
import Navbar from "./Navbar";


const url = 'https://picsum.photos/v2/list';
// async function getJSON() {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
// }




// function Button() {
//     return <div className="button-position">
//     <h1 > Click the button to generate a random background.</h1>

//     <div class="d-grid gap-2 col-6 mx-auto">
//         <button onClick={getJSON}   class="btn btn-secondary btn-outline-light" type="button">Try Me!</button>
//     </div>

//     </div>
// }




// async function  getJSON() {
//     const response = await fetch(this.url);
//     const data = await response.json();
//     const obj = JSON.parse(data);
//     console.log("Hello");
    
    
// } 

//    function Button() {
//     return <div className="button-position">
//     <h1 > Click the button to generate a random background.</h1>

//     <div class="d-grid gap-2 col-6 mx-auto">
//         <button onClick={getJSON}   class="btn btn-secondary btn-outline-light" type="button">Try Me!</button>
//     </div>

//     </div>
// }




class Background extends React.Component{
    constructor(props){
        super(props);
        this.state={ id: "1021", author: "Frances Gunn", img_url: "https://picsum.photos/id/1021/2048/1206"}
    }



    async getJSON(){
        const response = await fetch(url);
        const data = await response.json();
        console.log(data[0].id)
        console.log(data[0].author)
    }

    
    render() {
        return (
            <div>
            <Navbar/>


            <img src={this.state.img_url}></img>
            <div className="button-position">
            <h1 > Click the button to generate a random background.</h1>

            <div class="d-grid gap-2 col-6 mx-auto">
                <button onClick={this.getJSON}    class="btn btn-secondary btn-outline-light" type="button">Try Me!</button>
            </div>

           </div>
              {/* <Button /> */}

            </div>
        );
    }

        

    
}



// function Background() {
//     return <div>
//               {/* <img className="background-img"  src='https://picsum.photos/id/1021/2048/1206'></img> */}
//               {/* <img src="https://picsum.photos/2048/1206?random=1"></img> */}
//               <img src="https://picsum.photos/1350/625?random=1"></img>
//               <Button/>

//     </div>
// }


export default Background;