import QOSRpc from './QOSRpc';
import Bank from './Txs/Bank';
import { IKeyPair } from './types/common';
import { encodeBase64 } from './utils';

class Account {
  public readonly rpc: QOSRpc;
  // public account: IAccount
  public qos: number = 0;
  public mnemonic: string;
  public keypair: IKeyPair;
  public address: string;
  public pubKey: string;
  public privateKey: string;

  constructor(controller: QOSRpc, keyPair?: IKeyPair, mnemonic?: string) {
    this.rpc = controller;
    if (keyPair) {
      this.mnemonic = mnemonic;
      this.keypair = keyPair;
      this.address = this.rpc.key.getAddress(keyPair.publicKey);
      this.pubKey = encodeBase64(keyPair.publicKey);
      this.privateKey = encodeBase64(keyPair.privateKey);
    }
  }

  public async sendTransferTx() {
    const tx = new Bank(this.rpc, this);
    const res = await tx.execTransferTx(
      'qosacc12z5jn6c3qu3j2zy80ydwjm8pjwu3h8tqk3cwya',
      {
        base: {
          'from': this.address,
          max_gas: '200000'
        },
        qos: '1000'
      });
    return res;
  }
}

export default Account;
