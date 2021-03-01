import React from 'react';
import './Cart.css';

const cart = (props) => {
    const players = props.teamPerson;
    const salary = players.reduce((salary, player) => salary + player.salary, 0)

    return (
        <div className="player-cart">
            <h1>Dhaka Dynamic</h1>
            <h3>Total team member:   ({players.length})</h3>
            <h3 style={{ backgroundColor: 'green', color: 'white', padding: '5px', fontFamily: 'arial' }}>Total Salary:${salary} </h3>

            {
                players.map(player => <h4 className='playersName' key={player.name}> {player.name}- ${player.salary}</h4>)
            }
        </div>
    );
};

export default cart;