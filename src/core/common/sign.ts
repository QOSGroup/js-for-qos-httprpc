// import ed25519 from 'supercop.js'
// import nacl from 'tweetnacl';
require('qosKeys');
import Account from '../Account';
import Tx from '../Txs/Tx';
import { encodeBase64 } from '../utils';

export function sign(account: Account, data: any) {
  // const sig = nacl.sign.detached(decodeBase64(data), account.keypair.privateKey)
  // const sig = ed25519.Sign(decodeBase64(data), account.keypair.privateKey);
  const sig = (global as any).qosKeys.SignBase64Message(account.keypair.hexPrivateKey, data);

  // logger.debug('sig', encodeBase64(sig))

  return encodeBase64(sig)
}

export async function componentSignData(target: Tx, res: any) {
  const sig = sign((target as any).account, res.data.sign_bytes)
  const resObj = JSON.parse(res.data.tx)
  const pubkeyBase64 = (global as any).qosKeys.EncodeBase64(target.account.pubKeyBz)

  resObj.value.sigature[0].signature = sig
  resObj.value.sigature[0].pubkey = {
    type: 'tendermint/PubKeyEd25519',
    // 'value': 'lDomDLEe+ou01k4FsNLJOdU10rhlpBxVQR+BAwSpUzc='
    value: pubkeyBase64
  }
  return resObj
}