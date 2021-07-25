/// <reference path="utility-functions.ts" />

let result = Utility.maxBooksAllowed(30);
console.log(result);

import util = Utility.Fees;
// result = Utility.Fees.calculateLateFee(1);
result = util.calculateLateFee(1);
console.log(result);