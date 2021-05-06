// var backGround=prompt("GreenStream is a Green website but you can change to you Favorite color, Your color is: "); 

// if (backGround == "blue"){
//   document.write("<body style="backGround-color:blue;"></body>");
// }else{
//   document.write("<body style="background-color: #369c58;"></body>");
// }

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



var favPodcast = prompt('Do you prefer Electronic music or Funk music ? ')

while (favPodcast !== "Electronic music" && favPodcast !== "Funk music") {
  favPodcast = prompt('only choose Electronic music or Funk music');
}

if (favPodcast == "Electronic music") {
  document.write("<h3>For Electronic music we suggest you to listen to Paddygroves and Kosik radio </h3>");
} else if (favPodcast == "Funk") {
  document.write("<h3>For Funk music we suggest you to listen to Worldwide fm and Purple planet </h3>");
} else {
  document.write("<h3>only choose Electronic music or Funk music</h3>");
}


var radio = prompt("How many radio you listened to?");


if (radio > 4){
  radio = 4; 
}

  for (var i = 0; i < radio; i++) {
    document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-radio.svg/1024px-Circle-icons-radio.svg.png" width="200px">');
  } 












