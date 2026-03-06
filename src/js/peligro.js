document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("selectstart", (e) => e.preventDefault());
document.addEventListener("dragstart", (e) => e.preventDefault());

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

document.addEventListener("DOMContentLoaded", function () {
  var name = document.querySelector(".name");
  if (name) {
    name.addEventListener("click", function () {
      location.reload();
    });
  }
});

async function obtenerVisitas() {
  const workspaceSlug = "gris-32"; // slug workspace
  const counterSlug = "gris"; // slug

  try {
    const response = await fetch(`https://api.counterapi.dev/v1/${workspaceSlug}/${counterSlug}/up`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    if (data && data.count !== undefined) {
      document.getElementById("visitas").innerText = data.count;
    }
  } catch (error) {
    console.error("Error en CounterAPI:", error);
    document.getElementById("visitas").innerText = "Error";
  }
}

obtenerVisitas();

function animacion() {
  const arroba = "@";
  const tittle = "grece";
  let position = 0;
  let reverse = false;

  function actualizar() {
    if (!reverse && position <= tittle.length) {
      if (position < tittle.length) {
        document.title = arroba + tittle.substring(0, position) + "/";
        setTimeout(() => {
          document.title = arroba + tittle.substring(0, position + 1);
          position++;
          setTimeout(actualizar, 300);
        }, 300);
      } else {
        reverse = true;
        setTimeout(actualizar, 300);
      }
    } else if (reverse && position >= 0) {
      if (position > 0) {
        document.title = arroba + tittle.substring(0, position - 1) + "/";
        setTimeout(() => {
          document.title = arroba + tittle.substring(0, position - 1);
          position--;
          setTimeout(actualizar, 300);
        }, 300);
      } else {
        reverse = false;
        setTimeout(actualizar, 300);
      }
    }
  }
  actualizar();
}
animacion();

(function () {
  "use strict";
  const proteccion = function () {
    try {
      (function () {
        return function (i) {
          console.clear();
          (function () {}).constructor("debugger")();
        };
      })()(0);
    } catch (e) {
      setTimeout(proteccion, 50);
    }
  };

  setInterval(function () {
    proteccion();
  }, 100);

  (function a() {
    const inicio = performance.now();
    debugger;
    if (performance.now() - inicio > 100) {
      console.clear();
    }
    setTimeout(a, 100);
  })();
})();
