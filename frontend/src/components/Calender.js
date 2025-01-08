import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  startOfWeek,
  endOfMonth,
  endOfWeek,
  eachDayOfInterval,
} from "date-fns";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const generateCalendarDays = () => {
    const startDate = startOfWeek(startOfMonth(currentMonth));
    const endDate = endOfWeek(endOfMonth(currentMonth));
    return eachDayOfInterval({ start: startDate, end: endDate });
  };

  const calendarDays = generateCalendarDays();

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-4">
      {/* Header */}
      <header className="flex justify-between items-center mb-4">
        <button
          onClick={prevMonth}
          className="text-xl font-bold text-gray-600 hover:text-blue-500"
        >
          &lt;
        </button>
        <h2 className="text-xl font-semibold text-gray-800">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <button
          onClick={nextMonth}
          className="text-xl font-bold text-gray-600 hover:text-blue-500"
        >
          &gt;
        </button>
      </header>

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 gap-2 text-center font-semibold text-gray-700">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <div key={day} className="text-sm">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2 mt-2">
        {calendarDays.map((day) => (
          <div
            key={day}
            className={`p-2 rounded-md text-center ${
              format(day, "MM") === format(currentMonth, "MM")
                ? "bg-blue-100 text-gray-800"
                : "bg-gray-100 text-gray-400"
            }`}
          >
            {format(day, "d")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
