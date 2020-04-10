import { getConnection } from "typeorm";

import { MemberRegisteredEvent } from "./member";
import { MemberRegistereds } from "./models/members/MemberRegistereds";

export function handleMemberRegistered(event: MemberRegisteredEvent) {
  const member = new MemberRegistereds();
  member.memberId = event.memberId;
  member.accountId = event.accountId;

  console.log(member);

  getConnection().getRepository(MemberRegistereds).save(member);
}
