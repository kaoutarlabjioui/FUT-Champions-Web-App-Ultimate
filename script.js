let hamburgerMenu = document.querySelector(".hamburgerMenu");
let navLinks = document.querySelector(".navLinks");

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("max-lg:block");
});






const overlay = document.getElementById("overlay");
const chose_player = document.getElementById("chose_player");


chose_player.addEventListener("click", function(){
    overlay.classList.remove("hidden");    
    overlay.classList.add("flex");
})