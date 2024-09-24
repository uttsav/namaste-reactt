import React, { useState } from "react";

function DateComponent() {
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const formatDate = (value) => {
    // Remove all non-digit characters
    value = value.replace(/\D/g, "");

    // Add slashes at the appropriate positions
    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }
    if (value.length > 5) {
      value = value.slice(0, 5) + "/" + value.slice(5);
    }

    return value;
  };

  const handleChange = (e) => {
    const formattedDate = formatDate(e.target.value);
    setDate(formattedDate);
  };

  const validateDate = (date) => {
    // Regular expression to match MM/DD/YYYY format
    const datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;

    // Check if the input matches the date pattern
    if (!datePattern.test(date)) {
      return false;
    }

    // Parse the date parts to integers
    const parts = date.split("/");
    const month = parseInt(parts[0], 10);
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    // Check if the date is valid
    const dateObj = new Date(year, month - 1, day);
    return (
      dateObj.getFullYear() === year &&
      dateObj.getMonth() === month - 1 &&
      dateObj.getDate() === day
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateDate(date)) {
      setMessage("Valid date!");
    } else {
      setMessage("Invalid date. Please enter a date in MM/DD/YYYY format.");
    }
  };

  return (
    <div className="App">
      <label htmlFor="dateInput">Enter Date (MM/DD/YYYY):</label>
      <input
        type="text"
        id="dateInput"
        value={date}
        onChange={handleChange}
        onBlur={handleSubmit}
        maxLength="10"
        placeholder="MM/DD/YYYY"
      />
      <p>{message}</p>
    </div>
  );
}

export default DateComponent;
