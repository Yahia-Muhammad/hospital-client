import React, { useState } from 'react';

const DaySelector = ({ daysOfWeek, attend, setAttend }) => {
    const [selectedDate, setSelectedDate] = useState("");

    const getDateObject = (dateString) => {
        const date = new Date(dateString);
        const month = date.toLocaleDateString('en-US', { month: 'short' });
        const day = date.getDate();
        const year = date.getFullYear();
        return { month, day, year };
    };

    const getDatesOfMonthEnd = (dayName) => {
        const today = new Date();
        const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
        const dates = [];

        // تحديد التواريخ للشهر الحالي
        for (let i = today.getDate(); i <= lastDayOfMonth; i++) {
            const currentDate = new Date(today.getFullYear(), today.getMonth(), i);
            if (currentDate.toLocaleDateString('en-US', { weekday: 'long' }) === dayName) {
                const formattedDate = getDateObject(currentDate);
                dates.push({ date: formattedDate });
            }
        }

        // تحديد التواريخ للشهر القادم
        const nextMonth = (today.getMonth() + 1) % 12;
        const nextYear = today.getFullYear() + (nextMonth === 0 ? 1 : 0);
        const firstDayOfNextMonth = new Date(nextYear, nextMonth, 1);

        for (let i = 1; i <= 31; i++) { // قد تصل الأيام إلى 31 في بعض الحالات
            const currentDate = new Date(nextYear, nextMonth, i);
            if (currentDate.getMonth() !== nextMonth) {
                break; // توقف عندما نصل إلى نهاية الشهر القادم
            }
            if (currentDate.toLocaleDateString('en-US', { weekday: 'long' }) === dayName) {
                const formattedDate = getDateObject(currentDate);
                dates.push({ date: formattedDate });
            }
        }

        return dates;
    };

    const handleDayChange = (e) => {
        setAttend(e.target.value);
        setSelectedDate(e.target.value);
    };

    // Collect and sort all dates
    let allDates = [];
    daysOfWeek?.forEach(day => {
        const dates = getDatesOfMonthEnd(day.day);
        allDates = allDates.concat(dates.map(date => ({ ...date, hour: { start: day.hour.start, end: day.hour.end }, day: day.day })));
    });
    const sortedDates = allDates.sort((a, b) => new Date(`${a.date.month} ${a.date.day}`) - new Date(`${b.date.month} ${b.date.day}`));

    return (
        <select value={selectedDate} onChange={handleDayChange}>
            <option value="">Attend</option>
            {sortedDates.map((dateInfo, index) => (
                <option key={index} value={JSON.stringify(dateInfo)}>
                    {`${dateInfo.day !== sortedDates[index - 1]?.day ? dateInfo.day + ' - ' : ''}${dateInfo.date.month} ${dateInfo.date.day} - ${dateInfo.hour.start} To ${dateInfo.hour.end}`}
                </option>
            ))}
        </select>
    );
};

export default DaySelector;
