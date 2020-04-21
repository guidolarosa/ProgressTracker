import { useEffect, useState } from 'react';
import { getTaskColor, getPallete } from './../theme/colors';
import TaskPanel from './TaskPanel';
import Countdown from './Countdown';
import Log from './Log';

const TimePanel = props => {
    return (
        <>
            <section className="time-panel">
                <section className="time-title">
                    <h2 className="type-title">Work</h2>
                    { props.selectedTask ?
                        <span className="selected-task">{props.selectedTask.name}</span>
                        :
                        ''
                    }
                </section>
                <Countdown />
                <Log 
                    userTasks={props.userData.user_tasks}
                    selectedTask={props.selectedTask}
                />
            </section>
            <TaskPanel 
                userTasks={props.userData.user_tasks}
                setSelectedTask={props.setSelectedTask}
                />
            <style jsx>{`
                .time-panel {
                    padding: 20px;
                    grid-area: time;
                    background-color: ${getPallete('counter-background')};
                    border-radius: 10px;
                }
                .time-panel .time-title {
                    display: flex;
                    justify-content: space-between;
                }
                .time-panel .type-title {
                    color: white;
                    text-align: center;
                }
                .time-panel .selected-task {
                    display: inline-block;
                    padding: 5px 15px;
                    min-width: 40%;
                    max-width: 60%;
                    text-align: center;
                    border-radius: 100px;
                    pointer-events: none;
                    box-shadow: 0px 2px 1px black;
                    white-space: nowrap;
                    background: 
                        ${props.selectedTask ? 
                            getTaskColor(props.selectedTask.color) :
                            'transparent'};
                }
            `}</style>
        </>
    )
}

export default TimePanel;