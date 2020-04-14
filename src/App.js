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
        {/* 
        <button
          type="submit"
          style={{ backgroundColor: "grey", color: "white" }}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Let do magic{" "}
          <span role="img" aria-label="sparkles">
            ✨
          </span>
        </button> */}
      </form>
    </div>
  );
}

export default App;
