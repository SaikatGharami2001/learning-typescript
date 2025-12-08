type Admin = { role: "Admin"; permission: string[] };
type Customer = { role: "Customer"; points: number };

const Okay: Admin = { role: "Admin", permission: ["Yes"] };

function user(person: Admin | Customer) {
  if (person.role === "Admin") {
    console.log(person.role + " " + person.permission);
  } else {
    console.log(person.points);
  }
}

user(Okay);

function operator(user: Admin | Customer) {
  if ("permission" in user) {
    console.log(user.permission);
  } else {
    console.log(user.points);
  }
}

operator(Okay);

// Array of Unions and Unions of Arrays

const array: (string | number)[] = ["a", 1, "b", 2];

const unionOfArrays: string[] | number[] =
  Math.random() > 0.5 ? ["a", "b", "c"] : [1, 2, 3];

console.log(unionOfArrays);
