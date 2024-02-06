document.addEventListener("DOMContentLoaded", function() {
    const player = document.getElementById("player");

    // Inicializar las propiedades top y left
    player.style.top = "50%";
    player.style.left = "50%";

    function movePlayer(direction) {
        const speed = 10;

        switch (direction) {
            case "up":
                player.style.top = (parseFloat(player.style.top) - speed) + "px";
                break;
            case "down":
                player.style.top = (parseFloat(player.style.top) + speed) + "px";
                break;
            case "left":
                player.style.left = (parseFloat(player.style.left) - speed) + "px";
                break;
            case "right":
                player.style.left = (parseFloat(player.style.left) + speed) + "px";
                break;
        }
    }

    // Cambié a "mousedown" en lugar de "click"
    document.getElementById("controls").addEventListener("mousedown", function(event) {
        if (event.target.tagName === "BUTTON") {
            const direction = event.target.getAttribute("data-direction");
            movePlayer(direction);
        }
    });
});
