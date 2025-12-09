const tuples: [string, number] = ["Saikat", 3];
console.log(tuples);

type newer = [string, string, number];

const bro: newer = ["Saikat", "Sagar", 33];
console.log(bro);

function Nigga(a: number, b?: string, c?: number) {
  const p = a ?? 3000;
  const p1 = b ?? "Boy";
  const p2 = c ?? 3;
  return `${p} ${p1} ${p2}`;
}

console.log(Nigga(1));
