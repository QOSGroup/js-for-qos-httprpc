import test from 'ava';
// import nacl from 'tweetnacl';
import QOSRpc from './QOSRpc';
// import { IApproveInput } from './Txs/Approve';
// import { ITransferInput } from './Txs/Bank';
// import { IModifyDelegationInput, IUnbondDelegationInput } from './Txs/Delegation';
// import { IBase } from './types/IBaseInput';
import { encodeBase64 } from './utils';
// import { decodeBase64, encodeBase64 } from './utils';
import logger from './utils/log';

test('qosrpc test', async t => {
  logger.debug('1')

  const rpc = new QOSRpc({ baseUrl: 'http://47.100.168.251:9876' })

  // const Mn = rpc.generateMnemonic()
  // logger.debug('Mn', Mn)
  // const account = rpc.recoveryAccountByPrivateKey('0mvLfssOE8FN4m2xuzlw1wfC8AKEigZyHyQwQLag9RDSs8G8VniIEnJSmlZWNGDZsR6jBq5c/NY5xcWlUr0J3w==')
  const account = rpc.importAccount('violin discover song model crawl distance method guess twenty silly chaos skirt convince hero oxygen cabin palm tomato wing dolphin chief clock cradle tackle')
  // const account = rpc.importAccount(Mn)
  // logger.debug(account.address)
  logger.debug('keyPair.publicKey', (account.keypair.publicKey).join(','))
  logger.debug('keyPair.publicKey encodeBase64', encodeBase64(account.keypair.publicKey))
  logger.debug('keyPair.secretKey', (account.keypair.privateKey).join(','))
  logger.debug('keyPair.secretKey encodeBase64', encodeBase64(account.keypair.privateKey))

  logger.debug('keyPair.bech32pubkey', account.keypair.bech32pubkey)
  logger.debug(account.pubKey)
  // try {
    // const res = await rpc.tx.sendTx()
    // logger.debug(JSON.stringify(res.data))
    
    // const myBase: IBase = {
    //     from: account.address,
    //     chain_id: 'aquarius-2001',
    //     max_gas: '200000',
    // }

    // const obj: ITransferInput = {
    //   qos: '1111',
    //   base: myBase,
    // }
    // const res00 = await account.sendTransferTx('qosacc18j9ncemyh0jex3k2yu3s6zh53azfsgxav7t3wq', obj)
    // logger.debug('Transfer result', res00)
    
    // const del: ICreateDelegationInput= {
    //   amount:  '1111',
    //   base: myBase,
    // }
    // const res01 = await account.sendCreateDelegateTx('qosval19hrl38w5lm6sklw2hzrzrjtsxudpy8hyfaea3e', del)
    // // logger.debug('Create Delegation result', res01)
    // logger.debug('Create Delegation result:', res01.status, ', hash:', res01.data.hash)

    // const mod: IModifyDelegationInput= {
    //   is_compound:  true,
    //   base: myBase,
    // }
    // const res02 = await account.sendModifyDelegationTx('qosval19hrl38w5lm6sklw2hzrzrjtsxudpy8hyfaea3e', mod)
    // logger.debug('Modify Delegation result', res02)
    // logger.debug('Modify Delegation result:', res02.status, ', hash:', res02.data.hash)

    // const unbond: IUnbondDelegationInput= {
    //   unbond_amount:  '1111',
    //   base: myBase,
    // }
    // const res03 = await account.sendUnbondDelegationTx('qosval19hrl38w5lm6sklw2hzrzrjtsxudpy8hyfaea3e', unbond)
    // logger.debug('unbond Delegation result', res03)
    // logger.debug('Unbond Delegation result:', res03.status, ', hash:', res03.data.hash)

    // const unbond1: IUnbondDelegationInput= {
    //   unbond_all:  true,
    //   base: myBase,
    // }
    // const res04 = await account.sendUnbondDelegationTx('qosval19hrl38w5lm6sklw2hzrzrjtsxudpy8hyfaea3e', unbond1)
    // logger.debug('Unbond all Delegation result', res04)
    // logger.debug('Unbond all Delegation result:', res04.status, ', hash:', res04.data.hash)

    // ------test query------
    const res05 = await account.queryDelagationAll(account.address)
    logger.debug('Query all Delegation result data :', res05.data)
    logger.debug('Query all Delegation result status :', res05.status)

    const res06 = await account.queryDelagationOne(account.address, 'qosval19hrl38w5lm6sklw2hzrzrjtsxudpy8hyfaea3e')
    logger.debug('Query one Delegation result data :', res06.data)
    logger.debug('Query one Delegation result status :', res06.status)

    const res07 = await account.queryValidatorOne('qosval19hrl38w5lm6sklw2hzrzrjtsxudpy8hyfaea3e')
    logger.debug('Query one Validator result data :', res07.data)
    logger.debug('Query one Validator result status :', res07.status)

    const res08 = await account.queryAccount(account.address)
    logger.debug('Query account result data :', res08.data)
    logger.debug('Query account result status :', res08.status)
    // const res01 = await account.sendCheckTx(obj)
    // logger.debug('check result', res01)
    
    // const approveObj: IApproveInput = {
    //   qos: '1000',
    //   base: myBase,
    // }

    // const res10 = await account.sendApproveTx('qosacc12z5jn6c3qu3j2zy80ydwjm8pjwu3h8tqk3cwya', approveObj)
    // logger.debug('Approve result', res10)

    // const res11 = await account.sendApproveTx('qosacc12z5jn6c3qu3j2zy80ydwjm8pjwu3h8tqk3cwya', approveObj)
    // logger.debug('Approve result', res11)

    // const sig = nacl.sign.detached(decodeBase64(res.data.signBytes), account.keypair.secretKey)
    // logger.debug(sig.join(','))
    // logger.debug(encodeBase64(sig))
  // } catch (error) {
  //   logger.error(error)
  // }

  t.pass()
});
