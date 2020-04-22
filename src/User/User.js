import React, { useState } from "react";
import "./user.css";

export default function User({ name: initName = "" }) {
  const [name, setName] = useState(initName);

  return (
    <div className="container">
      <div>
        <label htmlFor="name">Name</label>

        <input
          type="text"
          label="Name"
          aria-label="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Fill in your name"
        />
      </div>

      {name && name !== "" && (
        <h1 data-testid="greeting-message">Greetings {name}!</h1>
      )}
    </div>
  );
}
