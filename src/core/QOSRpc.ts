import nacl from 'tweetnacl';
import Account from './Account';
import SecretKey from './SecretKey';
import Tx from './Tx';
import { decodeBase64 } from './utils';
import createAxioRequest from './utils/request';

class QOSRpc {

  public get request() {
    return createAxioRequest(this.config.baseUrl);
  }

  public get tx() {
    if (!this._tx) {
      this._tx = new Tx(this)
    }
    return this._tx
  }
  public config: { readonly baseUrl: string; };
  public key: SecretKey;
  private _tx!: Tx;

  constructor(config: { readonly baseUrl: string; }) {
    this.config = config;
    this.key = new SecretKey()
  }

  public newAccount(mnemonic: string) {
    const keyPair = this.key.genarateKeyPair(mnemonic);

    return new Account(this, keyPair, mnemonic);
  }

  /**
   * 根据私钥恢复账户
   * @param {string} privateKey 私钥
   */
  public recoveryAccountByPrivateKey(privateKey) {
    const privateKeyBuffer = decodeBase64(privateKey);
    const keyPair = nacl.sign.keyPair.fromSecretKey(privateKeyBuffer);
    return new Account(this, keyPair);
  }

}

export default QOSRpc