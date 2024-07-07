class BaseClass {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`User name is : ${this.username}`);
  }
}

class DerivedClass extends BaseClass {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  logMederived() {
    console.log(`A new course is ${this.username}`);
  }
}

const objd = new DerivedClass("swarna", "s@gmail.com", 123);
const objb = new BaseClass("Gowri");
objd.logMe();
objd.logMederived();

objb.logMe();
