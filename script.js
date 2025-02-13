'use strict';
function abrirModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function fecharModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonClosemodal = document.querySelector('.close-modal');
const buttonOpenmodal = document.querySelectorAll('.show-modal');

for (let i = 0; i < buttonOpenmodal.length; i++) {
  buttonOpenmodal[i].addEventListener('click', abrirModal); // Executa a função `abrirModal` quando o botão é clicado
}
buttonClosemodal.addEventListener('click', fecharModal); // Executa a função `fecharModal` quando o botão é clicado
overlay.addEventListener('click', fecharModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    //o && é literalmente e, uma comparação "se o Esc for aperta E a classe NÃO estiver oculta"
    fecharModal();
  }
});
