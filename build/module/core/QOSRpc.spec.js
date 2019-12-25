import test from 'ava';
// import nacl from 'tweetnacl';
// import QOSRpc from './QOSRpc';
// import { IApproveInput } from './Txs/Approve';
// import { ITransferInput } from './Txs/Bank';
// import { IModifyDelegationInput, IUnbondDelegationInput } from './Txs/Delegation';
// import { IBase } from './types/IBaseInput';
// import { encodeBase64 } from './utils';
// import { decodeBase64, encodeBase64 } from './utils';
// import logger from './utils/log';
require('qosKeys');
test('qosrpc test', async (t) => {
    // logger.debug('1')
    // const rpc = new QOSRpc({ baseUrl: 'http://47.100.168.251:9876' })
    // const rpc = new QOSRpc({ baseUrl: 'http://47.98.253.9:9876' })
    // const Mn = rpc.generateMnemonic()
    // logger.debug('Mn', Mn)
    // const account = rpc.recoveryAccountByPrivateKey('0mvLfssOE8FN4m2xuzlw1wfC8AKEigZyHyQwQLag9RDSs8G8VniIEnJSmlZWNGDZsR6jBq5c/NY5xcWlUr0J3w==')
    // const account = rpc.importAccount('giant tackle detail dignity catalog broccoli lady harbor dad mosquito right answer')
    // const account = rpc.importAccount(Mn)
    // console.log(account)
    // const [hexprikey, pubkey, accaddr, prikeyBz, pubkeyBz, err] = (global as any).qosKeys.DeriveQOSKey('giant tackle detail dignity catalog broccoli lady harbor dad mosquito right answer');
    // console.log('----', hexprikey)
    // console.log('----', pubkey)
    // console.log('----', accaddr)
    // console.log('----', prikeyBz)
    // console.log('----', pubkeyBz)
    // console.log(err)
    // logger.debug('keyPair.publicKey', (account.keypair.publicKey).join(','))
    // logger.debug('keyPair.publicKey encodeBase64', encodeBase64(account.keypair.publicKey))
    // logger.debug('keyPair.secretKey', (account.keypair.privateKey).join(','))
    // logger.debug('keyPair.secretKey encodeBase64', encodeBase64(account.keypair.privateKey))
    // logger.debug('keyPair.bech32pubkey', account.keypair.bech32pubkey)
    // logger.debug(account.pubKey)
    // try {
    // const res = await rpc.tx.sendTx()
    // logger.debug(JSON.stringify(res.data))
    // const myBase: IBase = {
    //     from: account.address,
    //     chain_id: 'qos-test',
    //     max_gas: '200000',
    // }
    // const obj: ITransferInput = {
    //   qos: '1000',
    //   base: myBase,
    // }
    // await account.sendTransferTx('qosacc1edth0vln3dch80c08adt0pas4vqxnr2u3yf04n', obj)
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
    // const res05 = await account.queryDelagationAll(account.address)
    // logger.debug('Query all Delegation result data :', res05.data)
    // logger.debug('Query all Delegation result status :', res05.status)
    // const res06 = await account.queryDelagationOne(account.address, 'qosval19hrl38w5lm6sklw2hzrzrjtsxudpy8hyfaea3e')
    // logger.debug('Query one Delegation result data :', res06.data)
    // logger.debug('Query one Delegation result status :', res06.status)
    // const res07 = await account.queryValidatorOne('qosval19hrl38w5lm6sklw2hzrzrjtsxudpy8hyfaea3e')
    // logger.debug('Query one Validator result data :', res07.data)
    // logger.debug('Query one Validator result status :', res07.status)
    // const res08 = await account.queryAccount(account.address)
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
    t.pass();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUU9TUnBjLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29yZS9RT1NScGMuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQUksTUFBTSxLQUFLLENBQUM7QUFDdkIsZ0NBQWdDO0FBQ2hDLGlDQUFpQztBQUNqQyxpREFBaUQ7QUFDakQsK0NBQStDO0FBQy9DLHFGQUFxRjtBQUNyRiw4Q0FBOEM7QUFDOUMsMENBQTBDO0FBQzFDLHdEQUF3RDtBQUN4RCxvQ0FBb0M7QUFDcEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRW5CLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFFO0lBQzVCLG9CQUFvQjtJQUVwQixvRUFBb0U7SUFDcEUsaUVBQWlFO0lBQ2pFLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsOElBQThJO0lBQzlJLDBIQUEwSDtJQUMxSCx3Q0FBd0M7SUFDeEMsdUJBQXVCO0lBRXZCLDRMQUE0TDtJQUM1TCxpQ0FBaUM7SUFDakMsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQiwyRUFBMkU7SUFDM0UsMEZBQTBGO0lBQzFGLDRFQUE0RTtJQUM1RSwyRkFBMkY7SUFDM0YscUVBQXFFO0lBQ3JFLCtCQUErQjtJQUMvQixRQUFRO0lBQ1Isb0NBQW9DO0lBQ3BDLHlDQUF5QztJQUV6QywwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsSUFBSTtJQUVKLGdDQUFnQztJQUNoQyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLElBQUk7SUFDSixxRkFBcUY7SUFDckYseUNBQXlDO0lBRXpDLHVDQUF1QztJQUN2QyxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLElBQUk7SUFDSix5R0FBeUc7SUFDekcscURBQXFEO0lBQ3JELHNGQUFzRjtJQUV0Rix1Q0FBdUM7SUFDdkMsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixJQUFJO0lBQ0osMkdBQTJHO0lBQzNHLGtEQUFrRDtJQUNsRCxzRkFBc0Y7SUFFdEYsMENBQTBDO0lBQzFDLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsSUFBSTtJQUNKLDhHQUE4RztJQUM5RyxrREFBa0Q7SUFDbEQsc0ZBQXNGO0lBRXRGLDJDQUEyQztJQUMzQyx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLElBQUk7SUFDSiwrR0FBK0c7SUFDL0csc0RBQXNEO0lBQ3RELDBGQUEwRjtJQUUxRix5QkFBeUI7SUFDekIsa0VBQWtFO0lBQ2xFLGlFQUFpRTtJQUNqRSxxRUFBcUU7SUFFckUsbUhBQW1IO0lBQ25ILGlFQUFpRTtJQUNqRSxxRUFBcUU7SUFFckUsaUdBQWlHO0lBQ2pHLGdFQUFnRTtJQUNoRSxvRUFBb0U7SUFFcEUsNERBQTREO0lBSTVELCtDQUErQztJQUMvQyxzQ0FBc0M7SUFFdEMsc0NBQXNDO0lBQ3RDLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsSUFBSTtJQUVKLHlHQUF5RztJQUN6Ryx3Q0FBd0M7SUFFeEMseUdBQXlHO0lBQ3pHLHdDQUF3QztJQUV4Qyw4RkFBOEY7SUFDOUYsOEJBQThCO0lBQzlCLGtDQUFrQztJQUNsQyxvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLElBQUk7SUFFSixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7QUFDVixDQUFDLENBQUMsQ0FBQyJ9