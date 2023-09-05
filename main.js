var player = document.getElementById("player");
var gameContainer = document.getElementById("game-container");
var tablets = []; 
var poin = 0; 
var batasWaktu = 30;
var poinElement = document.createElement("div");
poinElement.id = "poin";
document.body.appendChild(poinElement);
poinElement.innerText = "Poin: 0";

var waktuElement = document.createElement("div");
waktuElement.id = "waktu";
document.body.appendChild(waktuElement);
waktuElement.innerText = "Waktu: " + batasWaktu;
        function createTablet() {
            var tablet = document.createElement("div");
            tablet.className = "tablet";
            tablet.style.left = Math.random() * 380 + "px"; 
            tablet.style.top = Math.random() * 380 + "px"; 
            gameContainer.appendChild(tablet);
            tablets.push(tablet);
        }
        

function countdown() {
    batasWaktu--;
    waktuElement.innerText = "Waktu: " + batasWaktu;

    if (batasWaktu === 0) {

        clearInterval(waktuInterval);
        alert("Permainan Selesai. Total Poin: " + poin);
        location.reload(); 
    }
}

var waktuInterval = setInterval(countdown, 1000)


function checkCollisions() {
    for (var i = 0; i < tablets.length; i++) {
        if (isColliding(player, tablets[i])) {
            tablets[i].remove();
            tablets.splice(i, 1);
            poin++;
            poinElement.innerText = "Poin: " + poin; 
        }
    }
}


function countdown() {
    batasWaktu--;
    waktuElement.innerText = "Waktu: " + batasWaktu;

    if (batasWaktu === 0) {
        clearInterval(waktuInterval);
        alert("selesai anjay. Total Poin: " + poin);
        location.reload();
    }
}

        function isColliding(element1, element2) {
            var rect1 = element1.getBoundingClientRect();
            var rect2 = element2.getBoundingClientRect();
            return !(rect1.right < rect2.left || 
                     rect1.left > rect2.right || 
                     rect1.bottom < rect2.top || 
                     rect1.top > rect2.bottom);
        }

        document.addEventListener("mousemove", function(event) {
            player.style.left = event.clientX - gameContainer.getBoundingClientRect().left + "px";
            player.style.top = event.clientY - gameContainer.getBoundingClientRect().top + "px";
            checkCollisions(); 
        });
        setInterval(createTablet, 500);
