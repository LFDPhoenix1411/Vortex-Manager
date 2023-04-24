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

const updatePage = document.getElementById("UpdateTab");

fetch("https://api.github.com/repos/LFDPhoenix1411/Vortex-Manager/commits")
  .then((response) => response.json())
  .then((data) => {
    for (let commit of data) {
      const update = document.createElement("div");
      update.innerHTML = `
      <div class="container my-3">
        <div class="card mb-3 bg-dark text-white">
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body pe-4" style="min-height: 158px;">
                <div class="d-flex align-items-center">
                  <h5 class="card-title mb-0">${commit.commit.message}</h5>
                </div>
                <p class="card-text my-3">SHA: ${commit.sha}</p>
                <p class="card-text my-3">Author: ${commit.commit.author.name}</p>
                <p class="card-text my-3">Date: ${commit.commit.author.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>`;

      updatePage.appendChild(update);
    }
  })
  .catch((error) => console.error(error));
