type num = { [keys: string]: number };

const number: num = {
  Hello: 123,
  Hi: 456,
};

number["Hey"] = 789;
// number["HeyThere"] = "10" // Error

console.log(number);

// Another Way

type moreNumber = Record<"Hello" | "Hi" | "Hey", number>;
const numbers: moreNumber = {
  Hello: 1,
  Hi: 2,
  Hey: 3,
};
console.log(numbers);
