import { useState } from "react";
import "./App.css";
import "./card.css";
import { p } from "./util/console-log";
import { splice } from "./util/string";

interface ICreditCardInputProps {}
export function CreditCardInput(props: ICreditCardInputProps) {
  const [frontFaceText, setFrontFaceText] = useState("");
  const [frontFaceShownText, setFrontFaceShownText] = useState("423");
  return (
    <div className="row">
      <div className="col-md-6 d-flex justify-content-center">
        <div id="wrapper">
          {frontFaceShownText[0] === "4" && (
            <img
              src="visa.png"
              style={{
                top: "0px",
                left: "20px",
                height: "100px",
                position: "absolute",
                zIndex: "1",
              }}
            />
          )}
          {frontFaceShownText[0] === "5" && (
            <img
              src="mastercard.png"
              style={{
                top: "10px",
                left: "10px",
                height: "100px",
                position: "absolute",
                zIndex: "1",
              }}
            />
          )}
          <img className="creditcard" src="front.png" />

          <p
          style={({position: "absolute",top: "152px",
          left: "36px",
          width: "250px",})}
          >{frontFaceShownText}</p>
        </div>
        <input
            type='number'
            maxLength={16}
            style={{
                margin:'auto',
              position: "absolute",
              top: "152px",
              left: "36px",
              width: "250px",
            }}
            placeholder='Credit Card Number'
            name="cardinput"
            value={frontFaceText}
            onChange={(event) => {
                console.log(event.target.value);
                if(event.target.value.length>16){
                    event.preventDefault();
                    return;
                }
                setFrontFaceShownText(replaceWithAposthrophs(event.target.value))
                setFrontFaceText(event.target.value);
                
                
                
                
            }}

          ></input>
      </div>
    </div>
  );
}
function replaceWithAposthrophs(value: string): string {
    let len = value.length;
    let splitted = value.split('')
    for(let i=4;i<len && i<12;i++){
        splitted[i]='*'
    }
    return splitted.join('');
}

