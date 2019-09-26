import test from 'ava';
import QOSRpc from './rpc';
import logger from './utils/log';

test('qosrpc test', async t => {
  logger.debug('1')

  const rpc = new QOSRpc({ baseUrl: 'http://39.105.26.155:9998' })
  try {
    const res = await rpc.tx.sendTx()
    logger.debug(JSON.stringify(res.data))

  } catch (error) {
    logger.error(error)
  }

  t.is(rpc.config.baseUrl, 'http://39.105.26.155:9998')
});
