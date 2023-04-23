const { getAllUsers, updateUser, deleteUser } = require("../assets/js/SQL.js");
const { User, removeUser } = require("../assets/js/class/user.js");

// Fetch Users
async function fetchUsers() {
  // Get All Users
  const { users, userCount } = await getAllUsers();

  // Add The Cards in a Loop
  for (let i = 0; i < userCount; i++) {
    const user = users[i];
    new User(user.ID, user.NAME, user.BALANCE, user.RANK, user.IMAGE_URL);
  }
  // Update Title Bar
  document.title = `Vortex Manager - ${userCount} User/s`;
}

// Fetch Cards
fetchUsers();
