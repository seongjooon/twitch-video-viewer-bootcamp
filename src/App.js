import React, { Component } from 'react';
import './App.css';
import TopTen from './TopTen';
import Videos from './Videos';
import Modal from './Modal';
import getGamesApi from './GamesApi';
import getVideosApi from './VideosApi';
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
    }
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
    console.log(video);
    this.setState({ videoId: video.id, description: video.description })
    this._handdleClickModal();
  }

  _handdleClickModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen })
  }

  _pagenationClicked(paginationData) {
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
          isClicked={() => this._gameListClicked(game)}
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
          thumbnail={video.thumbnail_url.replace('%{width}x%{height}', '300x168')}
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
    const { topGames, videos, videoId, isModalOpen, description } = this.state;
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

        {/* GameList */}
        <div className='game-list'>
          {topGames ? this._renderGames() : 'Loading'}
        </div>

        {/* VideoList */}
        <div className='video-list'>
          {videos.length !== 0 ? this._renderVideos() : 'Loading'}
          <i class="fas fa-6x fa-angle-left" onClick={this._pagenationClicked.bind(this, [this.state.selectedGame, 'before', this.state.videos])}></i>
          <i class="fas fa-6x fa-angle-right" onClick={this._pagenationClicked.bind(this, [this.state.selectedGame, 'after', this.state.videos])}></i>
        </div>

        {/* Footer */}
        <footer>
          <li>Producer : SeongJoon Kim</li>
          <li>General Supervisor : Ken Huh</li>
          <li>Refferance : Twitch(www.twitch.tv)</li>
          <p> </p>
          <div>ⓒ Vanilla Coding (www.vanillacoding.co) </div>
        </footer>
      </div>
    );
  }
}

export default App;
