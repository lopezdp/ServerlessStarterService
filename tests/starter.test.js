/*
 * Title: starter.test.js WebService Unit Testing
 * ServerlessStarterService Automated Testing
 * Author: David P. Lopez
 * March 23, 2019
 *
 */

import { starterService } from "../handler.js";

// FIXME: Correct eslint `no-undef` errors
test("Initial Starter Service Unit Testing", () => {

  let test = starterService();

  // FIXME: Need to retrieve value from response object here
  console.log("output: " + test);
  // Check edge or corner case in String.
  // Verify String value in lambda outputs in response...
  expect(test).toMatch(/executed/);
});
