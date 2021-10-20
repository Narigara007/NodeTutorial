const _ = require("lodash");
const items = [1, [4, 6, 7], 3, 4, 5, 6];
const newItems = _.flattenDeep(items);
console.log(newItems);
