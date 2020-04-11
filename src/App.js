import React, { useState, useEffect } from "react";
import User from "./User/User";
import Weather from "./Weather/Weather";
import "./app.css";

function App() {
  const [name, setName] = useState("Daniel");

  useEffect(() => {
    setName("Daniel");
  }, [name]);

  return (
    <div className="container">
      <User name={name} />

      <Weather />
    </div>
  );
}

export default App;
