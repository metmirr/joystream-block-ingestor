/**
 * This module contains corresponding classes for Joystream member module
 */

export class BaseMemberEvent {
  private _memberId: number;
  private _accountId: string;

  public set memberId(v: any) {
    this._memberId = +v;
  }

  public get memberId() {
    return this._memberId;
  }

  public set accountId(v: any) {
    this._accountId = v.toString();
  }

  public get accountId() {
    return this._accountId;
  }
}

export class MemberRegisteredEvent extends BaseMemberEvent {}
export class MemberUpdatedAboutTextEvent extends BaseMemberEvent {}
export class MemberUpdatedAvatarEvent extends BaseMemberEvent {}
export class MemberUpdatedHandleEvent extends BaseMemberEvent {}
export class MemberSetRootAccountEvent extends BaseMemberEvent {}
export class MemberSetControllerAccountEvent extends BaseMemberEvent {}
export class MemberRegisteredRoleEvent extends BaseMemberEvent {}
export class MemberUnregisteredRoleEvent extends BaseMemberEvent {}
