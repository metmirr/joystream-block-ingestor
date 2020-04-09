import "reflect-metadata";
import { WsProvider, ApiPromise } from "@polkadot/api";
import { registerJoystreamTypes } from "@joystream/types";
import { createConnection } from "typeorm";
import { config } from "dotenv";

import { getEvents } from "./MemberRegisteredEvent";

// load envs
config();
const nodeUrl: string = process.env.NODE_URL!;

async function main() {
  // type orm db connection
  await createConnection();

  registerJoystreamTypes();

  const provider = new WsProvider(nodeUrl);
  const api = await ApiPromise.create({ provider });

  getEvents(api);
  //api.disconnect();
}

main();
