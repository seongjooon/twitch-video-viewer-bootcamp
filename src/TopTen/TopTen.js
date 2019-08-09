import React from 'react';
import cn from 'classnames';
import './TopTen.css';

function TopTen({ index, title, poster, gamekey, gameClicked, selectedGame }) {
  return (
    <div className='Top-10'>
      <div className='Top-10-element'>
        {gamekey !== selectedGame.id ? <div className='games-rank'>{index + 1}</div> : null}
        <GamePoster title={title} poster={poster} gamekey={gamekey} gameClicked={gameClicked} selectedGame={selectedGame} />
      </div>
    </div>
  );
}

function GamePoster({ title, poster, gamekey, gameClicked, selectedGame }) {
  return <img className={cn({ 'selected': gamekey === selectedGame.id })} src={poster} alt={title} title={title} gamekey={gamekey} onClick={gameClicked} />;
}

export default TopTen;
