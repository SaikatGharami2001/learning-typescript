const Roles = ["admin", "user", "operator"] as const;

type Role = (typeof Roles)[number];

function setRole(r: Role) {
  console.log(r);
}

setRole("admin");
