class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}sahil`
    }
    
    set password(value){
        this._password = value;
    }
}

const sahil = new User("Srj@google.com", "abc");
console.log(sahil.email)

// getter me jo write kiya vahi value return hogi dekhne wale ko, but value vahi set hogi through the setter jo user ne di hai.
// constructor se nahi but ab get and set se password set ho raha hai .

// constructor and getter aur setter k bich race lag jati hai jisse call stack full ho jata hai so, just variable ko _ dedete hai
// to avoid this race, by convention.
// basically they make the variable only accessible in within the class. (like private access specifier)

