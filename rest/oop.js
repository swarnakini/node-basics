//Class, Objects , method and Constructor
class user {
  constructor(username, emailid, password) {
    this.username = username;
    this.emailid = emailid;
    this.password = password;
  }
  mymethod() {
    return `${this.username.toUpperCase()}`;
  }
}

const obj = new user("swarna", "d@gmail.com", 123);
console.log(obj.mymethod());
