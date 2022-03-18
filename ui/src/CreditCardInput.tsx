import { useState } from "react";
import "./App.css";
import './card.css'

interface ICreditCardInputProps{

}
export function CreditCardInput(props: ICreditCardInputProps){
    const [frontFaceText,setFrontFaceText] = useState("");
    const [frontFaceShownText,setFrontFaceShownText] = useState("123qwe");
    return <div className="row">
    <div  className="col-md-6 d-flex justify-content-center">
      <div id="wrapper">
        <img className="creditcard" src="front.png" />
        <input
          style={{ position: "absolute", top: "152px", left: "36px" , width:"250px"} }
          value={frontFaceShownText}
          onChange={(event)=>{
              console.log(event.target.value);
              console.log(event.target.selectionStart)
          }}
        ></input>
        </div>
    </div>
  </div>
}