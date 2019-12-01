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
    // const rpc = new QOSRpc({ baseUrl: 'http://47.100.168.251:9876' })
    const rpc = new QOSRpc_1.default({ baseUrl: 'http://47.98.253.9:9876' });
    // const Mn = rpc.generateMnemonic()
    // logger.debug('Mn', Mn)
    // const account = rpc.recoveryAccountByPrivateKey('0mvLfssOE8FN4m2xuzlw1wfC8AKEigZyHyQwQLag9RDSs8G8VniIEnJSmlZWNGDZsR6jBq5c/NY5xcWlUr0J3w==')
    const account = rpc.importAccount('giant tackle detail dignity catalog broccoli lady harbor dad mosquito right answer');
    // const account = rpc.importAccount(Mn)
    // console.log(account)
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
        chain_id: 'qos-test',
        max_gas: '200000',
    };
    const obj = {
        qos: '1111',
        base: myBase,
    };
    await account.sendTransferTx('qosacc1edth0vln3dch80c08adt0pas4vqxnr2u3yf04n', obj);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUU9TUnBjLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29yZS9RT1NScGMuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUF1QjtBQUN2QixnQ0FBZ0M7QUFDaEMsc0RBQThCO0FBSzlCLDBDQUEwQztBQUMxQyx3REFBd0Q7QUFDeEQsb0NBQW9DO0FBRXBDLGFBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFFO0lBQzVCLG9CQUFvQjtJQUVwQixvRUFBb0U7SUFDcEUsTUFBTSxHQUFHLEdBQUcsSUFBSSxnQkFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLENBQUMsQ0FBQTtJQUM5RCxvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLDhJQUE4STtJQUM5SSxNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLG9GQUFvRixDQUFDLENBQUE7SUFDdkgsd0NBQXdDO0lBQ3hDLHVCQUF1QjtJQUN2QiwyRUFBMkU7SUFDM0UsMEZBQTBGO0lBQzFGLDRFQUE0RTtJQUM1RSwyRkFBMkY7SUFDM0YscUVBQXFFO0lBQ3JFLCtCQUErQjtJQUMvQixRQUFRO0lBQ1Isb0NBQW9DO0lBQ3BDLHlDQUF5QztJQUV6QyxNQUFNLE1BQU0sR0FBVTtRQUNsQixJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU87UUFDckIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLFFBQVE7S0FDcEIsQ0FBQTtJQUVELE1BQU0sR0FBRyxHQUFtQjtRQUMxQixHQUFHLEVBQUUsTUFBTTtRQUNYLElBQUksRUFBRSxNQUFNO0tBQ2IsQ0FBQTtJQUNELE1BQU0sT0FBTyxDQUFDLGNBQWMsQ0FBQywrQ0FBK0MsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNsRix5Q0FBeUM7SUFFekMsdUNBQXVDO0lBQ3ZDLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsSUFBSTtJQUNKLHlHQUF5RztJQUN6RyxxREFBcUQ7SUFDckQsc0ZBQXNGO0lBRXRGLHVDQUF1QztJQUN2Qyx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLElBQUk7SUFDSiwyR0FBMkc7SUFDM0csa0RBQWtEO0lBQ2xELHNGQUFzRjtJQUV0RiwwQ0FBMEM7SUFDMUMsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixJQUFJO0lBQ0osOEdBQThHO0lBQzlHLGtEQUFrRDtJQUNsRCxzRkFBc0Y7SUFFdEYsMkNBQTJDO0lBQzNDLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsSUFBSTtJQUNKLCtHQUErRztJQUMvRyxzREFBc0Q7SUFDdEQsMEZBQTBGO0lBRTFGLHlCQUF5QjtJQUN6QixrRUFBa0U7SUFDbEUsaUVBQWlFO0lBQ2pFLHFFQUFxRTtJQUVyRSxtSEFBbUg7SUFDbkgsaUVBQWlFO0lBQ2pFLHFFQUFxRTtJQUVyRSxpR0FBaUc7SUFDakcsZ0VBQWdFO0lBQ2hFLG9FQUFvRTtJQUVwRSw0REFBNEQ7SUFJNUQsK0NBQStDO0lBQy9DLHNDQUFzQztJQUV0QyxzQ0FBc0M7SUFDdEMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixJQUFJO0lBRUoseUdBQXlHO0lBQ3pHLHdDQUF3QztJQUV4Qyx5R0FBeUc7SUFDekcsd0NBQXdDO0lBRXhDLDhGQUE4RjtJQUM5Riw4QkFBOEI7SUFDOUIsa0NBQWtDO0lBQ2xDLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsSUFBSTtJQUVKLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtBQUNWLENBQUMsQ0FBQyxDQUFDIn0=