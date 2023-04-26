const { addOverview } = require("../assets/js/module/overview.js");
const { getCount, dataType } = require("../assets/js/SQL.js");

const infoPopup = document.getElementById("infoPopup");
const popup = new bootstrap.Modal(infoPopup);

popup.show();

// if (!localStorage.getItem("Visited?")) {
//   popup.show();
// }

// const closeButton = document.getElementById("closeBtn");
// closeButton.addEventListener("click", () => {
//   localStorage.setItem("Visited?", "true");
// });

async function init() {
  addOverview("Users", await getCount(dataType.user));
  addOverview("Tickets", await getCount(dataType.ticket));
  addOverview("Version", "0.1.7");
  addOverview("Build", "Alpha");
}

init();
