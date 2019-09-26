import QOSRpc from './rpc';
import { IKeyPair } from './types/common';
import { encodeBase64 } from './utils';

class Account {
  public readonly qweb: QOSRpc;
  // public account: IAccount
  public qos: number = 0;
  public mnemonic: string;
  public keypair: IKeyPair;
  public address: string;
  public pubKey: string;
  public privateKey: string;

  constructor(controller: QOSRpc, keyPair?: IKeyPair, mnemonic?: string) {
    this.qweb = controller;
    if (keyPair) {
      this.mnemonic = mnemonic;
      this.keypair = keyPair;
      this.address = this.qweb.key.getAddress(keyPair.publicKey);
      this.pubKey = encodeBase64(keyPair.publicKey);
      this.privateKey = encodeBase64(keyPair.secretKey);
    }
  }
}

export default Account;
