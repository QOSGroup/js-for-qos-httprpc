import Account from '../Account';
import { after } from '../common/decorator';
import { componentSignData } from '../common/sign';
import QOSRpc from '../QOSRpc';
import { IQSC } from '../types/common';
import { IBaseInput } from '../types/IBaseInput';
import Tx from './Tx';

export interface IApproveInput extends IBaseInput {
    qos: string;
    qscs?: IQSC[];
}

async function sendTx(target: Approve, result: any) {
    const res = await target.sendTx({ tx: result })
    return res
}

export default class Approve extends Tx {
    constructor(rpc: QOSRpc, account: Account) {
      super(rpc, account)
    }

  @after(componentSignData, sendTx)
  public async execApproveTx(address: string, data: IApproveInput) {
    const res = await this.rpc.request({
      method: 'POST',
      url: `/approve/approves/${address}/create_approves`,
      data
    })
    return res
  }

  @after(componentSignData, sendTx)
  public async execCancelApproveTx(address: string, data: IApproveInput) {
    const res = await this.rpc.request({
      method: 'POST',
      url: `/approve/approves/${address}/cancel_approves`,
      data
    })
    return res
  }

  public async execIncreaseApproveTx(address: string, data: IApproveInput) {
    const res = await this.rpc.request({
      method: 'POST',
      url: `/approve/approves/${address}/increase_approves`,
      data
    })
    return res
  }

  @after(componentSignData, sendTx)
  public async execDecreaseApproveTx(address: string, data: IApproveInput) {
    const res = await this.rpc.request({
      method: 'POST',
      url: `/approve/approves/${address}/decrease_approves`,
      data
    })
    return res
  }

  @after(componentSignData, sendTx)
  public async execUseApproveTx(address: string, data: IApproveInput) {
    const res = await this.rpc.request({
      method: 'POST',
      url: `/approve/approves/${address}/use_approves`,
      data
    })
    return res
  }
}