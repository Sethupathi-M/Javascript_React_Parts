// sconst { reject } = require("async");

const getUser = () => {
  const networkRespone = { name: "Brad", occupation: "Web Developer" };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(networkRespone);
    }, 5000);
  });
};

const getUserComments = ({ name }) => {
  return Promise.resolve("Hi, I am " + name);
};

module.exports.getUser = getUser;
module.exports.getUserComments = getUserComments;
