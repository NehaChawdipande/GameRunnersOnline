import React from 'react';
import './Window.scss';

const WindowCard = (props) => {
    const game = props.props;
    return (<>
        <div className='window'>
            <img src={game.thumbnail} alt="gameImg"></img>
            <div className='details'>
                <h5>{game.title}</h5>
            </div>
        </div>
    </>)
}

export default WindowCard;