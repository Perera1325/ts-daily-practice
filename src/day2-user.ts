interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const user: User = {
  id: 1,
  name: "Vinod",
  email: "vinod@mail.com",
  isActive: true
};

function printUser(user: User): void {
  console.log("User Details:");
  console.log("ID:", user.id);
  console.log("Name:", user.name);
  console.log("Email:", user.email);
  console.log("Active:", user.isActive);
}

printUser(user);
