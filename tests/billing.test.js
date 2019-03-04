/*
 * Title: billing.test.js WebService Unit Testing
 * SpecTruMetRx - MediPayCore
 * Author: David P. Lopez
 * November 30, 2018
 *
 */
import { calculateCost } from "../libs/billing-lib";

test("Lowest subscription tier", () => {
  const txnType = "SubscriptionFee";
  const txnQty = 10;
  const cost = 500.00;
  const expectedCost = calculateCost(txnType, txnQty);

  expect(cost).toEqual(expectedCost);
});

test("Middle subscription tier", () => {
  const txnType = "SubscriptionFee";
  const txnQty = 100;
  const cost = 5000.00;
  const expectedCost = calculateCost(txnType, txnQty);

  expect(cost).toEqual(expectedCost);
});

test("Highest subscription tier", () => {
  const txnType = "SubscriptionFee";
  const txnQty = 101;
  const cost = 5050.00;
  const expectedCost = calculateCost(txnType, txnQty);

  expect(cost).toEqual(expectedCost);
});

test("Lowest txn tier", () => {
  const txnType = "TransactionFee";
  const txnQty = 10;
  const cost = 50.00;
  const expectedCost = calculateCost(txnType, txnQty);

  expect(cost).toEqual(expectedCost);
});

test("Middle txn tier", () => {
  const txnType = "TransactionFee";
  const txnQty = 100;
  const cost = 500.00;
  const expectedCost = calculateCost(txnType, txnQty);

  expect(cost).toEqual(expectedCost);
});

test("Highest txn tier", () => {
  const txnType = "TransactionFee";
  const txnQty = 101;
  const cost = 505.00;
  const expectedCost = calculateCost(txnType, txnQty);

  expect(cost).toEqual(expectedCost);
});
