//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  var rootElem = document.getElementById("root");
  //rootElem.textContent = `Got ${episodeList[0].id} episode(s)`;
  for (var i = 0; i < episodeList.length; i++) {
    var container = document.createElement("div");
    var element = document.createElement("h4");
    var image = document.createElement("img");
    var text = document.createElement("p");

    element.textContent = `${episodeList[i].name}-S0${episodeList[i].season}E0${episodeList[i].number}`;
    image.src = episodeList[i].image.medium;
    text.innerHTML = `${
      episodeList[i].summary.length < 50
        ? episodeList[i].summary
        : episodeList[i].summary.substring(0, 100)
    }....`;

    element.classList.add("title");
    image.classList.add("image");
    text.classList.add("text");
    container.classList.add("container");

    container.appendChild(element);
    container.appendChild(image);
    container.appendChild(text);
    rootElem.appendChild(container);
  }
  return rootElem;
}

var filter, main, container, title, text, i, txtValue, pValue;
var input = document.getElementById("myInput");
input.addEventListener("keyup", function myFunction() {
  filter = input.value.toUpperCase();
  console.log(filter);
  main = document.getElementById("root");

  container = main.getElementsByTagName("div");

  for (i = 0; i < container.length; i++) {
    title = container[i].getElementsByTagName("h4")[0];
    text = container[i].getElementsByTagName("p")[0];

    txtValue = title.textContent || title.innerText;
    pValue = text.textContent || text.innerText;
    if (
      txtValue.toUpperCase().indexOf(filter) > -1 ||
      pValue.toUpperCase().indexOf(filter) > -1
    ) {
      container[i].style.display = "";
    } else {
      container[i].style.display = "none";
    }
  }
});

const episodeFormat = function(es) {
  let number = Number(es);
  return "£" + number.toFixed(2).toLocaleString() + " ";
};

window.onload = setup;
