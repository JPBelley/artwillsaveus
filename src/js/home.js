document.addEventListener('DOMContentLoaded', function() {

  var headline = document.getElementById("headline");
  var string = headline.innerText;
  var spaned = '';
  for (var i = 0; i < string.length; i++) {
    if(string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
    else spaned += '<span>' + string.substring(i, i + 1) + '</span>';
  }
  headline.innerHTML = spaned;
}, false);
