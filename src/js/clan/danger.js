document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("selectstart", (e) => e.preventDefault());
document.addEventListener("dragstart", (e) => e.preventDefault());

const player = document.getElementById("player");
if (player) {
  player.addEventListener(
    "contextmenu",
    (e) => {
      e.preventDefault();
    },
    false,
  );
}

// block keys
document.addEventListener("keydown", function (event) {
  if (
    event.key === "F12" ||
    (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "i") || // Bloquear Ctrl+Shift+I
    (event.ctrlKey && event.key.toLowerCase() === "u") ||
    (event.ctrlKey && event.key.toLowerCase() === "s") ||
    (event.ctrlKey && event.key.toLowerCase() === "c") ||
    (event.ctrlKey && event.key.toLowerCase() === "v") ||
    (event.ctrlKey && event.key.toLowerCase() === "x") ||
    (event.ctrlKey && event.key.toLowerCase() === "a") ||
    (event.ctrlKey && event.key.toLowerCase() === "p") ||
    (event.ctrlKey && event.key.toLowerCase() === "r") ||
    (event.ctrlKey && event.key.toLowerCase() === "t") ||
    (event.ctrlKey && event.key.toLowerCase() === "w") ||
    (event.altKey && event.key.toLowerCase() === "f4") ||
    (event.ctrlKey && event.key.toLowerCase() === "f") ||
    (event.ctrlKey && event.key.toLowerCase() === "e") ||
    (event.ctrlKey && event.key.toLowerCase() === "g") ||
    (event.key.startsWith("F") && !isNaN(event.key.slice(1))) // Bloquear todas las teclas F1-F12
  ) {
    event.preventDefault();
  }
});

function setTitleBar(position) {
  var titlemessage = ["WOW", "WHATS??", "(ㆆ_ㆆ)"];
  var titlespeed = 900;
  if (position < titlemessage.length) {
    document.title = titlemessage[position];
    setTimeout(() => setTitleBar(position + 1), titlespeed);
  } else {
    setTimeout(() => setTitleBar(0), titlespeed);
  }
}
setTitleBar(0);
