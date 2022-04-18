import React, {useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch} from "react-redux";
import Episodes from '../Episodes';
import useFetchEpisodes from '../hooks/useFetchEpisodes';
import './EpisodesWrapper.css';
import Header from '../Includes/Header';
import Footer from '../Includes/Footer';
import {setEpisodes} from "../Episodes/state/slice";

const EpisodesWrapper = () => {
    const {episodes, isLoading} = useFetchEpisodes();
    const dispatch = useDispatch();

    useEffect(() => {
        if (episodes.length) {
            dispatch(setEpisodes(episodes));
        }
    }, [episodes]);

    return (
        <div className="episodes-and-characters">
            <div className="episodes-wrapper">
                    {isLoading ? 'Loading in progress...' : ''}
                    {!isLoading && <Episodes episodes={episodes} />}
            </div>
            <Outlet customProp="test" />
        </div>
    );
};

export default EpisodesWrapper;