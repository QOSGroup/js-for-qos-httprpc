// import ed25519 from 'ed25519';
import ed25519 from 'supercop.js'
// import nacl from 'tweetnacl';
import Account from '../Account';
import Tx from '../Txs/Tx';
import { decodeBase64, encodeBase64 } from '../utils';
import logger from '../utils/log';

export function sign(account: Account, data: any) {
  // const sig = nacl.sign.detached(decodeBase64(data), account.keypair.privateKey)
  // const sig = ed25519.Sign(decodeBase64(data), account.keypair.privateKey);
  const sig = ed25519.sign(decodeBase64(data), account.keypair.publicKey, account.keypair.privateKey);

  // logger.debug('sig', encodeBase64(sig))

  return encodeBase64(sig)
}

export function componentSignData(target: Tx, res: any) {
  const sig = sign((target as any).account, res.data.sign_bytes)
  const resObj = JSON.parse(res.data.tx)
  logger.debug('target', target)
  logger.debug('res', res)
  resObj.value.sigature[0].signature = sig
  resObj.value.sigature[0].pubkey = {
  type: 'tendermint/PubKeyEd25519',
  // 'value': 'lDomDLEe+ou01k4FsNLJOdU10rhlpBxVQR+BAwSpUzc='
    value:  target.account.pubKey
  }
  logger.debug('resobj', resObj)
  return resObj
}