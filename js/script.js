// console.log("BiteBox JavaScript is working!");

// // ============================================================
// // BiteBox JavaScript - Interactive Features
// // ============================================================

// // TASK 1: Welcome Message
// let restaurantName = "BiteBox";
// alert("Welcome to " + restaurantName + "!");

// // TASK 2: Ask for Customer Name
// let customerName = prompt(
//     "Welcome to " + restaurantName + "!\n\nWhat is your name?"
// );

// // TASK 3: Personalized Welcome
// alert(
//     "Hello " + customerName + "!\n\nWelcome to BiteBox."
// );

// // TASK 4: Ask to Explore Menu
// let exploreMenu = confirm(
//     "Would you like to explore our menu?"
// );

// // TASK 5: Respond to Choice (if-else)
// if (exploreMenu) {
//     alert("Great! Let's explore the BiteBox menu.");
// } else {
//     alert("No problem! You can explore the menu anytime.");
// }

// // TASK 6: Menu Category Selection (switch)
// let choice = prompt(
//     "Choose a BiteBox category:\n" +
//     "1. Pizza\n" +
//     "2. Burgers\n" +
//     "3. Pasta\n" +
//     "4. Desserts"
// );

// switch (choice) {
//     case "1":
//         alert("You selected Pizza!");
//         break;
//     case "2":
//         alert("You selected Burgers!");
//         break;
//     case "3":
//         alert("You selected Pasta!");
//         break;
//     case "4":
//         alert("You selected Desserts!");
//         break;
//     default:
//         alert("Invalid category selection.");
// }

// // TASK 7: Food Order Loop
// for (let i = 1; i <= 3; i++) {
//     let food = prompt("Enter food item " + i);
//     let quantity = prompt("Enter quantity for " + food);
//     console.log(food + " - Quantity: " + quantity);
// }

// console.log("Order complete! Thank you for visiting BiteBox.");