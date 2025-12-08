// Level 1 — Warm Up (Index Signatures)

// 1️⃣ Create a type

// Create a type called ScoreBoard that maps player name (string) to score (number).

// Then create an object with at least 3 players.

type ScoreBoard = { [keys: string]: number };

const players: ScoreBoard = {
  Sagar: 10,
  Saikat: 20,
  Rahul: 30,
};

// 2️⃣ Add a new player

// Add a new player after creation using [] notation.

players["Gandhi"] = 40;

console.log(players);

// ===========================

// Level 2 — Real World Mapping

// ===========================

// 3️⃣ Create a dictionary

// Type: PhoneBook

// keys: string (names)

// values: string (phone numbers)

// Add 3 entries.
// Then write a function:
// function getNumber(name: string): string | undefined
// Return the number or undefined if not found.

// type PhoneBook = { [names: string]: string };

// const level2 : PhoneBook= {
//   Saikat: "123",
//   Sagar: "123",
//   Elon: "123",
//   Elon1: "123",
//   Elon2: "123",
//   Elon3: "123",
// };

type PhoneBook2 = { [name: string]: string }[];

const level2: PhoneBook2 = [
  { name: "Saikat", phone: "123" },
  { name: "Sagar", phone: "456" },
  { name: "Mark", phone: "789" },
  { name: "Gandhi", phone: "101" },
];

function getNumber(name: string) {
  const found = level2.some((item) =>
    item.name.toLowerCase().includes(name.toLowerCase())
  );
  console.log(found ? "Yes" : "No");
}

const output = getNumber("sAiKaT");
// console.log(output);

// ===========================

// Level 3 — Type Safety

// ===========================

// 4️⃣ This must give error

// Create a type where every key is number and every value is boolean.
// Then try to assign a wrong type.

// Example:

// const data: YourType = {
//   10: true,
//   20: false,
//   30: "nope" // should be error

type level3 = { [name: number]: boolean };

const newUser: level3 = {
  1: true,
  2: true,
  3: true,
  //   4: "true",
};

// ===========================

// Level 4 — Make Your Brain Hurt

// ===========================

// 5️⃣ Union values

// Make a type:

// key: string
// value: number OR string
// Then use it:

// const mix: ??? = {
//   age: 25,
//   name: "Saikat",
//   height: 180,
//   country: "India",
// }

// Your job:

// write the type

// make this work

type name = { [name: string]: string | number };

const mix: name = {
  age: 25,
  name: "Saikat",
  height: 180,
  country: "India",
};

console.log(mix);
