import { useState } from "react";
import "./App.css";
import "./card.css";
import { p } from "./util/console-log";
import { splice } from "./util/string";
import "bootstrap/dist/css/bootstrap.min.css";
interface ICreditCardInputProps {}
export function CreditCardInput(props: ICreditCardInputProps) {
  const [frontFaceText, setFrontFaceText] = useState("");
  const [ccv, setCcv] = useState("");
  const [shownCcv, setShownCcv] = useState("●●●")
  const [date, setDate] = useState("");
  const [shownDate, setShownDate] = useState("●●/●●●●");
  const [frontFaceShownText, setFrontFaceShownText] = useState(
    "●●●● ●●●● ●●●● ●●●●"
  );
  const [face, setFace] = useState<"front" | "back">("back");
  const turnBack = () => {
    if (face === "back") {
      setFace("front");
    } else {
      setFace("back");
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          {face === "front" ? (
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
                style={{
                  position: "absolute",
                  top: "152px",
                  left: "36px",
                  width: "250px",
                  fontSize: "20px",
                }}
              >
                {frontFaceShownText}
              </p>
            </div>
          ) : (
            <div
              style={{
                position: "relative",
                width: "352px",
                margin: "auto",
                height: "222px",
              }}
            >
              <img className="creditcard" src="back.png" />
              <p
                style={{
                  position: "absolute",
                  top: "82px",
                  left: "136px",
                  width: "250px",
                  fontSize: "20px",
                }}
              >
                {shownCcv}
              </p>
              <p
                style={{
                  position: "absolute",
                  top: "152px",
                  left: "156px",
                  width: "250px",
                  fontSize: "20px",
                }}
              >
                {shownDate}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          <button className="btn btn-primary" onClick={turnBack}>
            {" "}
            Arka Yüzü Çevir{" "}
          </button>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 d-flex justify-content-center">
          <input
            type="number"
            onSelect={() => {
              setFace("front");
            }}
            maxLength={16}
            style={{
              margin: "auto",
              width: "100%",
              //   width: "250px",
            }}
            placeholder="Credit Card Number"
            name="cardinput"
            value={frontFaceText}
            onChange={(event) => {
                const val = event.target.value;
              console.log(event.target.value);
              if (event.target.value.length > 16) {
                event.preventDefault();
                return;
              }
              setFrontFaceShownText(replaceWithAposthrophs(event.target.value));
              setFrontFaceText(event.target.value);
              if(val.length===0){
                setFrontFaceShownText("●●●● ●●●● ●●●● ●●●●")
              }
            }}
          ></input>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 d-flex justify-content-center">
          <input
            type="number"
            maxLength={3}
            style={{
              margin: "auto",
              width: "100%",
              //   width: "250px",
            }}
            placeholder="CCV"
            onSelect={() => {
              setFace("back");
            }}
            name="ccv"
            value={ccv}
            onChange={(event) => {
                const val = event.target.value;
              console.log(event.target.value);
              if (event.target.value.length > 3) {
                event.preventDefault();
                return;
              }
              setCcv(event.target.value);
              setShownCcv(val);
              if(val.length===0){
                  setShownCcv("●●●")
              }

            }}
          ></input>
          <input
            type="text"
            maxLength={7}
            style={{
              margin: "auto",
              width: "100%",
              //   width: "250px",
            }}
            onSelect={() => {
              setFace("back");
            }}
            placeholder="Date"
            name="date"
            value={date}
            onChange={(event) => {
              const val = event.target.value;
              p(val)
              setDate(getDateFormatted(val));
              setShownDate(getDateFormatted(val));
              if(val.length===0){
                  setShownDate('●●/●●●●')
              }
            }}
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          <button className="btn btn-success"> Submit </button>
        </div>
      </div>
    </>
  );
}
function replaceWithAposthrophs(value: string): string {
  let len = value.length;
  let splitted = value.split("");
  for (let i = 4; i < len && i < 12; i++) {
    splitted[i] = "*";
  }
  return splitted.join("");
}

function getDateFormatted(value: string) {
  value = value.replace(/\D+/g, "");
  if (value.length >= 3) {
    return `${value.slice(0, 2)}/${value.slice(2, 6)}`;
  }
  return value;
}

