const { rankColor } = require("./rankColor");

class Card {
  constructor(ID, Name, Balance, Rank, Image) { 

    this.ID = ID;
    this.Name = Name;
    this.Balance = Balance;
    this.Rank = Rank;
    this.Image = Image;

    this.init(ID, Name, Balance, Rank, Image);
  }

  async init(ID, Name, Balance, Rank, Image) {
    const cards = document.getElementById("Card");


    console.log(  new rankColor(Rank))

    // Create A Card
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="container my-3">
    <div class="card mb-3 bg-dark text-white">
    <div class="row g-0">
        <div class="col-md-4 d-flex justify-content-center align-items-center ps-4">
        <img src="${Image}" class="img-fluid rounded-circle" style="width: 125px; height: 125px; object-fit: cover;" alt="?">
        </div>
        <div class="col-md-8">
        <div class="card-body pe-4" style="min-height: 158px;">
            <div class="d-flex align-items-center">
            <h5 class="card-title mb-0">${Name}</h5>
            <span class="badge bg-${await new rankColor(Rank)} ms-2">${Rank}</span>
            </div>
            <p class="card-text my-3">Balance : ${Balance}€</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-primary me-md-2" disabled type="button">EDIT</button>
            <button class="btn btn-danger" disabled type="button" onclick="deleteCard('${ID}')">DELETE</button>
            </div>
        </div>
        </div>
    </div>
    </div>
    </div>
    `;
    card.setAttribute("id", ID);
    cards.appendChild(card);
  }
}

module.exports = {
  Card,
};
