class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is : ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourses(){
        console.log(`New course was added by : ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123");
chai.logMe()

const Tea = new User("masalaChai")
Tea.logMe()

console.log(chai instanceof Teacher)
console.log(chai instanceof User)