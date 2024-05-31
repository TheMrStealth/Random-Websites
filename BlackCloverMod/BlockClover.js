function toggleNav() {
    var sideNav = document.getElementById("mySidenav");
    var menuBtn = document.getElementById("menuBtn");

    if (sideNav.style.width === "250px") {
        sideNav.style.width = "0";
        setTimeout(function() {
            menuBtn.style.display = "block"; // Show menu button after sideNav is fully closed
        }, 500); // Adjust delay time as needed to match your transition duration
        document.getElementById("menuBtn").style.marginLeft = "0px"
        document.getElementById("dlbutton").style.marginLeft = "0px"
    } else {
        sideNav.style.width = "250px";
        document.getElementById("menuBtn").style.marginLeft = "250px"
        document.getElementById("dlbutton").style.marginLeft = "250px"
        // menuBtn.style.display = "none"; 
        // Hide menu button when opening nav
    }
}
function lmode() {
    const wasLightmode = localStorage.getItem('lmode') === 'true';
    localStorage.setItem('lmode', !wasLightmode);
    const element = document.body;
    element.classList.toggle('lmode', !wasLightmode);
}function onload() {
    document.body.classList.toggle('lmode', localStorage.getItem('lmode') === 'true');   
}
 