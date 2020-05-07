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

function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

const episodeFormat = function(es) {
  let number = Number(es);
  return "£" + number.toFixed(2).toLocaleString() + " ";
};

window.onload = setup;
