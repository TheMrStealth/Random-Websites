function toggleMenu() {
    var sideNav = document.getElementById("navmenu");
    var navbutton = document.getElementById("menubtn");

    if (sideNav.style.width == "250px") {
        sideNav.style.width = "0px";
        document.getElementById("menubtn").style.marginLeft = "0px";
    } else {
        sideNav.style.width = "250px";
        document.getElementById("menubtn").style.marginLeft = "250px";
    }
}