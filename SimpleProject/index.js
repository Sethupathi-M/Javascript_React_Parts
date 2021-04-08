const luxon = require("luxon"); // require will search the local files if not found. It will search the node_modules folder.

const now = luxon.DateTime.local();
console.log(now.toISO());
