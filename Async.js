// console.log("Start");

// setTimeout(() => {
//   console.log("Waited for 5 seconds to complete");
// }, 5000);

// console.log("End");

const { getUser, getUserComments } = require("./getUser");

//Synchrous
console.log(getUser(1));

//Asynchrous
console.log("Start");
getUser().then((user) => {
  console.log(user);
});
console.log("End");

async function getFriendsFirstComment() {
  const user = await getUser();
  const comment = await getUserComments(user);
  console.log(comment);
}

getFriendsFirstComment();
