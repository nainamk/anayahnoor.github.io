let deferredPrompt;

fetch("data.json")
  .then(response => response.json())
  .then(data => {
    const menu = document.getElementById("topicMenu");

    data.planets.forEach(topic => {
      const button = document.createElement("button");
      button.className = "topic-btn";
      button.textContent = topic.title;

      button.addEventListener("click", () => {
        document.getElementById("topicTitle").textContent = topic.title;
        document.getElementById("topicDescription").textContent = topic.description;
        document.getElementById("topicImage").src = topic.image;
        document.getElementById("topicImage").alt = topic.title;
        document.getElementById("topicAudio").src = topic.audio;
      });

      menu.appendChild(button);
    });
  });

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredPrompt = event;

  const installBtn = document.getElementById("installBtn");
  installBtn.hidden = false;

  installBtn.addEventListener("click", () => {
    installBtn.hidden = true;
    deferredPrompt.prompt();
  });
});
