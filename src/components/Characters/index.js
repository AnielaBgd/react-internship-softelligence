import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './styles.css';

const Characters = (props) => {
  const {characterList} = props;

  const classes = cn('characters-container');
  return (
    <div className="characters">
      {
        characterList.map(({id, name, image}) => {
          return (
            <figure key={`character-${id}`}>
              <div className="characters-name" title={name}>{name}</div>
              <div>
                <img className="chracters-image" alt={`${name}'s logo`} src={image} />
              </div>
            </figure>
          );
        })
      }
    </div>
  );
};

Characters.propTypes = {
  characterList: PropTypes.array.isRequired
};

export default Characters;