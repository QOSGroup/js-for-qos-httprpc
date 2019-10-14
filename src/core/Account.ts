import QOSRpc from './QOSRpc';
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
      this.privateKey = encodeBase64(keyPair.secretKey);
    }
  }

  public async sendTx() {
    const res = await this.rpc.tx.sendTx();
    return res;
  }
}

export default Account;
