import Account from '../Account';
import { after } from '../common/decorator';
import { componentSignData } from '../common/sign';
import QOSRpc from '../QOSRpc';
import { IQSC } from '../types/common';
import { IBaseInput } from '../types/IBaseInput';
import logger from '../utils/log';
import Tx from './Tx';

export interface ITransferInput extends IBaseInput {
  qos: string;
  qscs?: IQSC[];
}

async function sendTx(target: Bank, result: any) {
  const res = await target.sendTx({ tx: result })
  logger.debug('res in Bank sendTX ', res)
  return res
}

export default class Bank extends Tx {
  constructor(rpc: QOSRpc, account: Account) {
    super(rpc, account)
  }

  @after(componentSignData, sendTx)
  public async execTransferTx(address: string, data: ITransferInput) {
    const res = await this.rpc.post(
      `/bank/accounts/${address}/transfers`,
      data
    );
    logger.debug('execTransfer result', res)
    return res
  }

  @after(componentSignData, sendTx)
  public async execCheckTx(data: ITransferInput) {
    // const res = await this.rpc.request({
    //   method: 'POST',
    const res = await this.rpc.post(
      '/bank/accounts/checks',
      data
    )
    return res
  }
}