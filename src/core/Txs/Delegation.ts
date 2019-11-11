import Account from '../Account';
import { after } from '../common/decorator';
import { componentSignData } from '../common/sign';
import QOSRpc from '../QOSRpc';
import { IBaseInput } from '../types/IBaseInput';
import logger from '../utils/log';
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
  logger.debug('res in sendTX ', res)
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
    logger.debug('execCreateDelegate result', res)
    return res
  }

  @after(componentSignData, sendTx)
  public async execModifyDelegationTx(validatorAddress: string, data: IModifyDelegationInput) {
    const res = await this.rpc.post(
      `/stake/delegators/${validatorAddress}/modify_delegations`,
      data
    );
    logger.debug('execModifyDelegation result', res)
    return res
  }

  @after(componentSignData, sendTx)
  public async execUnbondDelegationTx(validatorAddress: string, data: IUnbondDelegationInput) {
    const res = await this.rpc.post(
      `/stake/delegators/${validatorAddress}/unbond_delegations`,
      data
    );
    logger.debug('execUnbondDelegation result', res)
    return res
  }

}