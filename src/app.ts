type Product = {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
};

const obj1: Product = {
  id: 1,
  title: "Mobile phone",
  price: 499,
  inStock: true,
};

const obj2: Product = {
  id: 2,
  title: "Mobile phone",
  price: 499,
  inStock: true,
};

const obj3: Product = {
  id: 3,
  title: "Mobile phone",
  price: 499,
  inStock: true,
};

const items: Product[] = [obj1, obj2];
items.push(obj3);
items.push(obj3);

console.log(items);

type Count1 = Record<"likes" | "views" | "shares", number>;

// So this is shortand for

type Count2 = Record<
  "I" | "want" | "to" | "settle" | "in" | "Turkey",
  string | number
>;

const hey: Count2 = {
  I: 3,
  want: "Yes",
  to: "Yes",
  settle: "Yes",
  in: "Yes",
  Turkey: "Yes",
};

type sign = { [index: string]: number };

const mySign: sign = {
  Saikat: 1,
  Sagar: 1,
};

mySign.Rahul = 9;
mySign["real"] = 90;

console.log(mySign);
