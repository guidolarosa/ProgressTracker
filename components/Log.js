const Log = (props) => {
    return (
        <section className="log">
            <section className="log-title-bar">
                <h2>My Log</h2>
                <section className="date-navigator">
                    <span className="date-navigator-arrow previous-date">&lt;</span>
                    <span className="current-date">Today</span>
                    <span className="date-navigator-arrow next-date">&gt;</span>
                </section>
            </section>
            <style jsx>{`
                .log {
                    margin-top: 20px;
                }
                .log .log-title-bar {
                    border-bottom: 1px solid rgba(255,255,255,.2);
                    padding-bottom: 3px;
                    display: flex;
                    justify-content: space-between;
                }
                .log-title-bar h2 {
                    font-size: .8rem;
                    font-weight: normal;
                }
                .date-navigator span {
                    font-size: .8rem;
                }
                .date-navigator .current-date {
                    margin: 0 5px;
                }
                .date-navigator .date-navigator-arrow {
                    opacity: .6;
                    cursor: pointer;
                }
            `}</style>
        </section>
    )
};

export default Log;