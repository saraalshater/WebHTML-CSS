

var quickMsg = confirm("This is a Green website but you can change it to your favorite color :D ");
var favColor;

if (quickMsg == true) {
  favColor = prompt("Please choose one (blue,red,yellow,purple,green)");
} else {
  alert("You clicked on cancel!");
}

if (favColor == "blue") {
  document.body.style.backgroundColor = "#36669c";
} else if (favColor == "red") {
  document.body.style.backgroundColor = "#9c3636";
} else if (favColor == "yellow") {
  document.body.style.backgroundColor = "#c2c441";
} else if (favColor == "purple") {
  document.body.style.backgroundColor = "#683991";
} else {
  document.body.style.backgroundColor = "#3d9c64";
}




var favPodcast = prompt('Choose an area to listen to their podcast: middleEast - southEastAsia - europe - worldWide ? ')

while (favPodcast !== "middleEast" && favPodcast !== "southEastAsia" && favPodcast !== "europe" && favPodcast !== "worldWide") {
  favPodcast = prompt('only choose one of these areas! ');
}

if (favPodcast == "worldWide") {
  document.write('<h3 style="color: white;text-align:center;font-size: 40px;">For a global podcast we suggest you to listen to <a href="#worldwidefm">Worldwide Fm</a></h3>');
} else if (favPodcast == "middleEast") {
  document.write('<h3 style="color: white;text-align:center;font-size: 40px;">For a podcast from the Middle east we suggest you to listen to <a href="#middleEast">Radio alhara</a></h3>');
} else if (favPodcast == "europe") {
  document.write(
    '<h3 style="color: white;text-align:center;font-size: 40px;">For a podcast from Europe we suggest you to listen to <a href="#europe">Kiosk radio</a></h3>'
  );
} else if (favPodcast == "southEastAsia") {
  document.write(
    '<h3 style="color: white;text-align:center;font-size: 40px;">For a podcast from Southeast Asia we suggest you to listen to <a href="#asia">Paddygroves</a></h3>'
  );
}

var radio = prompt("How many songs you listen to per day from 1 to 4 ?");


if (radio > 4) {
  radio = 4;
}

// for (var i = 0; i < radio; i++) {
//   document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-radio.svg/1024px-Circle-icons-radio.svg.png" width="200px">');
// } 


for (var i = 1; i <= radio; i++) {
    document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-radio.svg/1024px-Circle-icons-radio.svg.png" width="100px">'+ i );
  } 












