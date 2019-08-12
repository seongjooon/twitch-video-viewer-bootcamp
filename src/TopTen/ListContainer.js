import React from 'react';
import './ListContainer.css';

export default function ListContainer({ renderGames }) {
  return (
    <div className='game-list'>
      {renderGames ? renderGames : 'Loading'}
    </div>
  );
}
