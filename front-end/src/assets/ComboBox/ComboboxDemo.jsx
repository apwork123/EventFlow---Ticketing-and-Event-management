import React, { useState } from "react";
import './ComboboxDemo.css';
import { Check, ChevronsUpDown } from "lucide-react";

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

export default function ComboboxDemo() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="combobox-container">
      <button
        className="combobox-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {value
          ? frameworks.find((framework) => framework.value === value)?.label
          : "Select framework..."}
        <ChevronsUpDown className="chevron-icon" />
      </button>
      {open && (
        <div className="combobox-content">
          <input
            className="combobox-input"
            placeholder="Search framework..."
            onChange={(e) => {
              // You can implement search functionality here
            }}
          />
          <ul className="combobox-list">
            {frameworks.map((framework) => (
              <li
                key={framework.value}
                className={`combobox-item ${
                  value === framework.value ? "selected" : ""
                }`}
                onClick={() => {
                  setValue(framework.value === value ? "" : framework.value);
                  setOpen(false);
                }}
              >
                <Check
                  className={`check-icon ${
                    value === framework.value ? "visible" : ""
                  }`}
                />
                {framework.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}