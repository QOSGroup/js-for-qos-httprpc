import Account from '../Account';
import { after } from '../common/decorator';
import { componentSignData } from '../common/sign';
import QOSRpc from '../QOSRpc';
import { IQSC } from '../types/common';
import { IBaseInput } from '../types/IBaseInput';
import Tx from './Tx';

interface ITransferInput extends IBaseInput {
  qos: string;
  qscs?: IQSC[];
}

async function sendTx(target: Bank, result: any) {
  const res = await target.sendTx({ tx: result })
  // logger.debug(res)
  return res
}

export default class Bank extends Tx {
  constructor(rpc: QOSRpc, account: Account) {
    super(rpc, account)
  }

  @after(componentSignData, sendTx)
  public async execTransferTx(address: string, data: ITransferInput) {
    // logger.debug('execTransferTx: ', (`bank/accounts​/${address}/transfers`))
    // logger.debug(data)
    const res = await this.rpc.request({
      method: 'POST',
      url: `bank/accounts/${address}/transfers`,
      data
    })
    return res
  }

  // public async
}