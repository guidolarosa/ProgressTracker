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
        if (timeRemaining.minutes < 95) {
            setTimeRemaining({
                minutes: timeRemaining.minutes += change,
                seconds: timeRemaining.seconds
            })
        }
    };

    const resetTimer = (resetTime = {minutes: 25, seconds: 0}) => {
        setIsTimerRunning(false);
        setTimeRemaining({
            minutes: resetTime.minutes,
            seconds: resetTime.seconds
        })
    }

    return (
        <>
            <span className={isTimerRunning ?
                    'countdown timer-running' :
                    'countdown'
                }>
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
                    title="Remove 5 minutes"
                    onClick={() => changeMinutes(-5)}>-5</span>
                <span
                    title="Play/resume countdown"
                    className={`control-button ${isTimerRunning ? `disabled` : ``}`}
                    onClick={() => {setIsTimerRunning(true)}}>
                    <img src="/img/icon-play.png"/>
                </span>
                <span
                    title="Reset countdown"
                    className={`control-button`}
                    onClick={() => {resetTimer()}}>
                    <img src="/img/icon-reset.png"/>
                </span>
                <span
                    title="Pause countdown"
                    className={`control-button ${!isTimerRunning ? `disabled` : ``}`}
                    onClick={() => {setIsTimerRunning(false)}}>
                    <img src="/img/icon-pause.png"/>
                </span>
                <span
                    title="Add 5 minutes"
                    onClick={() => changeMinutes(5)}>+5</span>
            </section>
            <style jsx>{`
                @keyframes fade-in-out {
                    0% {opacity: 1}
                    50% {opacity: .7}
                    100% {opacity: 1}
                }
                .countdown {
                    display: inline-block;
                    width: 100%;
                    text-align: center;
                    font-size: 5rem;
                    font-weight: 500;
                    margin-top: 20px;
                    opacity: 1;
                }
                .countdown.timer-running {
                    animation-name: fade-in-out;
                    animation-duration: .5s;
                    animation-timing-function: ease-in-out;
                    animation-fill-mode: forward;
                    animation-iteration-count: infinite;
                }
                .countdown-controls {
                    height: 50px;
                    width: 100%;
                    border-radius: 100px;
                    background: white;
                    display: flex;
                    justify-content: space-between;
                    padding: 0 20px;
                    box-shadow: 0px 2px 5px brown;
                }
                .countdown-controls span {
                    font-size: 1.5rem;
                    line-height: 50px;
                    font-weight: bold;  
                    color: ${getBlack(.4)};
                    cursor: pointer;
                }
                .countdown-controls span img {
                    height: 1.5rem;
                    position: relative;
                    top: 5px;
                }
                .control-button {
                    transition: .2s ease-in-out opacity;
                }
                .control-button.disabled {
                    opacity: .5;
                }
            `}</style>
        </>
    )
}

export default Countdown;