import { configureStore } from "@reduxjs/toolkit";
import episodesReducer from '../components/Episodes/state/slice';

export default configureStore( {
    reducer: {
        episodes: episodesReducer
    },
 });