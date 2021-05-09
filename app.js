
function backGroundColor(){

var quickMsg = confirm("This is a Green website but you can change it to your favorite color :D ");
var favColor;

if (quickMsg == true) {
  favColor = prompt("Please choose one (blue,red,yellow,purple,green)");
} else {
  alert("You clicked on cancel!");
}
 var colorResult='';

if (favColor == "blue") {
  colorResult="#36669c";
} else if (favColor == "red") {
  colorResult="#9c3636";
} else if (favColor == "yellow") {
  colorResult="#c2c441";
} else if (favColor == "purple") {
 colorResult="#683991";
} else {
  colorResult="#3d9c64";
}
return colorResult;
}

document.body.style.backgroundColor=backGroundColor();




function areaFunc(){

var favPodcast = prompt('Choose an area to listen to their podcast: middleEast - southEastAsia - europe - worldWide ? ')

while (favPodcast !== "middleEast" && favPodcast !== "southEastAsia" && favPodcast !== "europe" && favPodcast !== "worldWide") {
  favPodcast = prompt('only choose one of these areas! ');
}
var result='';

if (favPodcast == "worldWide") {
  result ='<h3 style="color: white;text-align:center;font-size: 40px;">For a global podcast we suggest you to listen to <a href="#worldwidefm">Worldwide Fm</a></h3>';
} else if (favPodcast == "middleEast") {
  result ='<h3 style="color: white;text-align:center;font-size: 40px;">For a podcast from the Middle east we suggest you to listen to <a href="#middleEast">Radio alhara</a></h3>';
} else if (favPodcast == "europe") {
    result ='<h3 style="color: white;text-align:center;font-size: 40px;">For a podcast from Europe we suggest you to listen to <a href="#europe">Kiosk radio</a></h3>';
} else if (favPodcast == "southEastAsia") {

    result='<h3 style="color: white;text-align:center;font-size: 40px;">For a podcast from Southeast Asia we suggest you to listen to <a href="#asia">Paddygroves</a></h3>';
}
return result;
}

document.write(areaFunc());



// for (var i = 0; i < radio; i++) {
//   document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-radio.svg/1024px-Circle-icons-radio.svg.png" width="200px">');
// } 

function songCounter(){


var radio = prompt("How many songs you listen to per day from 1 to 4 ?");


if (radio > 4) {
  radio = 4;
}var countResult='';

for (var i = 1; i <= radio; i++) {
    countResult +='<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-radio.svg/1024px-Circle-icons-radio.svg.png" width="100px">'+ i;
}
return countResult;
}

document.write(songCounter());
// var quickMsg=confirm("This is a Green website but you can change it to your favorite color :D ");
// var favColor=prompt("What is your Favorite color?");


// if (quickMsg = true) {
//     if (favColor == "blue") {
//          document.body.style.backgroundColor = "#36669c";
//     } else if(favColor == "red"){
//       document.body.style.backgroundColor = "#9c3636";
//     } else if (favColor == "yellow"){
//       document.body.style.backgroundColor = "#c2c441";
//     } else if (favColor == "purple"){
//       document.body.style.backgroundColor = "#683991";
//     } else  {
//     alert("You pressed Cancel!");   
//     }
// } 



// var favPodcast = prompt('Do you prefer Electronic music or Funk music ? ')

// while (favPodcast !== "Electronic music" && favPodcast !== "Funk music") {
//   favPodcast = prompt('only choose Electronic music or Funk music');
// }

// if (favPodcast == "Electronic music") {
//   document.write("<h3>For Electronic music we suggest you to listen to Paddygroves and Kosik radio </h3>");
// } else if (favPodcast == "Funk") {
//   document.write("<h3>For Funk music we suggest you to listen to Worldwide fm and Purple planet </h3>");
// } else {
//   document.write("<h3>only choose Electronic music or Funk music</h3>");
// }


// var radio = prompt("How many radio you listened to?");


// if (radio > 4){
//   radio = 4; 
// }

//   for (var i = 0; i < radio; i++) {
//     document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-radio.svg/1024px-Circle-icons-radio.svg.png" width="200px">');

//   } 












