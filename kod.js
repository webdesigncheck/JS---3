function myFunction() {
  alert("Welcome!");
}

function changeText() {
  document.getElementById("tekst").innerHTML = "Text has changed!";
  document.getElementById("tekst").style.backgroundColor = "white";
  document.getElementById("tekst").style.fontSize = "30px";
}

function provera() {
  var r1 = document.getElementById("Radio1");
  var r2 = document.getElementById("Radio2");
  var poruka = document.getElementById("span1");
  if (r1.checked) {
    poruka.innerHTML = "Selected Gender: Male";
  }
  else if (r2.checked) {
    poruka.innerHTML = "Selected Gender: Female";
  }
  else {
    poruka.innerHTML = "You did not select any option!";
  }
}



var i = 0;
function change() {
  var doc = document.getElementById("container1");
  var color = ["	rgb(255, 255, 102)", " rgb(255, 102, 255) "];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1000);

/*function welcomeTheUsar() {
  const
      firstName = document.getElementById("first-name").value,
      lastName = document.getElementById("last-name").value;
      favouriteAnimal = document.getElementById("favourite-animal").value;
      document.write(`Welcome ${firstName} ${lastName} ${favouriteAnimal}`);
} */

function welcomeTheUsar() {
  var i1 = document.getElementById("first-name");
  var i2 = document.getElementById("last-name");
  var i3 = document.getElementById("favourite-animal");
  var span2 = document.getElementById("span2");
  var span3 = document.getElementById("span3");
  var span4 = document.getElementById("span4");
  if (i1.value) {
    span2.innerHTML = i1.value;
  }
  if (i2.value) {
    span3.innerHTML = i2.value;
  }
  if (i3.value) {
    span4.innerHTML = i3.value;
  }
}




