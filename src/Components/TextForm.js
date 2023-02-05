import React, { useState } from "react";

export default function TextForm(props) {
  const handleonChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handleUpClick = () => {
    console.log("Uppercase button was clicked");
    // setText("Set was used");
    let newText = text.toUpperCase();
    setText(newText);

    let color = props.mode === "light" ? "primary" : "dark";
    props.showAlert("Converted to UpperCase", color);
  };

  const handleLowClick = () => {
    console.log("Lowercase button was clicked");
    // setText("Set was used");
    let newText = text.toLowerCase();
    setText(newText);

    let color = props.mode === "light" ? "primary" : "dark";
    props.showAlert("Converted to LowerCase", color);
  };

  const handleTitleCase = () => {
    let str = text;
    str = str.toLowerCase();
    str = str.split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    let newText = str.join(" ");
    setText(newText);

    let color = props.mode === "light" ? "primary" : "dark";
    props.showAlert("Converted to TitleCase", color);
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);

    let color = props.mode === "light" ? "primary" : "dark";
    props.showAlert("Text Cleared", color);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="6"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleTitleCase}>
          Convert to Titlecase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h5>Your Text Summary</h5>
        <p>No. of characters with space: {text.length}</p>
        <p>No. of characters without space: {text.length}</p>
        <p>No. of words: {text.split(" ").length}</p>
        <p>No. of sentences: {text.split(".").length}</p>
        <p>Time required to read this text: {0.008 * text.split(" ").length}</p>
        <br />
        <h5>Preview of the Text</h5>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </>
  );
}
