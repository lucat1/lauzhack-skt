import React, { useEffect, useState } from 'react';

export default function DataTime(){
  const [selectedDate, setSelectedDate] = useState('');
  const newDateValue = ''; 
  useEffect(() => {
    const currentDate = new Date().toISOString().slice(0, 16);
    setSelectedDate(currentDate);
  }, []);

  const handleDateChange = (value) => {
    setSelectedDate(value);
  };

  return (
    <div className="p-4">
      <input
        type="datetime-local"
        name="appointmentDate"
        value={selectedDate}
        min={newDateValue}
        onChange={(e) => handleDateChange(e.target.value)}
        className="bg-gray-200  px-3 py-2  rounded-xl"
      />
    </div>
  );}