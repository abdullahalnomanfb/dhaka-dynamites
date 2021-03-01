import React, { useState } from 'react';
import './Players.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Players = (props) => {
    const { name, img, country, position, salary } = props.player;

    const [isClicked,setIsClicked]=useState(false)

    const clickHandle = props.handleClick;
    return (
        <div className="player" >
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="player-info">
                <h2> {name}</h2>
                <h4>{position}</h4>
                <h5>Country: {country}</h5>
                <h3>Salary: ${salary}</h3>
                <button disabled={isClicked} onClick={() =>{
                 clickHandle(props.player)
                 setIsClicked(true)
                
                }
                } className="btn btn-primary"> <FontAwesomeIcon icon={faUserPlus} />
                {isClicked ?" Already Added to Team":"Add To Team "}
               </button>
            </div>
        </div>

    );
};

export default Players;