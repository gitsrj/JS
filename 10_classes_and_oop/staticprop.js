class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }

}

const sahil = new User("srj")
// console.log(sahil.createId());

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }

}

const hitesh = new Teacher("apple", "apple@gmail.com");

console.log(hitesh.createId());