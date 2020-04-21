import { useState, useEffect } from 'react';
import { getPallete } from './../theme/colors';
import Navbar from './../components/Navbar';
import TimePanel from './../components/TimePanel';
import DetailsPanel from './../components/DetailsPanel';
import users_list from './../mock_data/users_list.json';
import users_data from './../mock_data/users_data.json';

const Index = () => {

    const [ currentUserData, setCurrentUserData ] = useState({});
    const [ selectedTask, setSelectedTask ] = useState();

    useEffect(() => {
        setCurrentUserData(users_data[users_list[0].user_ID])
    },[])

    useEffect(() => {
        if (currentUserData.user_tasks) {
            // console.log(currentUserData.user_tasks[0]);
            setSelectedTask(currentUserData.user_tasks[0])
        }
    },[currentUserData])

    return (
        <>
            <Navbar userName={currentUserData.name}/>
            <main>
                <TimePanel 
                    userData={currentUserData}
                    selectedTask={selectedTask}
                    setSelectedTask={setSelectedTask}
                    />
                <DetailsPanel userData={currentUserData}/>
                <style jsx global>{`
                    * {
                        font-family: 'Gotham Rounded', sans-serif;
                        color: white;
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                        font-weight: medium;
                    }
                    body {
                        background-color: ${getPallete('main-background')};
                    }
                `}
                </style>
                <style jsx>{`
                    margin-top: 10px;
                    height: 80vh;
                    width: 100%;
                    display: grid;
                    grid-template-rows: 70% 30%;
                    grid-template-columns: 50% 50%;
                    grid-template-areas: 
                        "time details"
                        "tasks details";
                    row-gap: 10px;
                    column-gap: 10px;
                    
                    @media screen and (min-width: 720px) {
                        width: 70vw;
                        margin: 20px auto 0;
                    }

                    @media screen and (max-width: 720px) {
                        padding: 0 30px;
                    }
                `}
                </style>
            </main>
        </>
    );
}

export default Index;