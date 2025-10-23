function showAlert() {
  const messages = [
    "🚀 RX-78-2 siap bertempur!",
    "🛠️ Gundam kamu sedang di-upgrade!",
    "✨ New model launching soon!",
    "🔥 Wing Zero Custom siap mengudara!",
    "💫 Build. Paint. Battle. Be the Mecha Master!",
    "⚙️ Gunpla is freedom — rakit tanpa batas!"
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  alert(randomMessage);
}
document.getElementById("alertButton").addEventListener("click", showAlert);
