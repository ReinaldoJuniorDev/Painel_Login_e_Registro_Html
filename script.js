document.querySelector(".login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const button = this.querySelector("button");
  button.textContent = "Carregando...";
  button.style.backgroundColor = "#444";

  setTimeout(() => {
    button.textContent = "Entrar";
    button.style.backgroundColor = "#667eea";
    alert("Login visual apenas — sem backend!");
  }, 1500);
});