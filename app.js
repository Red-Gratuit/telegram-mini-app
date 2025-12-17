const tg = window.Telegram.WebApp;
tg.ready();

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

function commander() {
  tg.sendData(JSON.stringify({
    action: "commande",
    service: "Cali Fast Drive"
  }));
  alert("Commande envoyée !");
}

function toggleMusic() {
  const music = document.getElementById('bgMusic');
  if (music.paused) music.play();
  else music.pause();
}
