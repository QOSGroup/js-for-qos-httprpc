
import { generateMnemonic } from 'bip39';
require('qosKeys');
import { buf2hex, stringToBuffer } from './utils';

export default class SecretKey {
  public generateMnemonic() {
    // 商 256，生成24个助记单词, 商 128，生成12个助记单词
    const mnemonic = generateMnemonic(128);
    return mnemonic;
  }

  public genarateKeyPair(mnemonic: string) {
    // const seed = mnemonicToSeedSync(mnemonic);
    // 从助记词中获取私钥种子
    const [prikeyBz, pubkeyBz, err] = (global as any).qosKeys.DeriveQOSKey(mnemonic);
    // const [privateSeed, err] = (global as any).hdpath.DerivePrivateKeyForPath(secret, chaincode, "44'/389'/0'/0/0")

    if (err != null) {
      // tslint:disable-next-line: no-console
      console.log(err)
    }
    // const secret256 = getHash256(privateSeed);
    // const keyPair = ed25519.createKeyPair(new Buffer(secret256));
    // keyPair.bech32pubkey = this.getBech32PubKey(keyPair.publicKey)
    return {
      publicKey: pubkeyBz,
      privateKey: prikeyBz,
      bech32pubkey: this.getBech32PubKey(pubkeyBz)
    }
  }

  public getBech32PubKey(publicKey) {
    const [bech32pubkey, err2] = (global as any).qosKeys.Bech32ifyQOSAccPubKey(publicKey);
    if (err2 != null) {
      throw err2;
    }
    return bech32pubkey
  }

  public recoveryKeyPair(privateKey: Uint8Array) {
    const publicKey = stringToBuffer(buf2hex(privateKey).substring(64, 128), 'hex')
    return {
      publicKey,
      privateKey,
      bech32pubkey: this.getBech32PubKey(publicKey)
    }
  }

  public test() {

    // return keyPair
  }

  public getAddress(publicKey: Uint8Array) {
    const [addrBech32, err] = (global as any).qosKeys.Bech32ifyQOSAccAddressFromPubKey(publicKey);
    if (err != null) {
      throw err;
    }
    return addrBech32
    // const pkAarry = getHash256(publicKey);
    // const nw = bech32.toWords(Buffer.from(pkAarry.slice(0, 20)));
    // const addr = bech32.encode('qosacc', nw);
    // return addr;
  }
}
