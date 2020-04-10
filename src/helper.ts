import { EventData } from "@polkadot/types/primitive/Generic/Event";
import { TypeDef } from "@polkadot/types/types";
import * as _ from "lodash";

import { BaseMemberEvent } from "./member";

/**
 * Parse event data and map it to Joystream corresponding event classes
 * @param data
 * @param types
 * @param eventClass Joystream corresponding event classes
 */
export function mapParamsToProps(
  data: EventData,
  types: TypeDef[],
  eventClass: BaseMemberEvent
) {
  let key: string;

  // loop through each of the parameters, get type and data
  data.map((data, index) => {
    key = _.camelCase(types[index].type);
    if (data) {
      eventClass[key] = data;
    }
  });
}
