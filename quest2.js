
const mainForm = document.getElementById('newForm');

class Form {
    constructor(firstName, lastName, age, country, picture) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.picture = picture;
    }

    async checkField(){
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const age = document.getElementById('age').value;
        const country = document.getElementById('country').value;
        const picture = document.getElementById('picture').value;
        if (firstName === '' || lastName === '' || age === '' || country === '' || picture === '') {
            throw new Error('Please fill out all the fields.');
          } 
    }

    createSentence(){
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const age = document.getElementById('age').value;
        const country = document.getElementById('country').value;
        //const picture = document.getElementById('picture').value;
        return (`My name is ${firstName} ${lastName}. I am from ${country}. I am ${age} years old.`);
    }
}

const formInstance = new Form(firstName, lastName, age, country, picture);

mainForm.addEventListener("submit",async (event) => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const country = document.getElementById('country').value;
    const picture = document.getElementById('picture').value;
    event.preventDefault();
    //console.log("firstName", firstName);
    //createSentence()
try {
    await formInstance.checkField();
    alert(formInstance.createSentence());
} catch (error) {
    alert(error.message);
}

})