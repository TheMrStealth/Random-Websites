function toggleNav() {
    var sideNav = document.getElementById("mySidenav");
    var menuBtn = document.getElementById("menuBtn");

    if (sideNav.style.width === "250px") {
        sideNav.style.width = "0";
        setTimeout(function() {
            menuBtn.style.display = "block"; // Show menu button after sideNav is fully closed
        }, 500); // Adjust delay time as needed to match your transition duration
    } else {
        sideNav.style.width = "250px";
        menuBtn.style.display = "none"; // Hide menu button when opening nav
    }
}

