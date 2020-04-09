import { Column, Entity } from "typeorm";

@Entity("member_registereds", { schema: "public" })
export class MemberRegistereds {
  @Column("character varying", { primary: true, name: "id" })
  id: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("integer", { name: "version" })
  version: number;

  @Column("integer", { name: "member_id" })
  memberId: number;

  @Column("character varying", { name: "account_id" })
  accountId: string;

  @Column("integer", { name: "created_by_id" })
  createdById: number;
}
