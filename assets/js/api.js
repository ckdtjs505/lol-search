const api_key = "RGAPI-7380bf82-89de-4e13-8eed-5621e5461444";
// const url = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/";\
const api_access_key = "NtxoFkRmWdaM8LtARKERKEzZp_h5B14z5jleLrQKeBg";
// const api_secret_key = "3bvuo6nsh_d40cEw1UQcTrIQNfou0qeCx5Ucq-0FNyo";

const url = "https://api.unsplash.com/photos/";
function getUserData(name) {
  return fetch(`https://api.unsplash.com/search/photos?page=1&query=${name}`, {
    headers: {
      Authorization: `Client-ID ${api_access_key}`
    }
  }).then(res => res.json());
}
