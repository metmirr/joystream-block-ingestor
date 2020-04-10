import { Column, Entity, BeforeInsert } from "typeorm";
import * as shortid from "shortid";

@Entity("member_registereds", { schema: "public" })
export class MemberRegistereds {
  @Column("character varying", {
    primary: true,
    name: "id",
  })
  id: string;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("integer", { name: "version", default: 1 })
  version: number;

  @Column("integer", { name: "member_id" })
  memberId: number;

  @Column("character varying", { name: "account_id" })
  accountId: string;

  @Column("integer", { name: "created_by_id" })
  createdById: number;

  @BeforeInsert()
  setId() {
    this.id = shortid.generate();
    this.version = 1;
    this.createdById = 1;
  }
}
