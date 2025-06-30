// Salvar anotações localmente no navegador function salvarAnotacoes() { const texto = document.getElementById("anotacoes").value; localStorage.setItem("anotacoesIA", texto); alert("Anotações salvas localmente!"); }

// Carregar anotações ao abrir o site function carregarAnotacoes() { const textoSalvo = localStorage.getItem("anotacoesIA"); if (textoSalvo) { document.getElementById("anotacoes").value = textoSalvo; } }

// Exportar anotações como PDF function exportarPDF() { const texto = document.getElementById("anotacoes").value; const janela = window.open(); janela.document.write(<pre>${texto}</pre>); janela.print(); }

// Chamar automaticamente ao carregar window.onload = carregarAnotacoes;

