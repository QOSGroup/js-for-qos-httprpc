import QOSRpc from '../..';
import Account from '../Account';
import logger from '../utils/log';

export default class Tx {
  public rpc: QOSRpc;
  public account: Account;
  constructor(rpc: QOSRpc, account: Account) {
    this.rpc = rpc;
    this.account = account;
  }

  public async sendTx({ tx, mode = 'block' }: { tx: string, mode?: 'block' | 'sync' | 'async'}) {
    logger.debug('sendTx:===', JSON.stringify({ tx, mode }))
    const res = await this.rpc.request({
      method: 'POST',
      url: '/txs',
      data: { tx, mode }
    })
    return res
  }
}