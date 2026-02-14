// Carga de la API
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const VIDEO_ID = ["StwmlDe6vE4"];

// FORZAR A GLOBAL: Esto es lo que falta
window.onYouTubeIframeAPIReady = function () {
  window.player = new YT.Player("player", {
    height: "100%",
    width: "100%",
    videoId: VIDEO_ID,
    playerVars: {
      autoplay: 0,
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

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

function startMusicSync() {
  const progressBar = document.getElementById("progress-bar");
  const currentTimeEl = document.getElementById("current-time");
  const durationTimeEl = document.getElementById("duration-time");

  setInterval(() => {
    if (window.player && typeof window.player.getCurrentTime === "function") {
      const current = window.player.getCurrentTime();
      const duration = window.player.getDuration();

      if (duration > 0) {
        // Calcular porcentaje para la barra
        const percentage = (current / duration) * 100;
        progressBar.style.width = `${percentage}%`;

        // Actualizar textos
        currentTimeEl.innerText = formatTime(current);
        durationTimeEl.innerText = formatTime(duration);
      }
    }
  }, 100); // Se actualiza cada 1 segundo
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("bg-Btn");
  const overlay = document.getElementById("bg-Overlay");
  if (btn) {
    btn.addEventListener("click", () => {
      const isReady =
        window.player && typeof window.player.unMute === "function";
      if (isReady) {
        overlay.style.display = "none";
        window.player.unMute();
        window.player.playVideo();

        if (typeof startMusicSync === "function") {
          startMusicSync();
        }
      }
    });
  }
});
