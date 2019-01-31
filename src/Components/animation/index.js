import React, { Component } from "react";
import "./style.css";


let content = [
 {
   message: "This is cube",
   cls: "facefront fb",
 },
 {
  message: "Some text will show here",
  cls: "facebottom tb",
},
{
  message: "This is a combination of reactjs and css",
  cls: "faceback fb",
},
{
  message: "You only need to update this array to show messages on cube",
  cls: "facetop tb",
},

];

export default class AnimationComponent extends Component {
  render() {
    return (
      
      <div className="loaderparent">
      <div id="viewStage">
        <div id="cube1" className="cube">
          {
            content.map((message, index)=>{
              return(
              <div key={index} className={message.cls} >{message.message}</div>
              )
            })
          }
        </div>
      </div>
      <div className="loader"></div>
      </div>
    );
  }
}



