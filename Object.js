// Object De-structing
const me = {
  name: "Sethupathi Mahendran",
  occupation: "Web Stuff",
  age: 25,
  location: "Chennai",
  //   getAge() {
  //     return this.age;
  //   },
};

// console.log(me.getAge());
const { name, age } = me;

// console.log(name);
// console.log(age);

const myArray = [1, "Sethu", [1, 2, 3]];

const [x, y, z] = myArray;
// console.log(z);

function getDeails({ location, age, name }) {
  return location + " " + age + " " + name;
}

// console.log(getAge(me));

function getObject({ age, ...rest }) {
  //Except Rest everything will be send as object
  console.log(rest);
  //return name;
}
// console.log(getObject(me));

function makeNewPerson({ age, ...rest }, name) {
  rest.age = 44;
  rest.name = name;
  return rest;
}

// console.log(makeNewPerson(me, "Sarath"));

function makeNewObject({ name, ...rest }) {
  return {
    name: "NewPerson",
    ...rest,
  };
}

// console.log(makeNewObject(me));

const getName4 = ({ name }) => {
  return { name };
};

console.log(getName4(me));

document.getElementById("myButton").addEventListener("click", function () {
  console.log("Button was clicked");
});
