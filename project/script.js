var navCross=document.getElementById("nav-cross")

navCross.classList.add("hidden");

function changeNavbarState() {
    var navbarItems=document.getElementById("navbar-items");
    var content = document.getElementById("content"); 
    var body = document.getElementById("body");
    var navBurger=document.getElementById("nav-burger")
    

     if (navbarItems.classList.contains("navbar-hidden")) {
        navbarItems.classList.add("navbar-mobile");
        navbarItems.classList.remove("navbar-hidden");
        content.classList.add("hidden");
        body.classList.add("navbar-background");

        navCross.classList.remove("hidden");
        navBurger.classList.add("hidden");
     } else if (navbarItems.classList.contains("navbar-mobile")) {
        navbarItems.classList.remove("navbar-mobile")
        navbarItems.classList.add("navbar-hidden");
        content.classList.remove("hidden");
        body.classList.remove("navbar-background");
        navBurger.classList.remove("hidden");
        navCross.classList.add("hidden");
     }
}