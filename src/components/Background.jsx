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


var counter = 0;


class Background extends React.Component{
    constructor(props){
        super(props);
        this.state={ id: "1021", author: "Frances Gunn", img_url: "https://picsum.photos/id/1021/1600/1206"}
        this.getJSON = this.getJSON.bind(this);
    }

    

    async getJSON(){
        const response = await fetch(url);
        const data = await response.json();
        console.log(data[0].id)
        console.log(data[0].author)
        console.log(data[0].img_url)


        if(counter < 29)
        {
            counter++;
            // console.log(data)
            console.log(counter)
            console.log(data[counter].id)
            // console.log(data[counter].author)
            var imgID = data[counter].id
            var newurl = "https://picsum.photos/id/"+imgID+"/2048/1206"
            this.setState({
                author: data[counter].author,
                img_url: newurl
            });
            console.log(this.state.img_url)
        }
        else{
            counter = 0;
            console.log(data[counter])
            counter++
            console.log(data[counter].id)
            console.log(data[counter].author)
            var imgID = data[counter].id
            var newurl = "https://picsum.photos/id/"+imgID+"/2048/1206"
            this.setState({
                author: data[counter].author,
                img_url: newurl
            });
            console.log(this.state.img_url)
            counter = 0;

        }
        
    }

    // async getJSON(){
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log(data[0].id)
    //     console.log(data[0].author)

    //     if(counter <= 30)
    //     {
    //         console.log(data[counter])
    //         console.log(counter++)
    //         console.log(data[counter].id)
    //         console.log(data[counter].author)
    //         this.setState({
    //             author: data[counter].author
    //         })

    //     }
        
    // }


    
    render() {
        return (
            <div>
            
            {/* <Navbar/> */}

            
            <img className="background-img" src={this.state.img_url}></img>

            <div className="button-position">
            <p className="Author-text">The Author for this image is: {this.state.author}</p>

            <h1 > Click the button to generate a random background.</h1>

            <div class="d-grid gap-2 col-6 mx-auto">
                <button onClick={this.getJSON.bind(this)}    class="btn btn-secondary btn-outline-light" type="button">Try Me!</button>
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