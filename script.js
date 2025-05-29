document.getElementById("formContato").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = this.nome.value.trim();
  const email = this.email.value.trim();
  const mensagem = this.mensagem.value.trim();

  const destino = "contato@fernandesadvogados.com"; // substitua pelo seu e-mail real
  const assunto = "Contato via site";
  const corpo = `Nome: ${nome}\nE-mail: ${email}\nMensagem:\n${mensagem}`;
  const mailto = `mailto:${destino}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

  window.location.href = mailto;
});
