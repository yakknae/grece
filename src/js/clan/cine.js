// Carga de la API
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Lista de IDs de videos
const VIDEO_IDS = [
  "5URefVYaJrA", // tailor
  "StwmlDe6vE4", // century
  "TF9GxcfJOsk", // haarper
  "8WPH2hRWrGY", // tony montana
];
/*
"oP7KHC129RQ" Central Cee - Obsessed With You
"U4mADkt6o-M" 21 Savage - redrum 
"KViOTZ62zBg" babushka
"JjFs28ojEPc" kaleb di masi dj tao
"LFiZ0ATwjBs" alcapone
"U4mADkt6o-M" 21 savage - redrum
"ZlnLvLDP4Zg" eurovision
"Kbj2Zss-5GY" A$AP Rocky - Praise The Lord
"uXCtOk5dedI" Fronteamos Porque Podemos
"Yr2Nq-7mQoY" ap pop smoke
"Wz5F-4KCAdI" hustlers c.r.o
"WvV5TbJc9tQ" Lil Peep - Save That Shit
"xAMgQQMZ9Lk" Lil Peep - The Brightside
"_h9JXVH6BLk" SARAMALACARA, MUEREJOVEN - FOMO 
"Om0rYw6qzb8" Hotel Lobby
"_VuJA-VQRcY" doja - central cee
"hXnRU7FLXwI" Kwengface - Mad About Bars
"VsLlCNzGQ-s" Brandy Senki - Musica
"TF9GxcfJOsk" haarper
"eqBMqbQUiB8", // madison zara
*/

let currentVideoIndex = 0;
let isPlayerReady = false;

// FORZAR A GLOBAL: Esto es lo que falta
window.onYouTubeIframeAPIReady = function () {
  window.player = new YT.Player("player", {
    height: "100%",
    width: "100%",
    videoId: VIDEO_IDS[currentVideoIndex],
    playerVars: {
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      rel: 0,
      loop: 1,
      enablejsapi: 1,
      modestbranding: 1,
      playsinline: 1,
      mute: 0,
    },
    events: {
      onReady: (e) => {
        e.target.setVolume(60);
        isPlayerReady = true;
      },
      onStateChange: window.onPlayerStateChange,
    },
  });
};

window.onPlayerStateChange = function (event) {
  if (event.data === YT.PlayerState.ENDED) {
    window.player.playVideo();
  }
};

// Evento para cambiar el video
document.querySelector(".next-netflix a").addEventListener("click", (e) => {
  e.preventDefault();
  // Usamos window.player e isPlayerReady declarado arriba
  if (!window.player || !isPlayerReady) return;

  currentVideoIndex = (currentVideoIndex + 1) % VIDEO_IDS.length;
  window.player.loadVideoById(VIDEO_IDS[currentVideoIndex]);
});

//botón de Mute (Línea 74 aprox)
const muteBtn = document.querySelector(".mute-netflix");
if (muteBtn) {
  const muteLink = muteBtn.querySelector("a");
  muteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // Verificamos si el reproductor existe y está listo
    if (typeof isPlayerReady !== "undefined" && isPlayerReady && window.player) {
      if (window.player.isMuted()) {
        window.player.unMute();
        if (muteLink) muteLink.textContent = "Mute";
      } else {
        window.player.mute();
        if (muteLink) muteLink.textContent = "Unmute";
      }
    }
  });
}

// Cambiar al siguiente video cuando termine
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    const nextIndex = (currentVideoIndex + 1) % VIDEO_IDS.length; // Siguiente video en la lista
    currentVideoIndex = nextIndex;
    player.loadVideoById(VIDEO_IDS[nextIndex]); // Cargar el siguiente video
  }
}

function updateMuteButtonText(muted) {
  const muteButton = document.querySelector(".mute-netflix a");
  if (muteButton) {
    muteButton.textContent = muted ? "Unmute" : "Mute";
  }
}
