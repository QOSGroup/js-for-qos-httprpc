// import ed25519 from 'supercop.js'
// import nacl from 'tweetnacl';
require('qosKeys');
import Account from '../Account';
import { decodeBase64, encodeBase64 } from '../utils';

export function sign(account: Account, data: any) {
  // const sig = nacl.sign.detached(decodeBase64(data), account.keypair.privateKey)
  // const sig = ed25519.Sign(decodeBase64(data), account.keypair.privateKey);
  const sig = (global as any).qosKeys.Sign(account.keypair.privateKey, decodeBase64(data));

  // logger.debug('sig', encodeBase64(sig))

  return encodeBase64(sig)
}

export function componentSignData(target: any, res: any) {
  const sig = sign((target as any).account, res.data.sign_bytes)
  const resObj = JSON.parse(res.data.tx)
  resObj.value.sigature[0].signature = sig
  resObj.value.sigature[0].pubkey = {
    type: 'tendermint/PubKeyEd25519',
    // 'value': 'lDomDLEe+ou01k4FsNLJOdU10rhlpBxVQR+BAwSpUzc='
    value: (target as any).account.pubkey
  }
  return resObj
}