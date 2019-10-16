import bech32 from 'bech32';
import { generateMnemonic, mnemonicToSeedSync } from 'bip39';
// import { ec as EC } from 'elliptic'
// import nacl from 'tweetnacl';
import { buf2hex, encodeBase64, getHash256, stringToBuffer } from './utils';
import logger from './utils/log';
require('hdpath')
import ed25519 from 'ed25519';

export default class SecretKey {
  public generateMnemonic() {
    // 商 256，生成24个助记单词, 商 128，生成12个助记单词
    const mnemonic = generateMnemonic(128);
    return mnemonic;
  }

  public genarateKeyPair(mnemonic: string) {
    const seed = mnemonicToSeedSync(mnemonic);

    logger.debug('-------======--------====------')
    const [secret, chaincode] = (global as any).hdpath.ComputeMastersFromSeed(seed)

    const [privateSeed, err] = (global as any).hdpath.DerivePrivateKeyForPath(secret, chaincode, "44'/389'/0'/0/0")

    if (err != null) {
      // tslint:disable-next-line: no-console
      console.log(err)
    }
    const secret256 = getHash256(privateSeed);
    logger.debug('secret256:' + (new Buffer(secret256)).length, new Buffer(secret256))

    const keyPair = ed25519.MakeKeypair(new Buffer(secret256));
    // const keyPair = nacl.sign.keyPair.fromSeed(new Uint8Array(secret256));
    logger.debug('keyPair.publicKey', encodeBase64(keyPair.publicKey))
    logger.debug('keyPair.secretKey', encodeBase64(keyPair.privateKey))
    keyPair.secretKey = keyPair.privateKey

    logger.debug('rprivateKey.substring(64,128)', encodeBase64(this.recoveryKeyPair(keyPair.privateKey).publicKey))
    // this.test(mnemonic)
    return keyPair
  }

  public recoveryKeyPair(privateKey: Uint8Array) {
    return {
      publicKey: stringToBuffer(buf2hex(privateKey).substring(64, 128), 'hex'),
      privateKey
    }
  }

  public test() {
    logger.debug('-----1111-------11-----')

    // return keyPair
  }

  public getAddress(publicKey: Uint8Array) {
    const pkAarry = getHash256(publicKey);
    const nw = bech32.toWords(Buffer.from(pkAarry.slice(0, 20)));
    const addr = bech32.encode('qosacc', nw);
    return addr;
  }
}
