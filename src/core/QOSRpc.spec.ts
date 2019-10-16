import test from 'ava';
// import nacl from 'tweetnacl';
import QOSRpc from './QOSRpc';
// import { decodeBase64, encodeBase64 } from './utils';
import logger from './utils/log';

test('qosrpc test', async t => {
  logger.debug('1')

  const rpc = new QOSRpc({ baseUrl: 'http://192.168.1.37:9876' })

  // const account = rpc.recoveryAccountByPrivateKey('0mvLfssOE8FN4m2xuzlw1wfC8AKEigZyHyQwQLag9RDSs8G8VniIEnJSmlZWNGDZsR6jBq5c/NY5xcWlUr0J3w==')
  const account = rpc.newAccount('fury flavor subway start spare hospital tag chief word start pencil borrow town mandate detect pencil cook bridge right scout remain this differ leader')
  // logger.debug(account.address)
  // logger.debug(account.pubKey)
  try {
    // const res = await rpc.tx.sendTx()
    // logger.debug(JSON.stringify(res.data))
    const res = await account.sendTransferTx()
    logger.debug(res.data)
    // const sig = nacl.sign.detached(decodeBase64(res.data.signBytes), account.keypair.secretKey)
    // logger.debug(sig.join(','))
    // logger.debug(encodeBase64(sig))
  } catch (error) {
    logger.error(error)
  }

  t.is(rpc.config.baseUrl, 'http://192.168.1.37:9876')
});
