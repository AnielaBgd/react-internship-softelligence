import React from 'react';
import Episodes from '../Episodes';
import useFetchEpisodes from '../hooks/useFetchEpisodes';
import './EpisodesWrapper.css';
import Header from '../Includes/Header';
import Footer from '../Includes/Footer';

const EpisodesWrapper = () => {
    const {episodes, isLoading} = useFetchEpisodes();

    return (
        <div className="episodes-wrapper">
            <div>
                {isLoading ? 'Loading in progress...' : ''}
                {
                    !isLoading && <Episodes episodes={episodes}/>
                }
            </div>
        </div>
    );
};

export default EpisodesWrapper;