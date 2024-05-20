import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerComponent.css';

const DatePickerComponent = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (
        <div className="date-picker-container">
            <h2>Select a Date Range</h2>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                dateFormat="yyyy/MM/dd"
                className="date-picker-input"
            />
            <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                dateFormat="yyyy/MM/dd"
                className="date-picker-input"
            />
        </div>
    );
};

export default DatePickerComponent;
