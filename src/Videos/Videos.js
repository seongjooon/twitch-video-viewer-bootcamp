import React from 'react';
import cn from 'classnames';
import './Videos.css';
import noImg from './noimage.png';

function Videos({ thumbnail, title, runtime, viewAble, viewCount, createDay, userName, language, isClicked }) {
  return (
    <div className='Videos'>
      <div className='Video-elements'>
        <Video thumbnail={thumbnail ? thumbnail : noImg} title={title} isClicked={isClicked} />
        <div className='run-time'>{runtime}</div>
        <div className={cn('view-able', `${viewAble}`)} >{viewAble}</div>
        <div className='view-count'>{viewCount}views</div>
        <div className='create-day' >{createDay.slice(0, 10)}</div>
        <div className='video-title' >{title}</div>
        <div className='name-language'>
          <div className='language' >{language}</div>
          <div className='user-name' >{userName}</div>
        </div>
      </div>
    </div>
  );
}

function Video({ thumbnail, title, isClicked }) {
  return <img src={thumbnail} alt={title} onClick={isClicked} onMouseOver={(e) => {console.log('over', e)}} onMouseOut={(e) => {console.log('out', e)}}/>;
}

export default Videos;
