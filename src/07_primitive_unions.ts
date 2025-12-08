function union(id: string | number) {
  if (typeof id === "string") {
    const upperCase = id.toUpperCase();
    return upperCase;
  } else {
    const fixed = id.toFixed(2);
    return fixed;
  }
}

const a = union(3);
console.log(a);
