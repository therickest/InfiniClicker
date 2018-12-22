function gameSave(data) {
  document.cookie = 'gameData=' + btoa(JSON.stringify(data));
}

function getCookie (name) {
  var value = '; ' + document.cookie;
  var parts = value.split('; ' + name + '=');
  if (parts.length == 2) {
    return parts.pop().split(';').shift();
  }
}

function gameLoad () {
  return JSON.parse(atob(getCookie('gameData')));
}

function dord () {
  console.error('DORD');
  return;
}
