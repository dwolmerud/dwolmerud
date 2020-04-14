import React, { useState } from "react";
import "./user.css";

function User({ name: initName = "" }) {
  const [name, setName] = useState(initName);

  return (
    <div className="container">
      <div>
        <label htmlFor="name">Name</label>

        <input
          id="name"
          type="text"
          label="name"
          aria-label="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Fill in a name"
        />
      </div>

      {name && name !== "" && (
        <div>
          <h1>Greetings {name}!</h1>
        </div>
      )}
    </div>
  );
}
export default User;
