interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getAllUsers(): User[] {
    return this.users;
  }

  findUserByEmail(email: string): User | undefined {
    return this.users.find(user => user.email === email);
  }
}

// Demo usage
const service = new UserService();

service.addUser({ id: 1, name: "Vinod", email: "vinod@mail.com" });
service.addUser({ id: 2, name: "Alex", email: "alex@mail.com" });

console.log("All users:", service.getAllUsers());
console.log("Find user:", service.findUserByEmail("vinod@mail.com"));
