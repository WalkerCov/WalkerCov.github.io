var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("photo");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "block";
    x[i].style.opacity = "0";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  x[slideIndex-1].style.opacity ="1";
  setTimeout(carousel, 3000); // Change image every 3 seconds
}