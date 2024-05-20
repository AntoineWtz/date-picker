import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerComponent.css';

const DatePickerComponent = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);

        if (start && end) {
            setConfirmationMessage(`Selected date range: ${start.toLocaleDateString()} - ${end.toLocaleDateString()}`);
        } else {
            setConfirmationMessage('');
        }
    };

    return (
        <div className="date-picker-container">
            <div className="date-picker-wrapper">
                <h2>Select a Date Range</h2>
                <div className="date-picker-inputs">
                    <DatePicker
                        selected={startDate}
                        onChange={handleDateChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        inline={false}
                        dateFormat="dd/MM/yyyy"
                        className="date-picker-input"
                    />
                </div>
                {confirmationMessage && <div className="confirmation-message">{confirmationMessage}</div>}
            </div>
        </div>
    );
};

export default DatePickerComponent;
