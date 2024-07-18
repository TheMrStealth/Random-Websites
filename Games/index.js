console.log("Main js loaded")

let x = 0;
let y = 0;
let vxl = 0;
let vxr = 0;
let vy = 0;

addEventListener("keydown", function(e){
    console.log(e.code);
    if (e.code == 'KeyD') vxl = 3;
    // if (e.code == 'KeyD') {
        //     player.style.left = x + vxl + 'px';
        // }
        if (e.code == 'KeyA') vxr = -3;
        if (e.code == 'KeyW') vy = -2;
        if (e.code == 'KeyS') vy = 2;
    })
    addEventListener("keyup", function(e){
    if (e.code == 'KeyD') vxl = 0;
    if (e.code == 'KeyA') vxr = 0;
    if (e.code == 'KeyW') vy = 0;
    if (e.code == 'KeyS') vy = 0;
})

setInterval(function() {
    x = x + vxl;
    x += vxr;
    y += vy;
    document.getElementById("player").innerHTML = x;
}, 1000)


// function update() {
//     x += vxl;
//     x += vxr;
//     y += vy;
//     requestAnimationFrame(update)
// }
// update()

// let player = document.getElementById("player");
// let movePlayer = 10;
// let jumpStrength = 100;
// window.addEventListener("keydown", (e) =>{
//     let leftpos = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
//     let toppos = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
//     switch (e.key) {
//         case 'a':
//             player.style.left = leftpos - movePlayer + 'px';
//             break;
//         // case 'd':
//         //     player.style.left = leftpos + movePlayer + 'px';
//         //     break;
//         case ' ':
//             // console.log(player.style.top);
//             player.style.top = toppos - jumpStrength + 'px';
//             // console.log(player.style.top);
//             // setTimeout(() => player.style.top = toppos + jumpStrength + 'px', 1000);
//             break;
//     }
// });