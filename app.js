const imageSlider = (currentImg) => {
    document.querySelector('.starbucks').src = currentImg;
}

//Handle circle color
const changeCircleColor = (color) => {
    document.querySelector('.circle').style.background = color;
}
//Handle <span>, .social, .circle tag color
document.getElementById("changeyellow").onclick = function(){
  document.getElementById("output").style.color = '#378f1d';
  document.getElementById("social").style.background = '#378f1d';
  document.getElementById("learnmore").style.background = '#378f1d';
  document.querySelector('.starbucks').src ="kiwi.png";
    document.querySelector('.circle').style.background = '#378f1d';
}

document.getElementById("changeGreen").onclick = function(){
	document.getElementById("output").style.color = '#f28f0c';
	document.getElementById("social").style.background = '#f28f0c';
	document.getElementById("learnmore").style.background = '#f28f0c';
	document.querySelector('.starbucks').src ="yellow.png";
    document.querySelector('.circle').style.background = '#f28f0c';
}

document.getElementById("changePink1").onclick = function(){
	document.getElementById("output").style.color = 'darkred';
	document.getElementById("social").style.background = 'darkred';
	document.getElementById("learnmore").style.background = 'darkred';
	document.querySelector('.starbucks').src ="red.png";
    document.querySelector('.circle').style.background = 'darkred';
}
document.getElementById("changePink2").onclick = function(){
	document.getElementById("output").style.color = '#45081e';
	document.getElementById("social").style.background = '#45081e';
	document.getElementById("learnmore").style.background = '#45081e';
	document.querySelector('.starbucks').src ="blue.png";
    document.querySelector('.circle').style.background = '#45081e';
}
//Handle menu button
// const toggleMenu = () => {
//     const menuToggle = document.querySelector('.toggle');
//     const navigation = document.querySelector('.navigation');

//     menuToggle.classList.toggle('active');
//     navigation.classList.toggle('active');
// }
// // Get the button
// let mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }