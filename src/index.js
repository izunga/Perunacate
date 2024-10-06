// XXX even though ethers is not used in the code below, it's very likely
// it will be used by any DApp, so we are already including it here
const { ethers } = require("ethers");
import { getAddress, hexToString, stringToHex } from "viem";
import { createApp,  } from "@deroll/app";
import { createWallet } from "@deroll/wallet";
//const { getAddress, hexToString, stringToHex } = require("viem");

const app = createApp({url: process.env.ROLLUP_HTTP_SERVER_URL || "http://127.0.0.1:5004"});
const wallet = createWallet();

app.addAdvanceHandler(wallet.handler);


const rollup_server = process.env.ROLLUP_HTTP_SERVER_URL;
console.log("HTTP rollup_server url is " + rollup_server);

async function handle_advance ({ metadata, payload }) {// to mutate
  //console.log("Received advance request data " + JSON.stringify(data));

  console.log("Input: ", metadata, payload);
  const sender = getAddress(metadata.msg_sender);//0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC
  console.log("TEST 1");
  console.log(metadata.msg_sender);
  console.log(hexToString(payload));

  try {
    console.log("TEST 2");
    const jsonpayload = JSON.parse(hexToString(payload));
    console.log("TEST 3");
    console.log(jsonpayload);
    if (jsonpayload.method === "ether_withdraw") {
      console.log("Withdrawing ether");
      console.log(jsonpayload.amount);  
      const amountToWithdraw = jsonpayload.amount; // No type annotation needed
      console.log("mini test");
      //const voucher = await wallet.withdrawEther(sender, amountToWithdraw);
      console.log("TEST 4");
      //await app.createVoucher(voucher);
      console.log("TEST 5");
      var output= "Amount paid: "+jsonpayload.amount;
      return "accept";
    }
    
  } catch (e) {
    console.log("Failed");
    app.createReport({ payload: stringToHex(String(e)) });
    return "reject";
  }

  return "accept";
};

async function handle_inspect(data) {// to check/inspect 
  console.log("Received inspect request data " + JSON.stringify(data));
  return "accept";
}

var handlers = {
  advance_state: handle_advance,
  inspect_state: handle_inspect,
};

var finish = { status: "accept" };

(async () => {
  while (true) {
    const finish_req = await fetch(rollup_server + "/finish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "accept" }),
    });

    console.log("Received finish status " + finish_req.status);

    if (finish_req.status == 202) {
      console.log("No pending rollup request, trying again");
    } else {
      const rollup_req = await finish_req.json();
      var handler = handlers[rollup_req["request_type"]];
      finish["status"] = await handler(rollup_req["data"]);
    }
  }
})();
