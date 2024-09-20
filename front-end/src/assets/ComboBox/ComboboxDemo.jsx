import React, { useState } from "react";
import './ComboboxDemo.css';
import { Check, ChevronsUpDown } from "lucide-react";

export default function Combobox({
  options, // array of options
  value: initialValue, // initial value
  onChange, // onChange handler
  placeholder = "Select an option...", // optional placeholder
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleOptionClick = (optionValue) => {
    setValue(optionValue === value ? "" : optionValue);
    setOpen(false);
    onChange(optionValue); // call the onChange handler
  };

  return (
    <div className="combobox-container">
      <button
        className="combobox-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {value
          ? options.find((option) => option.value === value)?.label
          : placeholder}
        <ChevronsUpDown className="chevron-icon" />
      </button>
      {open && (
        <div className="combobox-content">
          <input
            className="combobox-input"
            placeholder="Search..."
            onChange={(e) => {
              // You can implement search functionality here
            }}
          />
          <ul className="combobox-list">
            {options.map((option) => (
              <li
                key={option.value}
                className={`combobox-item ${value === option.value ? "selected" : ""}`}
                onClick={() => handleOptionClick(option.value)}
              >
                <Check
                  className={`check-icon ${value === option.value ? "visible" : ""}`}
                />
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}