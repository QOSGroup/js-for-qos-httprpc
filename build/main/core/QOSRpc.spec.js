"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
// import nacl from 'tweetnacl';
const QOSRpc_1 = __importDefault(require("./QOSRpc"));
// import { encodeBase64 } from './utils';
// import { decodeBase64, encodeBase64 } from './utils';
// import logger from './utils/log';
ava_1.default('qosrpc test', async (t) => {
    // logger.debug('1')
    const rpc = new QOSRpc_1.default({ baseUrl: 'http://47.100.168.251:9876' });
    // const Mn = rpc.generateMnemonic()
    // logger.debug('Mn', Mn)
    // const account = rpc.recoveryAccountByPrivateKey('0mvLfssOE8FN4m2xuzlw1wfC8AKEigZyHyQwQLag9RDSs8G8VniIEnJSmlZWNGDZsR6jBq5c/NY5xcWlUr0J3w==')
    const account = rpc.importAccount('violin discover song model crawl distance method guess twenty silly chaos skirt convince hero oxygen cabin palm tomato wing dolphin chief clock cradle tackle');
    // const account = rpc.importAccount(Mn)
    // console.log(account.address)
    // logger.debug('keyPair.publicKey', (account.keypair.publicKey).join(','))
    // logger.debug('keyPair.publicKey encodeBase64', encodeBase64(account.keypair.publicKey))
    // logger.debug('keyPair.secretKey', (account.keypair.privateKey).join(','))
    // logger.debug('keyPair.secretKey encodeBase64', encodeBase64(account.keypair.privateKey))
    // logger.debug('keyPair.bech32pubkey', account.keypair.bech32pubkey)
    // logger.debug(account.pubKey)
    // try {
    // const res = await rpc.tx.sendTx()
    // logger.debug(JSON.stringify(res.data))
    const myBase = {
        from: account.address,
        chain_id: 'aquarius-2001',
        max_gas: '200000',
    };
    const obj = {
        qos: '1111',
        base: myBase,
    };
    await account.sendTransferTx('qosacc18j9ncemyh0jex3k2yu3s6zh53azfsgxav7t3wq', obj);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUU9TUnBjLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29yZS9RT1NScGMuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUF1QjtBQUN2QixnQ0FBZ0M7QUFDaEMsc0RBQThCO0FBSzlCLDBDQUEwQztBQUMxQyx3REFBd0Q7QUFDeEQsb0NBQW9DO0FBRXBDLGFBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFFO0lBQzVCLG9CQUFvQjtJQUVwQixNQUFNLEdBQUcsR0FBRyxJQUFJLGdCQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsQ0FBQyxDQUFBO0lBRWpFLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsOElBQThJO0lBQzlJLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsK0pBQStKLENBQUMsQ0FBQTtJQUNsTSx3Q0FBd0M7SUFFeEMsK0JBQStCO0lBQy9CLDJFQUEyRTtJQUMzRSwwRkFBMEY7SUFDMUYsNEVBQTRFO0lBQzVFLDJGQUEyRjtJQUMzRixxRUFBcUU7SUFDckUsK0JBQStCO0lBQy9CLFFBQVE7SUFDUixvQ0FBb0M7SUFDcEMseUNBQXlDO0lBRXpDLE1BQU0sTUFBTSxHQUFVO1FBQ2xCLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTztRQUNyQixRQUFRLEVBQUUsZUFBZTtRQUN6QixPQUFPLEVBQUUsUUFBUTtLQUNwQixDQUFBO0lBRUQsTUFBTSxHQUFHLEdBQW1CO1FBQzFCLEdBQUcsRUFBRSxNQUFNO1FBQ1gsSUFBSSxFQUFFLE1BQU07S0FDYixDQUFBO0lBQ0QsTUFBTSxPQUFPLENBQUMsY0FBYyxDQUFDLCtDQUErQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ2xGLHlDQUF5QztJQUV6Qyx1Q0FBdUM7SUFDdkMscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixJQUFJO0lBQ0oseUdBQXlHO0lBQ3pHLHFEQUFxRDtJQUNyRCxzRkFBc0Y7SUFFdEYsdUNBQXVDO0lBQ3ZDLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsSUFBSTtJQUNKLDJHQUEyRztJQUMzRyxrREFBa0Q7SUFDbEQsc0ZBQXNGO0lBRXRGLDBDQUEwQztJQUMxQyw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLElBQUk7SUFDSiw4R0FBOEc7SUFDOUcsa0RBQWtEO0lBQ2xELHNGQUFzRjtJQUV0RiwyQ0FBMkM7SUFDM0MsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixJQUFJO0lBQ0osK0dBQStHO0lBQy9HLHNEQUFzRDtJQUN0RCwwRkFBMEY7SUFFMUYseUJBQXlCO0lBQ3pCLGtFQUFrRTtJQUNsRSxpRUFBaUU7SUFDakUscUVBQXFFO0lBRXJFLG1IQUFtSDtJQUNuSCxpRUFBaUU7SUFDakUscUVBQXFFO0lBRXJFLGlHQUFpRztJQUNqRyxnRUFBZ0U7SUFDaEUsb0VBQW9FO0lBRXBFLDREQUE0RDtJQUk1RCwrQ0FBK0M7SUFDL0Msc0NBQXNDO0lBRXRDLHNDQUFzQztJQUN0QyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLElBQUk7SUFFSix5R0FBeUc7SUFDekcsd0NBQXdDO0lBRXhDLHlHQUF5RztJQUN6Ryx3Q0FBd0M7SUFFeEMsOEZBQThGO0lBQzlGLDhCQUE4QjtJQUM5QixrQ0FBa0M7SUFDbEMsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixJQUFJO0lBRUosQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO0FBQ1YsQ0FBQyxDQUFDLENBQUMifQ==