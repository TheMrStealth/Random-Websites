let player = document.getElementById("player");
let movePlayer = 10;
let jumpStrength = 100;
window.addEventListener("keydown", (e) =>{
    let leftpos = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    let toppos = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    switch (e.key) {
        case 'a':
            player.style.left = leftpos - movePlayer + 'px';
            break;
        case 'd':
            player.style.left = leftpos + movePlayer + 'px';
            break;
        case ' ':
            player.style.top = toppos - jumpStrength + 'px';
            // setTimeout(5000);
            // player.style.top = toppos + jumpStrength + 'px';
            
            break;
    }
});