var header = document.querySelector('.region-header')
var inputElement_1 = header.querySelector('.form-submit');
inputElement_1.value = '';

document.addEventListener("DOMContentLoaded", function() {
  var blockButton = document.getElementById("block-button");
  var menuMain = document.querySelector(".menu--main");

  blockButton.addEventListener("click", function() {
    menuMain.classList.toggle("active");
  });
});



