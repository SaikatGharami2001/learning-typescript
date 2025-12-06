interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: "Saikat" },
  { id: 2, name: "David" },
  { id: 3, name: "Ghost" },
];

function findUser(id: number): User | undefined {
  return users.find(user => user.id === id);
}

const result = findUser(3);

if (result) {
  console.log(`Found user: ${result.name}`);
} else {
  console.log("User not found");
}
