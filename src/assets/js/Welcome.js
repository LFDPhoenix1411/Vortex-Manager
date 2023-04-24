const welcomePopup = document.getElementById("welcomeModal");
const popup = new bootstrap.Modal(welcomePopup);

popup.show();

// if (!localStorage.getItem("Visited?")) {
//   popup.show();
// }

// const closeButton = document.getElementById("closeBtn");
// closeButton.addEventListener("click", () => {
//   localStorage.setItem("Visited?", "true");
// });
