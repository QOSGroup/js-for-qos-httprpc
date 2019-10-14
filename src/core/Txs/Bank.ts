import QOSRpc from '../QOSRpc';
import { IQSC } from '../types/common';
import { IBaseInput } from '../types/IBaseInput';

interface ITransferInput extends IBaseInput {
  qos: number;
  qscs: IQSC[];
}

export default class Bank {
  public rpc: QOSRpc;
  constructor(rpc: QOSRpc) {
    this.rpc = rpc;
  }

  public async getTransferTxJson(address: string, data: ITransferInput) {
    const res = await this.rpc.request({
      method: 'POST',
      url: `/bank​/accounts​/${address}​/transfers`,
      data
    })
    return res
  }

  // public async
}