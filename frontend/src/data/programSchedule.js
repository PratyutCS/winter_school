export const schedule = [
    // Dec 09
    [
//        { time: '09:30 - 13:10', event: 'National Workshop on Cryptology 2025', speaker: '', chair: '', type: 'nwc' },
//        { time: '13:10 - 14:30', event: 'Lunch', speaker: '', chair: '', type: 'lunch' },
        { time: '14:30 - 15:00', event: 'Inauguration', speaker: '', chair: '', type: 'misc' },
        { time: '15:00 - 16:30', event: 'Group Formation and Introduction', speaker: '', chair: '', type: 'misc' },
        { time: '16:30 - 17:00', event: 'High Tea', speaker: '', chair: '', type: 'snacks' },
        { time: '17:00 - 18:00', event: 'Group Discussion', speaker: '', chair: '', type: 'groupd' },
    ],
    // Dec 10
    [
        { time: '09:30 - 10:30', event: 'Multivariate Quadratic-Based Signatures', speaker: 'Dr M Prem Laxman Das', chair: 'Prof Goutam Kumar Paul', type: 'talk' },
//        { time: '10:30 - 11:30', event: 'Differential Meet-In-The-Middle Attack on 14-round ARADI', speaker: 'Dr Shibam Ghosh', chair: 'Prof Goutam Kumar Paul', type: 'talk' },
        { time: '10:30 - 11:30', event: 'Improved Key Recovery Attacks on ARADI', speaker: 'Dr Shibam Ghosh', chair: 'Prof Goutam Kumar Paul', type: 'talk' },
        { time: '11:30 - 12:00', event: 'Morning Tea', speaker: '', chair: '', type: 'snacks' },
        { time: '12:00 - 13:00', event: 'Fantastic PSI and where to find them', speaker: 'Dr Satrajit Ghosh', chair: 'Prof Goutam Kumar Paul', type: 'talk' },
        { time: '13:00 - 14:30', event: 'Lunch', speaker: '', chair: '', type: 'lunch' },
        { time: '14:30 - 15:45', event: 'Group Discussion', speaker: '', chair: '', type: 'groupd' },
        { time: '15:45 - 16:00', event: 'Coffee Break', speaker: '', chair: '', type: 'snacks' },
        { time: '16:00 - 17:00', event: 'Group Discussion', speaker: '', chair: '', type: 'groupd' },
        { time: '17:00 - 17:30', event: 'High Tea', speaker: '', chair: '', type: 'snacks' },
        { time: '17:30 - 18:30', event: 'Group Discussion', speaker: '', chair: '', type: 'groupd' },
    ],
    // Dec 11
    [
        { time: '09:30 - 10:30', event: 'Mitigating Randao Manipulation: Can a VDF Be the Missing Link?', speaker: 'Dr Laltu Sardar', chair: 'Dr Subhabrata Samajder', type: 'talk' },
        { time: '10:30 - 11:30', event: 'TBA', speaker: 'Dr Mostafizar Rahman', chair: 'Dr Subhabrata Samajder', type: 'talk' },
        { time: '11:30 - 12:00', event: 'Morning Tea', speaker: '', chair: '', type: 'snacks' },
        { time: '12:00 - 13:30', event: 'Student Presentations', speaker: '', chair: '', type: 'misc' },
        { time: '13:30 - 14:30', event: 'Lunch', speaker: '', chair: '', type: 'lunch' },
        { time: '14:30 - 15:45', event: 'Group Discussion', speaker: '', chair: '', type: 'groupd' },
        { time: '15:45 - 16:00', event: 'Coffee Break', speaker: '', chair: '', type: 'snacks' },
        { time: '16:00 - 17:00', event: 'Group Discussion', speaker: '', chair: '', type: 'groupd' },
        { time: '17:00 - 17:30', event: 'High Tea', speaker: '', chair: '', type: 'snacks' },
        { time: '17:30 - 18:30', event: 'Group Discussion', speaker: '', chair: '', type: 'groupd' },
    ],
    // Dec 12
    [
        { time: '09:30 - 10:30', event: 'TBA', speaker: 'Dr Sabyasachi Karati', chair: 'Dr R Kabaleeshwaran', type: 'talk' },
        { time: '10:30 - 11:30', event: 'Attack on a PUF-based Secure Binary Neural Network', speaker: 'Dr Srinivas Vivek', chair: 'Dr R Kabaleeshwaran', type: 'talk' },
        { time: '11:30 - 12:00', event: 'Morning Tea', speaker: '', chair: '', type: 'snacks' },
        { time: '12:00 - 13:00', event: 'Security in the White-box Setting', speaker: 'Dr Avik Chakraborti', chair: 'Dr R Kabaleeshwaran', type: 'talk' },
        { time: '13:00 - 14:30', event: 'Lunch', speaker: '', chair: '', type: 'lunch' },
        { time: '14:30 - 15:45', event: 'Group Discussion', speaker: '', chair: '', type: 'groupd' },
        { time: '15:45 - 16:00', event: 'Coffee Break', speaker: '', chair: '', type: 'snacks' },
        { time: '16:00 - 17:00', event: 'Group Presentation', speaker: '', chair: '', type: 'groupp' },
        { time: '17:00 - 17:30', event: 'High Tea', speaker: '', chair: '', type: 'snacks' },
        { time: '17:30 - 18:30', event: 'Group Presentation', speaker: '', chair: '', type: 'groupp' },
    ],
];

export const isEventFinished = () => {
    const now = new Date();
    const eventEndDate = new Date('2025-12-12T18:30:00+05:30');
    return now > eventEndDate;
};

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
