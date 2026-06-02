//@ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor((budget / dayRate(ratePerHour)));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
/*
Round down the result from division to get the number of full months.
100% - discount equals the percentage charged after the discount is applied.
Use %, the remainder operator, to calculate the number of days exceeding full months.
Add the discounted month rates and full day rates and round it up
*/
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  if (discount == 0) {
    return  Math.ceil((numDays * dayRate(ratePerHour)))
  } 
  // full month is 22 days
  let fullMonth = Math.floor(numDays / 22);
  // Number of days in the month
  let daysInMonth = fullMonth * 22
  // Extra days charged at full price
  let extraDays = Math.ceil(numDays % 22);
  // Calculate full month discount
  let fullDiscount = ((daysInMonth * dayRate(ratePerHour)) * discount);
  // Calculate total hours
  let totalHours = (daysInMonth + extraDays) * 8;
  // Calculate discounted month plus extra days
  let price = Math.ceil(((totalHours * ratePerHour) - fullDiscount));
  
  console.log(`Discount applied: ${discount}`)
  console.log(`Number of full months: ${fullMonth}`);
  console.log(`Total number of days in full month: ${daysInMonth}`)
  console.log(`Number of extra days: ${extraDays}`);
  console.log(`Full discount price: ${fullDiscount}`);
  console.log(`Total hours worked: ${totalHours}`);
  console.log(`Total price: ${price}`);
  return price
  
}
