// Expression Chaining
const users = [
  { name: "Sethupathi Mahendran", nickName: "Coder" },
  { age: 35 },
];

const firstname = users[0].name.split(" ")[1];

//console.log(firstname);

const someArray = [
  function (name) {
    return "Hello " + name;
  },
];

//console.log(someArray[0]("Sethu"));

// console.log(getName(users[0])); // Even though the function declared is below this could still work
function getName(user) {
  return user.nickName || user.name.split(" ")[0];
}

// console.log(getName1(users[0])); // In function expression this will not work
//Function expression
const getName1 = function (user) {
  // this  is a function scope
  return user.nickName || user.name.split(" ")[0];
};

// Arrow Function expression
const getName2 = (user) => {
  // this  is a global scope
  return user.name.split(" ")[0];
};
console.log(getName2(users[0]));
