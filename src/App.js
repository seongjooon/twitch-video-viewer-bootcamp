import React, { Component } from 'react';
import './App.css';
import TopTen from './TopTen/TopTen';
import TopTenList from './TopTen/TopTenList';
import Videos from './Videos/Videos';
import Modal from './Modal/Modal';
import Footer from './Footer/Footer';
import getGamesApi from './Api/GamesApi';
import getVideosApi from './Api/VideosApi';
import mainImg from './favicon.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topGames: [],
      firstGame: null,
      selectedGame: null,
      videos: [],
      videoId: null,
      isModalOpen: false,
      description: null
    };
  }

  componentDidMount() {
    this._getGames();
  }

  _gameListClicked = game => {
    this._getVideos(game);
    let selectedGame = game;
    this.setState({ selectedGame });
  }

  _videoClicked = video => {
    this.setState({ videoId: video.id, description: video.description });
    this._handdleClickModal();
  }

  _handdleClickModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  _pagenationClicked = (paginationData) => {
    this._getVideos(paginationData[0], paginationData[1], paginationData[2]);
  }

  _renderGames = () => {
    const { topGames, selectedGame } = this.state;
    const topGameList = topGames.map((game, index) => {
      return (
        <TopTen
          index={index}
          title={game.name}
          key={game.id}
          gamekey={game.id}
          poster={game.box_art_url.replace('{width}x{height}', '150x210')}
          gameClicked={() => this._gameListClicked(game)}
          selectedGame={selectedGame}
        />
      );
    });
    return topGameList;
  };

  
  _renderVideos = () => {
    const { videos } = this.state;
    const videoList = videos.data.map(video => {
      return (
        <Videos
          key={video.id}
          createDay={video.created_at}
          runtime={video.duration}
          language={video.language}
          thumbnail={video.thumbnail_url.replace('%{width}x%{height}', '285x161')}
          title={video.title}
          userName={video.user_name}
          viewCount={video.view_count}
          viewAble={video.viewable}
          isClicked={() => this._videoClicked(video)}
        />
      );
    });
    return videoList;
  };

  _getGames = async () => {
    const topGames = await getGamesApi();
    const firstGame = topGames[0];
    this.setState({ topGames, firstGame, selectedGame: firstGame });
    this._getVideos(firstGame);
  };

  _getVideos = async (gameId, arrow = null, videosData = null) => {
    const videos = await getVideosApi(gameId.id, arrow, videosData);
    this.setState({ videos });
  }

  render() {
    const { topGames, videos, videoId, isModalOpen, description, selectedGame } = this.state;
    return (
      <div className='App'>
        {isModalOpen && <Modal videoId={videoId} description={description} handleClickModal={this._handdleClickModal} />}
        <div className='App-header'>
          <a className='main-logo' href='https://www.twitch.tv/'>
            <img src={mainImg} alt={'Twitch'} className='main-image' />
            TWITCH
          </a>
          <span>|</span>
          <span>Top Games</span>
          <span>|</span>
        </div>

        <TopTenList topGames={topGames} renderGames={this._renderGames()} />

        <div className='video-list'>
          {videos.length !== 0 ? this._renderVideos() : 'Loading'}
          <i className='fas fa-5x fa-angle-left' onClick={this._pagenationClicked.bind(this, [selectedGame, 'before', videos])}></i>
          <i className='fas fa-5x fa-angle-right' onClick={this._pagenationClicked.bind(this, [selectedGame, 'after', videos])}></i>
        </div>
        
        <Footer />
      </div>
    );
  }
}

export default App;
