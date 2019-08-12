import axios from 'axios';

export default function getGamesApi() {
  const apiKey = 'c7t4r5lnktjelu8azlv5meo8saunbm';
  const urls = 'https://api.twitch.tv/helix/games/top?first=10';
  return axios({
    method: 'get',
    url: urls,
    headers: { 'Client-ID': apiKey }
  }).then(res => res.data.data);
}
