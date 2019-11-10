import test from 'ava';
// import nacl from 'tweetnacl';
import QOSRpc from './QOSRpc';
import { IApproveInput } from './Txs/Approve';
import { ITransferInput } from './Txs/Bank';
import { IBase } from './types/IBaseInput';
import { encodeBase64 } from './utils';
// import { decodeBase64, encodeBase64 } from './utils';
import logger from './utils/log';

test('qosrpc test', async t => {
  logger.debug('1')

  const rpc = new QOSRpc({ baseUrl: 'http://47.100.168.251:9876' })

  const Mn = rpc.generateMnemonic()
  logger.debug('Mn', Mn)
  // const account = rpc.recoveryAccountByPrivateKey('0mvLfssOE8FN4m2xuzlw1wfC8AKEigZyHyQwQLag9RDSs8G8VniIEnJSmlZWNGDZsR6jBq5c/NY5xcWlUr0J3w==')
  // const account = rpc.importAccount('fury flavor subway start spare hospital tag chief word start pencil borrow town mandate detect pencil cook bridge right scout remain this differ leader')
  const account = rpc.importAccount(Mn)
  // logger.debug(account.address)
  logger.debug('keyPair.publicKey', (account.keypair.publicKey).join(','))
  logger.debug('keyPair.publicKey encodeBase64', encodeBase64(account.keypair.publicKey))
  logger.debug('keyPair.secretKey', (account.keypair.privateKey).join(','))
  logger.debug('keyPair.secretKey encodeBase64', encodeBase64(account.keypair.privateKey))

  logger.debug('keyPair.bech32pubkey', account.keypair.bech32pubkey)
  // logger.debug(account.pubKey)
  // try {
    // const res = await rpc.tx.sendTx()
    // logger.debug(JSON.stringify(res.data))
    const myBase: IBase = {
        from: account.address,
        chain_id: 'aquarius-2001',
        max_gas: '200000',
    }
    const obj: ITransferInput = {
      qos: '10',
      base: myBase,
    }
    const res00 = await account.sendTransferTx('qosacc12z5jn6c3qu3j2zy80ydwjm8pjwu3h8tqk3cwya', obj)
    logger.debug('Transfer result', res00)
    
    const res01 = await account.sendCheckTx(obj)
    logger.debug('check result', res01)
    

    const approveObj: IApproveInput = {
      qos: '1000',
      base: myBase,
    }

    const res10 = await account.sendApproveTx('qosacc12z5jn6c3qu3j2zy80ydwjm8pjwu3h8tqk3cwya', approveObj)
    logger.debug('Approve result', res10)

    const res11 = await account.sendApproveTx('qosacc12z5jn6c3qu3j2zy80ydwjm8pjwu3h8tqk3cwya', approveObj)
    logger.debug('Approve result', res11)
    // const sig = nacl.sign.detached(decodeBase64(res.data.signBytes), account.keypair.secretKey)
    // logger.debug(sig.join(','))
    // logger.debug(encodeBase64(sig))
  // } catch (error) {
  //   logger.error(error)
  // }

  t.pass()
});
