interface User {
    name: string;
    id: number;
  }
  
  class UserAccount {
    name: string;
    id: number;
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  }
  
  const users: User = new UserAccount("Murphy", 1);