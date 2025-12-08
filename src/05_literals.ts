type direction = "left" | "right" | "up";

function move(d: direction) {
  console.log(d);
}

const d1 = "left";
move(d1);

let d2: direction = "left";
move(d2);
