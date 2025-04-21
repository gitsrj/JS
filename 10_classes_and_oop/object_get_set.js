// Rarely used, mostly class based is used. (in getter_setter.js)

const User = {
    _email: 'S@google.com',
    _password: 'abcd',              // _ for private properties


    get email(){              // memory se leke aane ka
        return this._email.toUpperCase();    // laate laate raste me change kar diya
    },

    set email(value){         // email ek method nahi property hi hai
        this._email = value;
    },
}

const tea = Object.create(User);
console.log(tea.email);


