const { dataType, getAllData, deleteData, updateData } = require("../assets/js/SQL.js");
const { addUser, removeUser } = require("../assets/js/class/user.js");

// Fetch Users
async function fetchUsers() {
  // Get All Users
  const { users, userCount } = await getAllData(dataType.user);

  // Add The Cards in a Loop
  for (let i = 0; i < userCount; i++) {
    const user = users[i];
    addUser(user.ID, user.NAME, user.BALANCE, user.RANK, user.IMAGE_URL);
  }
  // Update Title Bar
  document.title = `Vortex Manager - ${userCount} User/s`;
}

// Fetch Cards
fetchUsers();
