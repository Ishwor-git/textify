// overlay events

let overlay = document.getElementById("overlay");
overlay.addEventListener("click", function () {
  overlay.classList.add("hidden");
});

let closeResult = document.getElementById("closeResult");
closeResult.addEventListener("click", function () {
  overlay.classList.add("hidden");
});
