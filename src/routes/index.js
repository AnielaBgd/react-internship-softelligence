import { Routes, Route } from 'react-router-dom';
import EpisodesWrapper from '../components/wrappers/EpisodesWrapper';
import HomeWrapper from '../components/wrappers/HomeWrapper';
import Characters from '../components/Characters';
import CharacterWrapper from "../components/wrappers/CharacterWrapper";

const routes = () => (
    <Routes>
        <Route path="/" element={<HomeWrapper />} />
        <Route path="episodes" element={<EpisodesWrapper />}>
            <Route path=":episodeId/characters" element={<CharacterWrapper />} />
        </Route>
    </Routes>
);

export default routes;