function sendMessage() {
  fetch('/api/hello')
    .then(res => res.text())
    .then(msg => {
      document.getElementById("msg-response").innerText = msg;
    });
}
