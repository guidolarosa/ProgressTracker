import { getBlack, getPallete } from './../theme/colors';

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
    ]
    const date = new Date();

    const turnDaysIntoArray = (month) => {
        const days = [];
        const totalDays = daysInMonth(month, date.getFullYear());
        for (let i = 1; i <= totalDays; i++) {
            days.push(i);
        }
        return days;
    }

    const daysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    }

    return (
        <section className="details-panel">
            <h2 className="dropdown-title-selector">Months</h2>
            <section className="months-container">
                {months.map((month, index) => {
                    return (
                        <section className="month" key={index}>
                            <h3 className="month-name">{month}</h3>
                            <section className="day-progress-container">
                                {turnDaysIntoArray(index).map((day, index) => {
                                    return (
                                        <section className="day-indicator empty"></section>
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
                    padding-right: 5px;
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
                    color: ${getBlack(.5)}
                }
                .day-progress-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }
                .day-progress-container .day-indicator {
                    width: calc(100% / 7);
                    height: 2.2vw;
                    background-color: ${getPallete('green')};
                    border-radius: 100px;
                    transform: scale(.7);
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