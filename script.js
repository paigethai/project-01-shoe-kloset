console.log("hello world");

const hamburgerButton = document.querySelector(".hamburger");
// console.log(hamburgerButton);

const hamburgerMenu = document.querySelector(".ham-links");
// console.log(hamburgerMenu);

hamburgerButton.addEventListener("click", function() {
    if (hamburgerMenu.style.display === "block") {
        hamburgerMenu.style.display = "none";
    } else {
        hamburgerMenu.style.display = "block";
    }
});

// Reveresed engineered this to work! Thank you to W3 Schools for the tutorial! 
// https://www.w3schools.com/howto/howto_js_mobile_navbar.asp