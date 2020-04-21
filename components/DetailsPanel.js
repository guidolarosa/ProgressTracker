import { getBlack, getPallete } from './../theme/colors';
import Moment from 'react-moment';

const DetailsPanel = props => {
    const { userData } = props;
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

    const isFutureMonth = (year, month, day) => {
        let givenDate = new Date(year, month, day);
        let isFutureMonth = givenDate > today ? true : false;
        return isFutureMonth;
    }

    const isDayEmpty = (year, month, day) => {
        let givenDate = new Date(year, month, day);
        let userTaskHistory = userData.user_history;
        if (userTaskHistory) {
            userTaskHistory.forEach(task => {
                let taskDate = new Date(task.date.year, task.date.month, task.date.day);
                if (taskDate.getTime() == givenDate.getTime()) {
                    console.log(givenDate + ' is not empty')
                    return false;
                } else {
                    console.log('Is empty');
                    return true;
                }
            })
        }
    }

    const FutureDay = () => {
        return (
            <img src='/img/icon-day-indicator-disabled.png'/>
        )
    }

    const DayIndicator = (props) => {
        let completed = props.completed;
        return completed > 75 ?
            <img src='/img/icon-day-indicator-100.png' /> :
            completed == 0 ?
            <img src='/img/icon-day-indicator-empty.png' /> :
            ''
    }

    return (
        <section className="details-panel">
            <h2 className="dropdown-title-selector">Year</h2>
            <section className="months-container">
                {months.map((month, monthIndex) => {
                    return (
                        <section 
                            className={monthIndex > today.getMonth() ?
                                'month following-month' :
                                'month'}
                            key={monthIndex}>
                            <h3 className="month-name">{month}</h3>
                            <section className="day-progress-container">
                                {turnDaysIntoArray(monthIndex).map((day) => {
                                    return (
                                        <section 
                                            title={formatDate(new Date(today.getFullYear(), monthIndex, day))}
                                            className="day-indicator">
                                                {isFutureMonth(today.getFullYear(), monthIndex, day) ?
                                                    <FutureDay /> :
                                                    !isDayEmpty(today.getFullYear(), monthIndex, day) ? 
                                                        <DayIndicator completed={0} /> :
                                                        <DayIndicator completed={100} />
                                                }
                                        </section>
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
                .month {
                    width: 47%;
                    margin-bottom: 20px;
                }
                .month .month-name {
                    font-weight: 500;
                    color: ${getBlack(.5)};
                    padding-bottom: 3px;
                    border-bottom: 1px solid ${getBlack(.1)};
                    margin-bottom: 10px;
                    font-size: .8rem;
                }
                .month.following-month h3 {
                    opacity: .3;
                }
            `}</style>
            <style jsx global>{`
                .day-progress-container {
                    display: grid;
                    grid-template-columns: repeat(7, 7fr);
                    grid-template-rows: repeat(5, auto);
                    column-gap: 3px;
                    row-gap: 5px;
                }
                .day-progress-container .day-indicator img {
                    width: 100%;
                }
            `}
            </style>
        </section>
    )
}

export default DetailsPanel;