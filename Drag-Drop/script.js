function aoArrastar(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
}

function aoSoltar(event) {
  event.preventDefault();
}

function noDrop(event) {
  const id = event.dataTransfer.getData('text');

  const elementoArrastado = document.getElementById(id);

  const dropzone = event.target;
  dropzone.appendChild(elementoArrastado);

  event.dataTransfer.clearData();
}
