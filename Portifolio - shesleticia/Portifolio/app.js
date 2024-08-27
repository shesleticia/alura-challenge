const input = document.querySelector("#input-texto");
const mensagem = document.querySelector("#mensagem");

function acaoBotaoCriptografar(){
  let texto = encriptar(input.value.toLowerCase());
  mensagem.value = texto;
  input.value = "";
  mostrarResultado();
}

function acaoBotaoDescriptografar() {
  let texto = decodificar(input.value);
  mensagem.value = texto;
  input.value = "";
  mostrarResultado();
}

function acaoBotaoCopiar(){
  const mensagem = document.querySelector("#mensagem");
  navigator.clipboard.writeText(mensagem.value)
  mensagem.value = "";
}

function encriptar(texto) {
  return texto.replace(/e/g, "enter").replace(/i/g, 'imes').replace(/a/g, "ai")
  .replace(/o/g, 'ober').replace(/u/g, "ufat");
}

function decodificar(texto) {
  return texto.replace(/enter/g, "e").replace(/imes/g, 'i').replace(/ai/g, "a")
    .replace(/ober/g, 'o').replace(/ufat/g, "u");
}

function mostrarResultado() {
  document.getElementById("div-desaparece").style.display = 'none';
  document.getElementById("div-aparece").style.display = 'block';
}

function home() {
  document.getElementById("div-desaparece").style.display = 'block';
  document.getElementById("div-aparece").style.display = 'none';
}