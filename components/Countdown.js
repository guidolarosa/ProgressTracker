import useInterval from './../tools/useInterval';
import { getBlack } from './../theme/colors';
import { useState, useEffect } from 'react';

const Countdown = props => {
    
    const [ isTimeUp, setIsTimeUp ] = useState(false);
    const [ isTimerRunning, setIsTimerRunning ] = useState(false);
    const [ timeRemaining, setTimeRemaining ] = useState({
        minutes: 25,
        seconds: 0
    });

    const toggleTimerState = () => {
        setIsTimerRunning(!isTimerRunning);
    }

    const returnNextTime = previousTime => {
        console.log(previousTime)
        let newMinutes, newSeconds;
        newMinutes = previousTime.seconds === 0 ?
            --previousTime.minutes :
            previousTime.minutes;
        newSeconds = previousTime.seconds === 0 ?
            59 :
            --previousTime.seconds;
        if (newMinutes === 0 && newSeconds === 0) {
            setIsTimerRunning(false);
            setIsTimeUp(true);
            return {
                minutes: newMinutes,
                seconds: newSeconds
            }
        }
        return {
            minutes: newMinutes,
            seconds: newSeconds
        }
    }

    useEffect(() => {
        if (isTimeUp) {
            alert('Time up baby!');
        }
    },[ isTimeUp ])
        
    useEffect(() => {
        let timerInterval = null;
        if (isTimerRunning) {
            console.log('Timer running');
            timerInterval = setInterval(() => {
                console.log('Tick...');
                setTimeRemaining(returnNextTime(timeRemaining));
            }, 1000);
        } else {
            console.log('Timer stopped')
        }
        return () => clearInterval(timerInterval);
    },[ isTimerRunning, timeRemaining ])

    const changeMinutes = change => {
        setTimeRemaining({
            minutes: timeRemaining.minutes += change,
            seconds: timeRemaining.seconds
        })
    }

    return (
        <>
            <span 
                className="countdown"
            >
                {timeRemaining.minutes < 10 ?
                    '0' + timeRemaining.minutes :
                    timeRemaining.minutes
                }:{timeRemaining.seconds < 10 ?
                    '0' + timeRemaining.seconds :
                    timeRemaining.seconds
                }
            </span>
            <section className="countdown-controls">
                <span
                    onClick={() => changeMinutes(-5)}>-5</span>
                <span
                    onClick={toggleTimerState}>PL</span>
                <span>PS</span>
                <span
                    onClick={() => changeMinutes(5)}>+5</span>
            </section>
            <style jsx>{`
                .countdown {
                    display: inline-block;
                    width: 100%;
                    text-align: center;
                    font-size: 5rem;
                    font-weight: 500;
                    margin-top: 20px;
                }
                .countdown-controls {
                    height: 50px;
                    width: 100%;
                    border-radius: 100px;
                    background: white;
                    display: flex;
                    justify-content: space-between;
                    padding: 0 20px;
                }
                .countdown-controls span {
                    font-size: 1.5rem;
                    line-height: 50px;
                    font-weight: bold;  
                    color: ${getBlack(.8)};
                    cursor: pointer;
                }
            `}</style>
        </>
    )
}

export default Countdown;