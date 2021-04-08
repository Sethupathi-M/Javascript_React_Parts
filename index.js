function greetings(name) {
  return "Hello " + name;
}

// String Interpolatation
function greetings_1(name) {
  return `Hello ${name}`;
}

console.log(greetings_1("Sethu"));

// If we are gonna use the var type inside the for loop it is acceible outside of the for loop for the whole function
// Let and const are "Block Scope" - to make it not accecisible outside the for loop.
function typesOfScope() {
  var x = [5, 6, 7];

  for (var i = 0; i < x.length; i++) {
    var item = x[i];
    console.log(item);
  }

  console.log("Using var type for items");
  console.log(i);
  console.log(item);
  console.log("------------------------");

  for (let j = 0; j < x.length; j++) {
    const item1 = x[j];
    console.log(item1);
  }

  console.log("Using let and const type for items");
  // Uncomment this
  //   console.log(j);
  //   console.log(item1);
}

typesOfScope();
