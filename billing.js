/*
 * Title: billing.js WebService API
 * SpecTruMetRx - MediPayCore
 * Author: David P. Lopez
 * November 29, 2018
 *
 */

import stripePackage from "stripe";
import { calculateCost } from "./libs/billing-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  // source is credit card token to charge
  // txnType: SubscriptionFee or TransactionFee
  // txnQty: How many txn fees or how many subscription fees
  const {txnType, txnQty, source} = JSON.parse(event.body);
  const amount = calculateCost(txnType, txnQty);

  // TODO: Need condition to change description nased on txnType
  const description = "SpecTruMetRx Monthly Subscription Fees";

  // Load pvtKey from environment variables
  const stripe = stripePackage(process.env.stripePrivateKey);

  try {
    await stripe.charges.create({
      source,
      amount,
      description,
      currency: "usd"
    });
    return success({
      status: true
    });
  } catch ( e ) {
    return failure({
      message: e.message
    });
  }
}
