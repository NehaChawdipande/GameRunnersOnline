import React from 'react';
import './Window.scss';

const WindowCard = (props) => {
    const game = props.props;
    return (<>
        <div className='window'>
            <img src={game.thumbnail} alt="gameImg"></img>
        </div>
    </>)
}

export default WindowCard;