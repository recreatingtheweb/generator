import React from "react";
import  ReactDOM  from "react-dom";
import Button from "./Button";
import Navbar from "./Navbar";

const url = 'https://picsum.photos/v2/list?page=2';

var counter = 1;

var correctlist = [];

class Background extends React.Component{
    constructor(props){
        super(props);
        this.state={ id: "1021", author: "Frances Gunn", img_url: "https://picsum.photos/id/1026/1600/1400"}
        this.getJSON = this.getJSON.bind(this);
    }

    

    async getJSON(){
        const response = await fetch(url);
        const dataID = [1003, 1011, 1015,];
        const data = await response.json();
        
        data.forEach(element => {
            if(element.id != 1027 && element.id != 1028 && element.id != 1031 && element.id != 1047 &&  element.id != 1048 &&  element.id != 1053 &&  element.id != 1055 ){
                // console.log("This is a correct element")
                correctlist.push(element)
            }
            else{
                // console.log("This element has an incorrect id")

            }

            
        });


        console.log(counter)
        // console.log(data)



        if(counter < 23)
        {
            // counter++;
           

            // var imgID = data[counter].id
            var imgID = correctlist[counter].id




            
           
            const newAuthor = correctlist.filter(author =>  author.id !== 1028);

            const unwantedIds = [1028, 1031, 1047, 1048]
            

            // console.log(newAuthor)
            // console.log(data[counter]);
            var newurl = "https://picsum.photos/id/"+imgID+"/1600/1400"
            this.setState({
                author: correctlist[counter].author,
                img_url: newurl
            });
            // console.log(this.state.img_url)
            // console.log(newurl)

            counter++;

        }
        else{
            counter = 0;
            // console.log(data[counter])
            // counter++
            // console.log(data[counter].id)
            // console.log(data[counter].author)

            // var imgID = data[counter].id
            var imgID = correctlist[counter].id


            // var newurl = "https://picsum.photos/id/"+imgID+"/2048/1206"
            var newurl = "https://picsum.photos/id/"+imgID+"/1600/1400"

            this.setState({
                author: correctlist[counter].author,
                img_url: newurl
            });
            // console.log(this.state.img_url)
            counter = 0;
            counter++

        }
        
    }

       
    render() {
        return (
            <div>
            
            {/* <Navbar/> */}

            
            <img  className="" src={this.state.img_url}></img>

            <div  className="button-position ">
            <p className="Author-text">The Author for this image is: {this.state.author}</p>

            <p className="Author-text"> Click the button to generate a random background.</p>

            <div class="d-grid gap-2 col-6 mx-auto">
                <button onClick={this.getJSON.bind(this)}    class="btn btn-secondary btn-outline-light" type="button">Try Me!</button>
            </div>

           </div>
              {/* <Button /> */}

            </div>
        );
    }

}


export default Background;