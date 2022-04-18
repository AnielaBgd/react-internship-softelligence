import { useEffect, useState } from 'react';

const useGetCharactersId = (episodes, episodeId) => {
    const [characterId, setCharacterId] = useState([]);

    useEffect(() => {
        const getId = (url) => url.split('/').pop();
        const episodeIdInt = parseInt(episodeId);
        const currentEpisode = episodes.find(({id}) => id === episodeIdInt);

        if (currentEpisode) {
            const {characters} = currentEpisode;
            const result = characters.reduce((prev, curr, idx) => {
                const idCharacter = getId(curr);
                return idx === 0 ? idCharacter : `${prev}, ${idCharacter}`;
            }, '');
            setCharacterId(result);
        }
    }, [episodeId]);

    return {
        characterId
    };
};

export default useGetCharactersId;
