const { getAllUsers, updateUser, deleteUser } = require("../assets/js/SQL.js");
const { User } = require("../assets/js/class/user.js");


// // Add a Cart
// async function addCard(ID, Name, Balance, Rank, Image) {
//   const cards = document.getElementById("Card");

//   // Color The Rank
//   switch (Rank) {
//     case "Owner":
//       rankColor = "danger";
//       break;
//     case "Admin":
//       rankColor = "success";
//       break;
//     case "Support":
//       rankColor = "primary";
//       break;
//     default:
//       rankColor = "secondary";
//       break;
//   }

//   // Create A Card
//   const card = document.createElement("div");
//   card.innerHTML = `
//   <div class="container my-3">
//   <div class="card mb-3 bg-dark text-white">
//   <div class="row g-0">
//     <div class="col-md-4 d-flex justify-content-center align-items-center ps-4">
//       <img src="${Image}" class="img-fluid rounded-circle" style="width: 125px; height: 125px; object-fit: cover;" alt="?">
//     </div>
//     <div class="col-md-8">
//       <div class="card-body pe-4" style="min-height: 158px;">
//         <div class="d-flex align-items-center">
//           <h5 class="card-title mb-0">${Name}</h5>
//           <span class="badge bg-${rankColor} ms-2">${Rank.toUpperCase()}</span>
//         </div>
//         <p class="card-text my-3">Balance : ${Balance}€</p>
//         <div class="d-grid gap-2 d-md-flex justify-content-md-end">
//           <button class="btn btn-primary me-md-2" disabled type="button">EDIT</button>
//           <button class="btn btn-danger" disabled type="button" onclick="deleteCard('${ID}')">DELETE</button>
//         </div>
//       </div>
//     </div>
//   </div>
//   </div>
//   </div>
//   `;
//   card.setAttribute("id", ID);
//   cards.appendChild(card);
// }

// // Delete A Card By ID
// async function deleteCard(ID) {
//   document.getElementById(ID).remove();
// }

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
