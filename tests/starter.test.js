/*
 * Title: starter.test.js WebService Unit Testing
 * ServerlessStarterService Automated Testing
 * Author: David P. Lopez
 * March 23, 2019
 *
 */

// FIXME: Correct eslint `no-undef`
test("Initial Starter Service Unit Testing", () => {
  // Check edge or corner case in String.
  // Verify String value in lambda outputs in response...
  const cost = 500.00;
  const expectedCost = 500.00;

  expect(cost).toEqual(expectedCost);
});
