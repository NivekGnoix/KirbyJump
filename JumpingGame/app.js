var characterid = document.getElementById("character");
document.addEventListener("click", jump);

function jump() {
    if (characterid.classList == "animate") {return;}
    characterid.classList.add("animate");
    setTimeout(removeJump, 300);
};


function removeJump() {
    characterid.classList.remove("animate");
}

var checkIfDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft<20 && blockLeft>-20 && characterTop >=130)  {
        alert("GAME OVER!");
    }
    
}, 10);

