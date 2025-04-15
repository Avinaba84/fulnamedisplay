import React, { useState } from "react";

const DisplayName = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  // Only allow letters and spaces
  const isValidName = (name) => /^[a-zA-Z\s]+$/.test(name);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstname.trim() || !lastname.trim()) {
      setFullName("");
      setError("Both first and last name are required.");
      return;
    }

    if (!isValidName(firstname) || !isValidName(lastname)) {
      setFullName("");
      setError("Names can only contain letters and spaces (no numbers or special characters).");
      return;
    }

    setFullName(`${firstname.trim()} ${lastname.trim()}`);
    setError("");
  };

  return (
    <div>
      <h1>Full Display Name</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h5>
            First Name:
            <span>
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </span>
          </h5>
        </div>

        <div>
          <h5>
            Last Name:
            <span>
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </span>
          </h5>
        </div>

        <span>
          <button type="submit">Submit</button>
        </span>
      </form>

      {/* Show error message if any */}
      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          {error}
        </p>
      )}

      {/* Only show full name when valid */}
      {fullName && (
        <div style={{ marginTop: "10px" }}>
          <span>Full Name: {fullName}</span>
        </div>
      )}
    </div>
  );
};

export default DisplayName;
