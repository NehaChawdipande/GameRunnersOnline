import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Library.scss';
import WindowCard from '../components/WindowCard';

const Library = () => {
    const [gamesList, setGamesList] = useState([
        {
            "id": 345,
            "title": "Forge of Empires",
            "thumbnail": "https://www.freetogame.com/g/345/thumbnail.jpg",
            "short_description": "A free to play 2D browser-based online strategy game, become the leader and raise your city.",
            "game_url": "https://www.freetogame.com/open/forge-of-empires",
            "genre": "Strategy",
            "platform": "Web Browser",
            "publisher": "InnoGames",
            "developer": "InnoGames",
            "release_date": "2012-04-17",
            "freetogame_profile_url": "https://www.freetogame.com/forge-of-empires"
        },
        {
            "id": 340,
            "title": "Game Of Thrones Winter Is Coming",
            "thumbnail": "https://www.freetogame.com/g/340/thumbnail.jpg",
            "short_description": "A free-to-play browser-based RTS based on the George R.R. Martin novels and popular HBO series.",
            "game_url": "https://www.freetogame.com/open/game-of-thrones-winter-is-coming",
            "genre": "Strategy",
            "platform": "Web Browser",
            "publisher": "GTArcade",
            "developer": "YOOZOO Games ",
            "release_date": "2019-11-14",
            "freetogame_profile_url": "https://www.freetogame.com/game-of-thrones-winter-is-coming"
        },
        {
            "id": 347,
            "title": "Elvenar",
            "thumbnail": "https://www.freetogame.com/g/347/thumbnail.jpg",
            "short_description": "A browser based city-building strategy MMO set in the fantasy world of Elvenar.",
            "game_url": "https://www.freetogame.com/open/elvenar",
            "genre": "Strategy",
            "platform": "Web Browser",
            "publisher": "InnoGames",
            "developer": "InnoGames",
            "release_date": "2015-04-08",
            "freetogame_profile_url": "https://www.freetogame.com/elvenar"
        },
        {
            "id": 380,
            "title": "Dark Orbit Reloaded",
            "thumbnail": "https://www.freetogame.com/g/380/thumbnail.jpg",
            "short_description": "A browser-based 3D space-combat MMO with a massive playerbase!",
            "game_url": "https://www.freetogame.com/open/darkorbit",
            "genre": "Shooter",
            "platform": "Web Browser",
            "publisher": "Bigpoint",
            "developer": "Bigpoint",
            "release_date": "2006-12-11",
            "freetogame_profile_url": "https://www.freetogame.com/darkorbit"
        },
        {
            "id": 350,
            "title": "Goodgame Empire",
            "thumbnail": "https://www.freetogame.com/g/350/thumbnail.jpg",
            "short_description": "A free to play medieval strategy browser game. Build you own castle and create a powerful army! ",
            "game_url": "https://www.freetogame.com/open/goodgame-empire",
            "genre": "Strategy",
            "platform": "Web Browser",
            "publisher": "Goodgame Studios",
            "developer": "Goodgame Studios",
            "release_date": "2011-08-14",
            "freetogame_profile_url": "https://www.freetogame.com/goodgame-empire"
        },
        {
            "id": 573,
            "title": "Titan Revenge",
            "thumbnail": "https://www.freetogame.com/g/573/thumbnail.jpg",
            "short_description": "A 3D Norse-themed browser MMORPG developed and published by Game Hollywood Games",
            "game_url": "https://www.freetogame.com/open/titan-revenge",
            "genre": "MMORPG",
            "platform": "Web Browser",
            "publisher": "Game Hollywood Games",
            "developer": "Game Hollywood Games",
            "release_date": "2023-12-20",
            "freetogame_profile_url": "https://www.freetogame.com/titan-revenge"
        },
        {
            "id": 522,
            "title": "Flyff Universe",
            "thumbnail": "https://www.freetogame.com/g/522/thumbnail.jpg",
            "short_description": "Get the full Flyff experience on any platform with the free-to-play browser-based MMORPG Flyff Universe.",
            "game_url": "https://www.freetogame.com/open/flyff-universe",
            "genre": "MMORPG",
            "platform": "Web Browser",
            "publisher": "Gala Lab",
            "developer": "Gala Lab",
            "release_date": "2022-06-14",
            "freetogame_profile_url": "https://www.freetogame.com/flyff-universe"
        },
        {
            "id": 455,
            "title": "Eternal Fury",
            "thumbnail": "https://www.freetogame.com/g/455/thumbnail.jpg",
            "short_description": "A free-to-play ARPG from R2 Games!",
            "game_url": "https://www.freetogame.com/open/eternal-fury",
            "genre": "MMORPG",
            "platform": "Web Browser",
            "publisher": "R2 Games",
            "developer": "R2 Games",
            "release_date": "2019-05-21",
            "freetogame_profile_url": "https://www.freetogame.com/eternal-fury"
        },
        {
            "id": 458,
            "title": "League of Angels - Heaven's Fury",
            "thumbnail": "https://www.freetogame.com/g/458/thumbnail.jpg",
            "short_description": "A free-to-play, browser-based fantasy online action RPG based loosely on Western mythology!",
            "game_url": "https://www.freetogame.com/open/league-of-angels-heavens-fury",
            "genre": "MMORPG",
            "platform": "Web Browser",
            "publisher": "Gtarcade",
            "developer": "Yoozoo Games",
            "release_date": "2020-01-09",
            "freetogame_profile_url": "https://www.freetogame.com/league-of-angels-heavens-fury"
        }
    ]);

    const redirectToLibrary = () => {
        //navigate to library
        console.log('redirecting..');
    }

    // const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&limit=10';
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'x-rapidapi-key': '',
    //         'x-rapidapi-host': ''
    //     }
    // };

    // useEffect(() => {
    //   const fetchGames = async () => {
    //     const res =  await fetch(url, options).then((response)=>response.json());
    //     setGamesList(res.splice(0,res.length-10));
    //   };
    //   fetchGames();
    // }, []);
    // console.log(gamesList);
    return (<div className='library'>
        <div className='container'>
            <div>
                <div className='nav'>
                    <h1>GAME RUNNERS ONLINE</h1>
                    <Link className='viewAll' to="/">
                        <h5>Home</h5>
                    </Link>

                </div>
                <h3>Join the pixel party</h3>
                <div className='scrollView'>

                
                        {gamesList.map(function(item, index){
                    return <WindowCard key={ index } props={item}>{item.title}</WindowCard>;
                  })}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Library;