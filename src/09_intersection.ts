type inter1 = { id: string };
type inter2 = { name: string };
type Entity = inter1 & inter2;

const e: Entity = { id: "Paris", name: "Saikat" };
console.log(e);

// Another Example

type name = { name: string };
type email = { email: string };

type both = name & email;

const user: both = { name: "Saikat Gharami", email: "saikat@gmail.com" };
console.log(user);

// Another Example

type Product = { id: string; title: string };
type Price = { price: number };
type PriceProduct = Product & Price;

const details: PriceProduct = { id: "1", title: "Phone", price: 399 };
console.log(details);
