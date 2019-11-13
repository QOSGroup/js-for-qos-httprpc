import Account from '../Account';
import { after } from '../common/decorator';
import { componentSignData } from '../common/sign';
import QOSRpc from '../QOSRpc';
import { IBaseInput } from '../types/IBaseInput';
import Tx from './Tx';

export interface ICreateDelegationInput extends IBaseInput {
  amount: string;
  is_compound?: boolean;
}

export interface IModifyDelegationInput extends IBaseInput {
  is_compound: boolean;
}

export interface IUnbondDelegationInput extends IBaseInput {
  unbond_amount?: string;
  unbond_all?: boolean;
}

async function sendTx(target: Delegation, result: any) {
  const res = await target.sendTx({ tx: result })
  return res
}

export default class Delegation extends Tx {
  constructor(rpc: QOSRpc, account: Account) {
    super(rpc, account)
  }

  @after(componentSignData, sendTx)
  public async execCreateDelegationTx(validatorAddress: string, data: ICreateDelegationInput) {
    const res = await this.rpc.post(
      `/stake/delegators/${validatorAddress}/delegations`,
      data
    );
    return res
  }

  @after(componentSignData, sendTx)
  public async execModifyDelegationTx(validatorAddress: string, data: IModifyDelegationInput) {
    const res = await this.rpc.post(
      `/stake/delegators/${validatorAddress}/modify_delegations`,
      data
    );
    return res
  }

  @after(componentSignData, sendTx)
  public async execUnbondDelegationTx(validatorAddress: string, data: IUnbondDelegationInput) {
    const res = await this.rpc.post(
      `/stake/delegators/${validatorAddress}/unbond_delegations`,
      data
    );
    return res
  }

  public async execQueryDelegationAll(delegatorAddress: string) {
    const res = await this.rpc.get(
      `/stake/delegators/${delegatorAddress}/delegations`
    );
    return res
  }

  public async execQueryDelegationOne(delegatorAddress: string, validatorAddress: string) {
    const res = await this.rpc.get(
      `/stake/delegators/${delegatorAddress}/validators/${validatorAddress}`
    );
    return res
  }

  public async execQueryValidatorOne(validatorAddress: string){
    const res = await this.rpc.get(
      `/stake/validators/${validatorAddress}`
    )
    return res
  }

}