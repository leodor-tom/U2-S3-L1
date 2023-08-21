class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  static isOlder(perX, perY) {
    if (perX.age > perY.age) {
      console.log(perX.firstName + " è più grande di " + perY.firstName);
    } else {
      console.log(perY.firstName + " è più grande di " + perX.firstName);
    }
  }
}
const Users = [
  new User("Franco", "Neri", 35, "Roma"),
  new User("Giacomo", "Bianchi", 23, "Mauritius"),
  new User("Luigi", "Rossi", 13, "Parigi"),
  new User("Marco", "Verdi", 45, "Trapani"),
];

console.log(User.isOlder(Users[0], Users[1]));
console.log(User.isOlder(Users[2], Users[3]));
console.log(User.isOlder(Users[3], Users[0]));
console.log(User.isOlder(Users[2], Users[1]));

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  static isSameOwner(petX, petY) {
    return petX.ownerName === petY.ownerName;
  }
}

const petsStore = [];

const form = document.getElementById("form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const items = document.getElementsByClassName("formValue");
  const obj = {};
  const arr = Array.from(items);
  if (arr.length > 0) {
    arr.map((e, i) => {
      const name = e.getAttribute("name");
      obj[name] = e.value;
    });

    petsStore.push(new Pet(obj.petName, obj.ownerName, obj.species, obj.breed));

    if (petsStore.length > 1) {
      const condition = petsStore.filter(item => item.ownerName === obj.ownerName);
      if (condition.length > 0) console.log("it's ", true);
    }
  }
});
