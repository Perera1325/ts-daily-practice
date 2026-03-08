"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserService {
    users = [];
    addUser(user) {
        this.users.push(user);
    }
    getAllUsers() {
        return this.users;
    }
    findUserByEmail(email) {
        return this.users.find(user => user.email === email);
    }
}
// Demo usage
const service = new UserService();
service.addUser({ id: 1, name: "Vinod", email: "vinod@mail.com" });
service.addUser({ id: 2, name: "Alex", email: "alex@mail.com" });
console.log("All users:", service.getAllUsers());
console.log("Find user:", service.findUserByEmail("vinod@mail.com"));
//# sourceMappingURL=day4-user-service.js.map