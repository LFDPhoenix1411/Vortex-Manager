const { Card } = require("./card");

class User {
  constructor(
    ID,
    Name,
    Balance,
    Rank = "User",
    Image = "../assets/img/default.png"
  ) {
    this.ID = ID;
    this.Name = Name;
    this.Balance = Balance;
    this.Rank = Rank;
    this.Image = Image;

    this.init(ID, Name, Balance, Rank, Image);
  }

  async init(ID, Name, Balance, Rank, Image) {
    await new Card(ID, Name, Balance, Rank, Image);
  }

  async remove() {}
}

module.exports = {
  User,
};
