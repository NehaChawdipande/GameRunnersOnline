import React from 'react';
import './Home.scss';
import WindowCard from '../components/WindowCard';

const Home = () => {
    return(<>
    <div className='home'>
        <div className='container'>
            <div>
            <div  className='nav'>
            <h1>RETRO RUNNERS</h1>
            <h5>View All</h5>
                </div>
            <h3>Join the pixel party</h3>
            </div>
        
            <div className='suggestions'>
                <h4>TOP SUGGESTIONS</h4>
                <div className='flexList'>
                    <WindowCard>
                    this is one
                    </WindowCard>
                    <WindowCard>
                    this is 2
                    </WindowCard>     <WindowCard>
                    this is Three
                    </WindowCard>
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default Home;