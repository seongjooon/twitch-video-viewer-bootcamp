import React from 'react';
import './TopTenList.css';

export default function TopTenList({ topGames, renderGames }) {
  return (
    <div className='game-list'>
      {topGames ? renderGames : 'Loading'}
    </div>
  );
}
