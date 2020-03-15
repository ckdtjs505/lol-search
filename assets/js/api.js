const api_key = "RGAPI-7380bf82-89de-4e13-8eed-5621e5461444";
const url = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/";

function getUserData(name) {
  return fetch(`${url}${name}?api_key=${api_key}`, {
    // 이거적기
    // mode: "no-cors" // 'cors' by default
  }).then(function(res) {
    console.log(res);
  });
}
