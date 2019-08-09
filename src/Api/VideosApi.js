import axios from 'axios';

export default function getVideosApi(gameId, arrow, videosData) {
  if (arrow) {
    const apiKey = 'c7t4r5lnktjelu8azlv5meo8saunbm';
    const urls = `https://api.twitch.tv/helix/videos?game_id=${gameId}&language=ko&${arrow}=${videosData.pagination.cursor}&first=20&sort=views`;
    return axios({
      method: 'get',
      url: urls,
      headers: { 'Client-ID': apiKey }
    }).then(res => res.data);
  }
  const apiKey = 'c7t4r5lnktjelu8azlv5meo8saunbm';
  const urls = `https://api.twitch.tv/helix/videos?game_id=${gameId}&language=ko&first=20&sort=views`;
  return axios({
    method: 'get',
    url: urls,
    headers: { 'Client-ID': apiKey }
  }).then(res => res.data);

}
