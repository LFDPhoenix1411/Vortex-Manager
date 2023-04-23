class rankColor {
  constructor(Rank) {
    this.Rank = Rank;
    return this.init(Rank);
  }

  async init(Rank) {
    switch (Rank) {
      // RED IF YOU ARE A OWNER
      case "Owner":
        return "danger";

      // GREEN IF YOU ARE A ADMIN
      case "Admin":
        return "success";

      // BLUE IF YOU ARE A SUPPORTER
      case "Support":
        return "primary";

      // DEFAULT COLOR IF IT DOSENT EXISTS
      default:
        return "secondary";
    }
  }
}

module.exports = {
  rankColor,
};
