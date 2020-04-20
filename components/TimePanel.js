import { useEffect, useState } from 'react';
import { getTaskColor } from './../theme/colors';
import TaskPanel from './TaskPanel';
import Countdown from './Countdown';

const TimePanel = props => {
    // console.log(props);
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
            </section>
            <TaskPanel userTasks={props.userData.user_tasks}/>
            <style jsx>{`
                .time-panel {
                    padding: 20px;
                    grid-area: time;
                    background-color: #DA523E;
                    border-radius: 10px;
                }
                .time-panel .time-title {
                    display: flex;
                    justify-content: space-between;
                }
                .time-panel .type-title {
                    color: #2D2D2D;
                    text-align: center;
                }
                .time-panel .selected-task {
                    display: inline-block;
                    padding: 5px 15px;
                    width: 40%;
                    text-align: center;
                    border-radius: 100px;
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