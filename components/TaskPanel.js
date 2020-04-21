import { useEffect, useState } from 'react';
import { getTaskColor } from './../theme/colors';

const TaskPanel = props => {

    const getSelectedTask = taskId => {
        const userTasks = props.userTasks;
        let selectedTask = null;
        userTasks.forEach(task => {
            if (task.id == taskId) {
                selectedTask = task;
            }
        })
        return selectedTask;
    }
    const switchSelectedTask = newTaskId => {
        let selectedTask = getSelectedTask(newTaskId);
        // console.log(selectedTask);
        setTimeout(() => {
            console.log(selectedTask)
        }, 1000)
        props.setSelectedTask(selectedTask);
    };

    return (
        <section className="task-panel">
            <h2>What are you working on?</h2>
            <section className="tasks-container">
                {props.userTasks ? 
                    props.userTasks.map((task, index) => {
                        return (
                            <span 
                                className="task" 
                                key={index}
                                taskId={task.id}
                                onClick={() => {switchSelectedTask(task.id)}}
                                style={{
                                    background: getTaskColor(task.color)
                                }}>
                                {task.name}
                            </span>
                        )
                    }) : <span>No tasks added yet.</span>
                }
            </section>
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
                    transition: .1s ease-in-out opacity;
                }
                .tasks-container:hover .task {
                    opacity: .5;
                }
                .task.task.task:hover {
                    opacity: 1;
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