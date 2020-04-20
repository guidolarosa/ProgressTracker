import { useEffect, useState } from 'react';
import { getTaskColor } from './../theme/colors';

const TaskPanel = props => {
    return (
        <section className="task-panel">
            <h2>What are you working on?</h2>
            {props.userTasks ? 
                props.userTasks.map((task, index) => {
                    return (
                        <span 
                            className="task" 
                            key={index}
                            style={{
                                background: getTaskColor(task.color)
                            }}>
                            {task.name}
                        </span>
                    )
                }) : <span>No tasks added yet.</span>}
            <style jsx>{`
                .task-panel {
                    background-color: white;
                    grid-area: tasks;
                    border-radius: 10px;
                    padding: 20px;
                }
                .task-panel .task {
                    display: inline-block;
                    padding: 5px 10px;
                    border-radius: 100px;
                    background: slateblue;
                    font-size: .8rem;
                    margin-right: 5px;
                    cursor: pointer;
                    margin-bottom: 5px;
                }
                h2 {
                    color: #2D2D2D;
                    font-size: 1rem;
                    margin-bottom: 10px;
                }
            `}</style>
        </section>
    )
}

export default TaskPanel;