// var backGround=prompt("GreenStream is a Green website but you can change to you Favorite color, Your color is: "); 

// if (backGround == "blue"){
//   document.write("<body style="backGround-color:blue;"></body>");
// }else{
//   document.write("<body style="background-color: #369c58;"></body>");
// }

var quickMsg=confirm("This is a Green website but you can change it to your favorite color :D ");
var favColor=prompt("What is your Favorite color?");
 

if (quickMsg = true) {
    if (favColor == "blue") {
         document.body.style.backgroundColor = "#36669c";
    } else if(favColor == "red"){
      document.body.style.backgroundColor = "#9c3636";
    } else if (favColor == "yellow"){
      document.body.style.backgroundColor = "#c2c441";
    } else if (favColor == "purple"){
      document.body.style.backgroundColor = "#683991";
    } else  {
    alert("You pressed Cancel!");   
    }
} 



//  var  favMusic=

//  if (radioNum > 1){
//    console.log("Error");
//  } else if (radioNum <= 5){
//    console.log("Not included");
//  }else if (radioNum === 4){
//    console.log("No error");
//  }







 
