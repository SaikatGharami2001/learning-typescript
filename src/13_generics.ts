function id<T>(x: T): T {
  return x;
}

// infers T
// id(5) -> T is a number
// id("string") -> T is a string
// id<number>(5)
const y = id(5);
console.log(y + 1);
