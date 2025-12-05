export const schedule = [
    // Dec 09
    [
        { time: '09:30 - 14:00', event: 'National Workshop on Cryptology 2025', chair: '', type: 'nwc' },
        { time: '14:00 - 15:00', event: 'Lunch', chair: '', type: 'lunch' },
        { time: '15:00 - 15:30', event: 'Inauguration', chair: '', type: 'misc' },
        { time: '15:30 - 17:00', event: 'Group Formation and Introduction', chair: '', type: 'misc' },
        { time: '17:00 - 17:30', event: 'Snacks & Tea Break', chair: '', type: 'snacks' },
        { time: '17:30 - 18:30', event: 'Group Discussion', chair: '', type: 'groupd' },
    ],
    // Dec 10
    [
        { time: '09:30 - 10:30', event: 'Talk 1', chair: '', type: 'talk' },
        { time: '10:30 - 11:30', event: 'Talk 2', chair: '', type: 'talk' },
        { time: '11:30 - 12:00', event: 'Snacks & Tea Break', chair: '', type: 'snacks' },
        { time: '12:00 - 13:00', event: 'Talk 3', chair: '', type: 'talk' },
        { time: '13:00 - 14:30', event: 'Lunch', chair: '', type: 'lunch' },
        { time: '14:30 - 15:45', event: 'Group Discussion', chair: '', type: 'groupd' },
        { time: '15:45 - 16:00', event: 'Tea Break', chair: '', type: 'snacks' },
        { time: '16:00 - 17:00', event: 'Group Discussion', chair: '', type: 'groupd' },
        { time: '17:00 - 17:30', event: 'Snacks & Tea Break', chair: '', type: 'snacks' },
        { time: '17:30 - 18:30', event: 'Group Discussion', chair: '', type: 'groupd' },
    ],
    // Dec 11
    [
        { time: '09:30 - 10:30', event: 'Talk 4', chair: '', type: 'talk' },
        { time: '10:30 - 11:30', event: 'Talk 5', chair: '', type: 'talk' },
        { time: '11:30 - 12:00', event: 'Snacks & Tea Break', chair: '', type: 'snacks' },
        { time: '12:00 - 13:30', event: 'Student Presentations', chair: '', type: 'misc' },
        { time: '13:30 - 14:30', event: 'Lunch', chair: '', type: 'lunch' },
        { time: '14:30 - 15:45', event: 'Group Discussion', chair: '', type: 'groupd' },
        { time: '15:45 - 16:00', event: 'Tea Break', chair: '', type: 'snacks' },
        { time: '16:00 - 17:00', event: 'Group Discussion', chair: '', type: 'groupd' },
        { time: '17:00 - 17:30', event: 'Snacks & Tea Break', chair: '', type: 'snacks' },
        { time: '17:30 - 18:30', event: 'Group Discussion', chair: '', type: 'groupd' },
    ],
    // Dec 12
    [
        { time: '09:30 - 10:30', event: 'Talk 6', chair: '', type: 'talk' },
        { time: '10:30 - 11:30', event: 'Talk 7', chair: '', type: 'talk' },
        { time: '11:30 - 12:00', event: 'Snacks & Tea Break', chair: '', type: 'snacks' },
        { time: '12:00 - 13:00', event: 'Talk 8', chair: '', type: 'talk' },
        { time: '13:00 - 14:30', event: 'Lunch', chair: '', type: 'lunch' },
        { time: '14:30 - 15:45', event: 'Group Discussion', chair: '', type: 'groupd' },
        { time: '15:45 - 16:00', event: 'Tea Break', chair: '', type: 'snacks' },
        { time: '16:00 - 17:00', event: 'Group Presentation', chair: '', type: 'groupp' },
        { time: '17:00 - 17:30', event: 'Snacks & Tea Break', chair: '', type: 'snacks' },
        { time: '17:30 - 18:30', event: 'Group Presentation', chair: '', type: 'groupp' },
    ],
];

export const getCurrentEvent = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth(); // 0-indexed
    const currentDate = now.getDate();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    // Workshop dates: Dec 09 - Dec 12, 2025
    if (currentYear !== 2025 || currentMonth !== 11) return null; // Month is 0-indexed, so 11 is December

    const dayIndex = currentDate - 9;
    if (dayIndex < 0 || dayIndex >= schedule.length) return null;

    const todaysSchedule = schedule[dayIndex];
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    for (const event of todaysSchedule) {
        const [startTime, endTime] = event.time.split(' - ');
        const [startHour, startMinute] = startTime.split(':').map(Number);
        const [endHour, endMinute] = endTime.split(':').map(Number);

        const startTimeInMinutes = startHour * 60 + startMinute;
        const endTimeInMinutes = endHour * 60 + endMinute;

        if (currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes < endTimeInMinutes) {
            return { ...event, day: `Dec ${currentDate}` };
        }
    }

    return null;
};
