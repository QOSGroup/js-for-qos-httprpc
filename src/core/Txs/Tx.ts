import QOSRpc from '../..';
import Account from '../Account';

export default class Tx {
  public rpc: QOSRpc;
  public account: Account;
  constructor(rpc: QOSRpc, account: Account) {
    this.rpc = rpc;
    this.account = account;
  }

  public async sendTx({ tx, mode = 'block' }: { tx: string, mode?: 'block' | 'sync' | 'async'}) {
    const res = await  this.rpc.request({
      method: 'POST',
      url: '/txs',
      data: { tx, mode }
    }).catch(err => console.log(err))
    return res
  }
}