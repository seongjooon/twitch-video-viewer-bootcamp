import React from 'react';
import cn from 'classnames';
import './TopTen.css';

function TopTen({ index, title, poster, gameId, onGameClick, selectedGame }) {
  return (
    <div className='Top-10'>
      <div className='Top-10-element'>
        {gameId !== selectedGame.id ? <div className='games-rank'>{index + 1}</div> : null}
        <GamePoster
          title={title}
          poster={poster}
          gameId={gameId}
          onGameClick={onGameClick}
          selectedGame={selectedGame}
        />
      </div>
    </div>
  );
}

function GamePoster({ title, poster, gameId, onGameClick, selectedGame }) {
  return (
    <img className={cn({ 'selected': gameId === selectedGame.id })}
      src={poster} alt={title}
      title={title}
      gameId={gameId}
      onClick={onGameClick} />
  );
}

export default TopTen;
