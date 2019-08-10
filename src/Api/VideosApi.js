import axios from 'axios';

export default function getVideosApi(gameId, arrow, videosData) {
  const apiKey = 'c7t4r5lnktjelu8azlv5meo8saunbm';
  let urls = `https://api.twitch.tv/helix/videos?game_id=${gameId}&language=ko&first=20&sort=views`;

  if (arrow) {
    urls += `&${ arrow }=${ videosData.pagination.cursor }`;
  }

  return axios({
    method: 'get',
    url: urls,
    headers: { 'Client-ID': apiKey }
  }).then(res => res.data);
}
