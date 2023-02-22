const myModal = document.getElementById('lab1Modal');
const myInput = document.getElementById('btnLab1');

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus();
});
