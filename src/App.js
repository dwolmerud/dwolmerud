import React from "react";
import User from "./User/User";
import Weather from "./Weather/Weather";
import "./app.css";

function App() {
  return (
    <div className="container">
      <form>
        <User />

        <Weather />
      </form>
    </div>
  );
}

export default App;
