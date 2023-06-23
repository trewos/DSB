var inputElement = document.getElementById('edit-submit');
inputElement.value = '';

document.addEventListener("DOMContentLoaded", function() {
  var blockButton = document.getElementById("block-button");
  var menuMain = document.querySelector(".menu--main");

  blockButton.addEventListener("click", function() {
    menuMain.classList.toggle("active");
  });
});

