import React from "react";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    // console.log("changed");

    console.log(event.target.value);
    // console.log(event.target.placeholder);
    setName(event.target.value);
    // console.log(event.target.type);
  }

  function handleClick() {
    // alert("clicked");
    setHeading(name);
  }

  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
