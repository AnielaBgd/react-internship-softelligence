import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Characters from "../Characters";
import useFetchCharacters from "../hooks/useFetchCharacters";
import useGetCharactersId from "../hooks/useGetCharactersId";
import "./CharactersWrapper.css";

const CharacterWrapper = () => {
    const [{ isLoading, characters}, loadCharacters] = useFetchCharacters();
    const episodes = useSelector((state) => state.episodes);
    const { episodeId } = useParams();
    const { characterId } = useGetCharactersId(episodes, episodeId);

    useEffect(() => {
        loadCharacters(characterId);
        console.log(episodes);
    }, [characterId, episodeId]);

    return (
        <>
            {isLoading ? 'Loading characters...' : ''}
            {!isLoading && <Characters characterList={characters} />}
        </>
    );
};

export default CharacterWrapper;