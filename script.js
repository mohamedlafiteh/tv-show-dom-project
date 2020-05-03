//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  var rootElem = document.getElementById("root");
  //rootElem.textContent = `Got ${episodeList[0].id} episode(s)`;
  for (var i = 0; i < episodeList.length; i++) {
    var element = document.createElement("h1");
    var image = document.createElement("img");
    var text = document.createElement("p");

    element.textContent = `${episodeList[i].name} - S0${episodeList[i].season} E0 ${episodeList[i].number}`;
    image.src = episodeList[i].image.medium;
    text.textContent = episodeList[i].summary;
    rootElem.appendChild(element);
    rootElem.appendChild(image);
    rootElem.appendChild(text);
  }
  return rootElem;
}

window.onload = setup;
