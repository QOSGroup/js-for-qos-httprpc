
import { generateMnemonic } from 'bip39';
require('qosKeys');

export default class SecretKey {
  public generateMnemonic() {
    // 商 256，生成24个助记单词, 商 128，生成12个助记单词
    const mnemonic = generateMnemonic(128);
    return mnemonic;
  }

  public genarateKeyPair(mnemonic: string) {
    // 根据助记词得到账户信息
    const [prikey, pubkey, accaddr, priKeyBz, pubkeyBz, err] = (global as any).qosKeys.DeriveQOSKey(mnemonic);
    if (err != null) {
      console.log(err)
    }
    return {
      privateKey: prikey,
      pubKey: pubkey,
      accAddress: accaddr,
      privateKeyBz: (global as any).qosKeys.EncodeBase64(priKeyBz),
      pubKeyBz: (global as any).qosKeys.EncodeBase64(pubkeyBz)
    }
  }

  public recoveryKeyPair(privateKey: string) {
    // 根据私钥得到账户信息
    const [prikey, pubkey, accaddr, priKeyBz, pubkeyBz, err] = (global as any).qosKeys.RecoverFromPrivateKey(privateKey);
    if (err != null) {
      console.log(err)
    }
    return {
      privateKey: prikey,
      pubKey: pubkey,
      accAddress: accaddr,
      privateKeyBz: (global as any).qosKeys.EncodeBase64(priKeyBz),
      pubKeyBz: (global as any).qosKeys.EncodeBase64(pubkeyBz)
    }
  }

  public verifyBech32String(accAddress: string) {
    const isValidate = (global as any).qosKeys.verifyBech32String(accAddress)
    return isValidate
  }






  public getBech32PubKey(publicKey) {
    const [bech32pubkey, err2] = (global as any).qosKeys.Bech32ifyQOSAccPubKey(publicKey);
    if (err2 != null) {
      throw err2;
    }
    return bech32pubkey
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
