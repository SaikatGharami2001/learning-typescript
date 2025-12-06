"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    { id: 1, name: "Saikat" },
    { id: 2, name: "David" },
    { id: 3, name: "Ghost" },
];
function findUser(id) {
    return users.find(user => user.id === id);
}
const result = findUser(2);
if (result) {
    console.log(`Found user: ${result.name}`);
}
else {
    console.log("User not found");
}
