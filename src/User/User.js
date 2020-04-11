import React, { useState } from "react";
import "./user.css";

function User({ name: initName = "" }) {
  const [name, setName] = useState(initName);

  return (
    <div className="container">
      <div>
        <label htmlFor="name">Name</label>

        <input
          type="text"
          label="name"
          aria-label="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>

      <div>
        <h1>Greetings {name}!</h1>
      </div>
    </div>
  );
}
export default User;
