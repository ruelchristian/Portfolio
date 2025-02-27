document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelector("#nav-links ul");
  const menuItems = document.querySelectorAll("#nav-links ul li a");

  navbar.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Close menu when a link is clicked
  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });
});
