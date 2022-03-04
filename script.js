const btnCopy = document.getElementById("btnCopy");

const copySec = document.getElementById("main");

btnCopy.addEventListener("click", (e) => {
  const copySec = formCopy.innerHTML;
  navigator.clipboard.writeText(copySec);
});
