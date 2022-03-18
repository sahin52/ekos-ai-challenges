import { useState } from "react";
import "./App.css";
import "./card.css";

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

          <input
            type="number"
            style={{
              position: "absolute",
              top: "152px",
              left: "36px",
              width: "250px",
            }}
            value={frontFaceShownText}
            onChange={(event) => {
              console.log(event.target.value);
              console.log(event.target.selectionStart);
            }}
          ></input>
        </div>
      </div>
    </div>
  );
}
