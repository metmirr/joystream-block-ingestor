import { Vec } from "@polkadot/types";
import { EventRecord } from "@polkadot/types/interfaces";

import { MemberRegistereds } from "./models/members/Event";
import { getConnection } from "typeorm";
import { ApiPromise } from "@polkadot/api";

export function getEvents(api: ApiPromise) {
  api.query.system.events((events: Vec<EventRecord>) => {
    // loop through the Vec<EventRecord>
    events.forEach((record: EventRecord) => {
      // extract the phase, event and the event types
      const { event, phase } = record;
      const types = event.typeDef;

      // show what we are busy with
      const eventName = `${event.section}:${
        event.method
      }:: (phase=${phase.toString()})`;
      console.log("EVENT NAME=========>>>>", eventName);

      // loop through each of the parameters, displaying the type and data
      const params = event.data.map(
        (data, index) => `${types[index].type}: ${data.toString()}`
      );
      console.log(`PARAMS=========>>>> ${params}`);

      if (event.section === "members") {
        const member = new MemberRegistereds();
        let { 0: memberId, 1: accountId } = event.data;
        member.createdAt = new Date();
        member.createdById = 1;
        member.memberId = +memberId;
        member.accountId = accountId.toString();
        member.version = 1;
        member.id = "123abc";
        console.log(member);

        let repository = getConnection().getRepository(MemberRegistereds);
        repository.save(member);
      }
    });
  });
}
