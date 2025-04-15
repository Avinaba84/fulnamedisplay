import React, { useState } from "react";

const DisplayName = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullName, setFullName] = useState("");

  // Only allow letters and spaces
  const isValidName = (name) => /^[a-zA-Z\s]+$/.test(name);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstname.trim() || !lastname.trim()) {
      setFullName("");
      return;
    }

    if (!isValidName(firstname) || !isValidName(lastname)) {
      setFullName("");
      return;
    }

    setFullName(`${firstname.trim()} ${lastname.trim()}`);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
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
