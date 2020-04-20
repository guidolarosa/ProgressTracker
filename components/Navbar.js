import { useEffect, useState } from 'react';

const Navbar = (props) => {

    const getUserName = name => {
        if (name) {
            return `${name.fname} ${name.lname}`;
        }
    }

    return (
        <section className="navbar">
            <section className="navbar-container">
                <h1>Progress Tracker</h1>
                <span className="user-name">{getUserName(props.userName)}</span>
            </section>
            <style jsx>{`
                .navbar-container {
                    display: flex;
                    justify-content: space-between;
                    padding: 20px 15vw 10px;
                }
                .navbar-container * {
                    font-size: 1.3rem;
                    font-weight: 500;
                }
                @media screen and (max-width: 720px) {
                    .navbar-container {
                        margin: 0 auto;
                        padding: 20px 30px 10px;
                    }
                }
            `}</style>
        </section>
    )
};

export default Navbar;