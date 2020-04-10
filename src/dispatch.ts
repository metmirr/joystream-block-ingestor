import { Event } from "@polkadot/types/interfaces";

import { handleMemberRegistered } from "./mapping";
import { MEMBERREGISTERED } from "./constants";
import { MemberRegisteredEvent } from "./member";
import { mapParamsToProps } from "./helper";

export async function dispatch(event: Event) {
  const { section, method, data, typeDef } = event;

  if (section === "members") {
    switch (method) {
      case MEMBERREGISTERED:
        const eventClass = new MemberRegisteredEvent();
        mapParamsToProps(data, typeDef, eventClass);

        handleMemberRegistered(eventClass);
        break;

      default:
        break;
    }
  }
}
