var Okay = { role: "Admin", permission: ["Yes"] };
function user(person) {
    if (person.role === "Admin") {
        console.log(person.role + " " + person.permission);
    }
    else {
        console.log(person.points);
    }
}
user(Okay);
function operator(user) {
    if ("permission" in user) {
        console.log(user.permission);
    }
    else {
        console.log(user.points);
    }
}
operator(Okay);
// Array of Unions and Unions of Arrays
var array = ["a", 1, "b", 2];
