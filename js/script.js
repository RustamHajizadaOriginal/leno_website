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
    // Show the modal by setting its display property to 'block'
    modal.style.display = "block";
    // Set the src attribute of the video player to the YouTube video URL
    // This will load the video into the player
    videoPlayer.src = "https://www.youtube.com/embed/tJrr3FAtf1U";

    // Close modal on close button click
    // Add an event listener to the close button to close the modal
    closeButton.addEventListener("click", function () {
      // Hide the modal by setting its display property to 'none'
      modal.style.display = "none";
      // Reset the src attribute of the video player to an empty string
      // This will stop the video from playing
      videoPlayer.src = "";
    });

    // Close modal on outter click
    // Add an event listener to the modal to close it when the user clicks outside
    window.addEventListener("click", function (event) {
      // Check if the user clicked on the modal itself (not on a child element)
      if (event.target == modal) {
        // Hide the modal by setting its display property to 'none'
        modal.style.display = "none";
        // Reset the src attribute of the video player to an empty string
        // This will stop the video from playing
        videoPlayer.src = "";
      }
    });
  });
});
// Navigation Background on scroll
// Add an event listener to the window to change the navbar's background color on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  // Check if the user has scrolled down the page (i.e., the scrollY position is greater than 0)
  if (window.scrollY > 0) {
    // Add the 'navbar--scroll' class to the navbar element
    // This will change the navbar's background color
    navbar.classList.add("navbar--scroll");
  } else {
    navbar.classList.remove("navbar--scroll");
  }
});
