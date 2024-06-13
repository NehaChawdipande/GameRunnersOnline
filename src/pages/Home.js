import React, {useState, useEffect} from 'react';
import './Home.scss';
import WindowCard from '../components/WindowCard';

const Home = () => {
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
    ]);
    
    // const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser';
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
    return (<>
        <div className='home'>
            <div className='container'>
                <div>
                    <div className='nav'>
                        <h1>RETRO RUNNERS</h1>
                        <h5>View All</h5>
                    </div>
                    <h3>Join the pixel party</h3>
                </div>

                <div className='suggestions'>
                    <h4>TOP SUGGESTIONS</h4>
                    <div className='flexList'>
                        {gamesList.slice(0,3).map(function(item, index){
                    return <WindowCard key={ index } props={item}>{item.title}</WindowCard>;
                  })}
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Home;