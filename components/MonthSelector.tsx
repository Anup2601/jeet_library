'use client';

import { ChevronDown } from 'lucide-react';

interface MonthSelectorProps {
  selectedMonth: string;
  onMonthChange: (month: string) => void;
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export function MonthSelector({ selectedMonth, onMonthChange }: MonthSelectorProps) {
  return (
    <div className="relative inline-block w-full md:w-64">
      <label className="block text-sm font-medium text-gray-400 mb-2">
        Select Month
      </label>
      <div className="relative">
        <select
          value={selectedMonth}
          onChange={(e) => onMonthChange(e.target.value)}
          className="w-full appearance-none bg-gray-900 border-2 border-cyan-400 text-white px-4 py-3 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
        >
          {MONTHS.map((month) => (
            <option key={month} value={month} className="bg-gray-900">
              {month}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400 pointer-events-none" />
      </div>
    </div>
  );
}

