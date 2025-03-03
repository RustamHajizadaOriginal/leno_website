// Wait for the DOM to finish loading before executing the code inside this function
document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu
  // Select the mobile menu toggle button
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
  // Select the mobile menu items container
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");
  // Add an event listener to the toggle button to toggle the mobile menu
  toggleButton.addEventListener("click", function () {
    // Toggle the 'active' class on the mobile menu items container
    // This will show or hide the mobile menu items
    mobileMenu.classList.toggle("active");
  });
  // Video Modal part
  // Select the video modal container
  const modal = document.getElementById("videoModal");
  // Select the video button that opens the modal
  const videoButton = document.querySelector(".preview__video-button");
  // Select the close button that closes the modal
  const closeButton = document.querySelector(".modal__close-button");
  // Select the video player element inside the modal
  const videoPlayer = document.getElementById("videoPlayer");

  // Open Modal when clicked
  // Add an event listener to the video button to open the modal
  videoButton.addEventListener("click", function () {
    // show modal
    modal.style.display = "block";

    // Replace the src attribute with the video URL
    videoPlayer.src = "https://www.youtube.com/embed/tJrr3FAtf1U";

    // Close modal on close button click
    closeButton.addEventListener("click", function () {
      modal.style.display = "none";
      videoPlayer.src = "";
    });

    // Close modal on outter click
    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        videoPlayer.src = "";
      }
    });
  });
});
// Navigation Background on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("navbar--scroll");
  } else {
    navbar.classList.remove("navbar--scroll");
  }
});
