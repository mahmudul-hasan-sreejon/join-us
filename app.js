
const faker = require("faker");

function generateFakeUsers() {
    for(let i = 1; i <= 500; ++i) {
        console.log(faker.internet.email());
        console.log(faker.date.past());
    }
}

generateFakeUsers();