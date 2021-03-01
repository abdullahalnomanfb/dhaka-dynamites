import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Players from '../Players/Players';
import './playerInfo.css';
import PlayerData from '../../PlayersData/Data.json';
const PlayerInfo = () => {

    const [players, setPlayer] = useState([]);

    useEffect(() => {
        setPlayer(PlayerData);


    }, [])

    const [teamPerson, setTeamPerson] = useState([]);

    const handleClick = (playerInfo) => {

        const newPlayerAdded = [...teamPerson, playerInfo]

        setTeamPerson(newPlayerAdded)
    }
    return (
        <>
            <div className="container-info">
                <div className="player-details">

                    {
                        players.map(player => <Players handleClick={handleClick} key={player.name} player={player}></Players>)
                    }

                </div>
                <div className="players-cart">
                    <Cart teamPerson={teamPerson}></Cart>

                </div>
            </div>
        </>
    );
};

export default PlayerInfo;