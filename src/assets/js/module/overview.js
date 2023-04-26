async function addOverview(Name, Count) {
  const overview = document.getElementById("Overview");

  const item = document.createElement("div");
  item.className = "col-md-3 mb-4";
  item.innerHTML = `
      <div class="card bg-card-dark text-white">
        <div class="card-body text-center">
          <h5 class="card-title">${Name}</h5>
          <p class="card-text display-1">${Count}</p>
        </div>
      </div>
    `;

  item.setAttribute("id", Name);
  overview.appendChild(item);
}

module.exports = {
  addOverview,
};
