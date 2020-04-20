import { getBlack, getPallete } from './../theme/colors';
import Moment from 'react-moment';

const DetailsPanel = props => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    const weekdays = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ]

    const today = new Date();

    const turnDaysIntoArray = (month) => {
        const days = [];
        const totalDays = daysInMonth(month, today.getFullYear());
        for (let i = 1; i <= totalDays; i++) {
            days.push(i);
        }
        return days;
    }

    const daysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    }

    const formatDate = date => {
        let month = date.getMonth();
        let day = date.getDate();
        let year = date.getFullYear();
        let weekday = date.getDay();
        return `${weekdays[weekday]} ${day} ${months[month]} ${year}`;
    }

    return (
        <section className="details-panel">
            <h2 className="dropdown-title-selector">Months</h2>
            <section className="months-container">
                {months.map((month, monthIndex) => {
                    return (
                        <section className="month" key={monthIndex}>
                            <h3 className="month-name">{month}</h3>
                            <section className="day-progress-container">
                                {turnDaysIntoArray(monthIndex).map((day) => {
                                    return (
                                        <section 
                                            title={formatDate(new Date(today.getFullYear(), monthIndex, day))}
                                            className="day-indicator empty"></section>
                                    )
                                })}
                            </section>
                        </section>
                    )
                })}
            </section>
            <style jsx>{`
                .details-panel {
                    padding: 20px;
                    background: white;
                    grid-area: details;
                    border-radius: 10px;
                    position: relative;
                }
                .details-panel::before {
                    content: '';
                    position: absolute;
                    width: 100%;
                    background: white;
                    height: 30px;
                    opacity: 1;
                    bottom: 10px;
                    left: 0;
                    background: linear-gradient(rgba(0,0,0,0), white);
                    z-index: 1;
                }
                .details-panel h2 {
                    color: ${getBlack(0.8)};
                }
                .months-container {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    overflow-y: auto;
                    height: 95%;
                    padding-right: 15px;
                    margin-top: 5px;
                }
                .months-container::-webkit-scrollbar {
                    background: white;
                    border: 0;
                    width: 5px;
                }
                .months-container::-webkit-scrollbar-thumb {
                    background: lightgray;
                    border-radius: 10px;
                }
                .months-container .month {
                    width: 47%;
                    margin-bottom: 20px;
                }
                .months-container .month .month-name {
                    font-weight: 500;
                    color: ${getBlack(.5)};
                    padding-bottom: 3px;
                    border-bottom: 1px solid ${getBlack(.1)};
                    margin-bottom: 10px;
                }
                .day-progress-container {
                    display: grid;
                    grid-template-columns: repeat(7, 7fr);
                    grid-template-rows: repeat(5, auto);
                    column-gap: 10px;
                    row-gap: 5px;
                }
                .day-progress-container .day-indicator {
                    background-color: ${getPallete('green')};
                    width: 100%;
                    height: 1.4vw;
                    border-radius: 100px;
                    cursor: pointer;
                    transition: .1s ease-in-out transform;
                }
                .day-progress-container .day-indicator:hover {
                    transform: scale(.9);
                }
            `}</style>
        </section>
    )
}

export default DetailsPanel;