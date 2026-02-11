import React from "react";

const baseClass = "outline-none bg-transparent border border-solid border-blue p-2 rounded hover:border-blue/80 transition-colors";

export const componentMap = {
  Card: ({ title, description, children }) => (
    <div className="shadow-lg p-4 max-w-[700px] mx-auto bg-ghostWhite opacity-95 rounded-lg border border-blue/20">
      {title && <h3 className="text-lg font-bold text-blue mb-2">{title}</h3>}
      {description && <p className="text-sm opacity-80 mb-4">{description}</p>}
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  ),
  Input: ({ label, placeholder, type = "text" }) => (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium opacity-80">{label}</label>}
      <input type={type} placeholder={placeholder} className={baseClass} />
    </div>
  ),
  Button: ({ label }) => (
    <button
      type="button"
      className="py-2 px-4 border-[2px] border-solid border-blue text-sm rounded-[2.2rem] shadow-md hover:scale-105 transition-transform cursor-pointer"
    >
      {label}
    </button>
  ),
  Textarea: ({ label, placeholder, rows = 4 }) => (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium opacity-80">{label}</label>}
      <textarea placeholder={placeholder} rows={rows} className={`${baseClass} resize-none`} />
    </div>
  ),
  Select: ({ label, options = [] }) => (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium opacity-80">{label}</label>}
      <select className={baseClass}>
        <option value="">Select</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  ),
  Checkbox: ({ label }) => (
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" className="w-4 h-4 accent-blue" />
      <span className="text-sm">{label}</span>
    </label>
  ),
  Link: ({ label, href = "#" }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue hover:underline text-sm">
      {label}
    </a>
  ),
  Text: ({ text }) => <p className="text-sm opacity-80">{text}</p>,
  Stack: ({ direction = "column", gap = "normal", children }) => (
    <div
      className="flex"
      style={{
        flexDirection: direction === "row" ? "row" : "column",
        gap: gap === "small" ? "0.5rem" : gap === "large" ? "1.5rem" : "1rem"
      }}
    >
      {children}
    </div>
  )
};
