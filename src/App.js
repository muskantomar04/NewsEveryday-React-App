import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";
import Alert from "./Components/Alert";
import React, { useState } from "react";
// import {
//   // BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "dark");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "primary");
      document.title = "TextUtils - Light Mode";
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      {/* <Navbar title='TextUtils' aboutText='About TextUtils' /> */}

      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route path="/about" element = {<About />}> */}
              {/* <About /> */}
            {/* </Route> */}
            {/* <Route path="/" element = {<TextForm heading="Enter the text to analyze." mode={mode} showAlert={showAlert} />}> */}
              {/* <TextForm heading="Enter the text to analyze." mode={mode} showAlert={showAlert} /> */}
            {/* </Route> */}
          {/* </Routes> */}

          <TextForm heading="Enter the text to analyze." mode={mode} showAlert={showAlert} />

        </div>
      {/* </Router> */}





      {/*   Ujjwal helped :)   */}
      {/* <Routes>
        <Route path = "/" element = {<Page1/>}></Route>
        <Route path = "/about" element = {<About/>}></Route>
      </Routes> */}






    </>
  );
}

export default App;
