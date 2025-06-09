var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


var container = document.querySelector('.sidenav');
var originalLeft = container.offsetLeft;
var isLeft = false;

function toggleContainerLeft() {
  var maxWidth = 768; // Maximum screen width

  // Check if the current width is less than the maximum width
  if (window.innerWidth <= maxWidth) {
    // Toggle between original left and 0
    if (isLeft) {
      container.style.left = originalLeft + 'px';
    } else {
      container.style.left = '0';
    }
    isLeft = !isLeft; // Toggle the state
  }
}