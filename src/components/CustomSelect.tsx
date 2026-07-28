import React from 'react';
import { ChevronDown } from 'lucide-react';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export default function CustomSelect({
  value,
  onChange,
  options = [],
  placeholder = '-- Select Option --',
  className = '',
  disabled = false,
}: CustomSelectProps) {
  const safeOptions = Array.isArray(options) ? options : [];

  return (
    <div className={`relative ${className}`}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="w-full appearance-none bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-1.5 pr-8 text-xs text-white outline-none font-bold transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-ellipsis overflow-hidden whitespace-nowrap"
      >
        {placeholder && (
          <option value="" disabled hidden className="bg-neutral-950 text-neutral-500 font-bold">
            {placeholder}
          </option>
        )}
        {safeOptions.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            className="bg-neutral-950 text-white font-bold py-1"
          >
            {opt.label}
          </option>
        ))}
      </select>
      <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
        <ChevronDown className="w-3.5 h-3.5" />
      </div>
    </div>
  );
}

