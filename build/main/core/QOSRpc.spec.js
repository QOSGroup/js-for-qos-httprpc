"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
// import nacl from 'tweetnacl';
const QOSRpc_1 = __importDefault(require("./QOSRpc"));
// import { IApproveInput } from './Txs/Approve';
// import { ITransferInput } from './Txs/Bank';
// import { IModifyDelegationInput, IUnbondDelegationInput } from './Txs/Delegation';
// import { IBase } from './types/IBaseInput';
const utils_1 = require("./utils");
// import { decodeBase64, encodeBase64 } from './utils';
const log_1 = __importDefault(require("./utils/log"));
ava_1.default('qosrpc test', async (t) => {
    log_1.default.debug('1');
    const rpc = new QOSRpc_1.default({ baseUrl: 'http://47.100.168.251:9876' });
    // const Mn = rpc.generateMnemonic()
    // logger.debug('Mn', Mn)
    // const account = rpc.recoveryAccountByPrivateKey('0mvLfssOE8FN4m2xuzlw1wfC8AKEigZyHyQwQLag9RDSs8G8VniIEnJSmlZWNGDZsR6jBq5c/NY5xcWlUr0J3w==')
    const account = rpc.importAccount('violin discover song model crawl distance method guess twenty silly chaos skirt convince hero oxygen cabin palm tomato wing dolphin chief clock cradle tackle');
    // const account = rpc.importAccount(Mn)
    // logger.debug(account.address)
    log_1.default.debug('keyPair.publicKey', (account.keypair.publicKey).join(','));
    log_1.default.debug('keyPair.publicKey encodeBase64', utils_1.encodeBase64(account.keypair.publicKey));
    log_1.default.debug('keyPair.secretKey', (account.keypair.privateKey).join(','));
    log_1.default.debug('keyPair.secretKey encodeBase64', utils_1.encodeBase64(account.keypair.privateKey));
    log_1.default.debug('keyPair.bech32pubkey', account.keypair.bech32pubkey);
    log_1.default.debug(account.pubKey);
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
    const res05 = await account.queryDelagationAll(account.address);
    log_1.default.debug('Query all Delegation result data :', res05.data);
    log_1.default.debug('Query all Delegation result status :', res05.status);
    const res06 = await account.queryDelagationOne(account.address, 'qosval19hrl38w5lm6sklw2hzrzrjtsxudpy8hyfaea3e');
    log_1.default.debug('Query one Delegation result data :', res06.data);
    log_1.default.debug('Query one Delegation result status :', res06.status);
    const res07 = await account.queryValidatorOne('qosval19hrl38w5lm6sklw2hzrzrjtsxudpy8hyfaea3e');
    log_1.default.debug('Query one Validator result data :', res07.data);
    log_1.default.debug('Query one Validator result status :', res07.status);
    const res08 = await account.queryAccount(account.address);
    log_1.default.debug('Query account result data :', res08.data);
    log_1.default.debug('Query account result status :', res08.status);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUU9TUnBjLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29yZS9RT1NScGMuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUF1QjtBQUN2QixnQ0FBZ0M7QUFDaEMsc0RBQThCO0FBQzlCLGlEQUFpRDtBQUNqRCwrQ0FBK0M7QUFDL0MscUZBQXFGO0FBQ3JGLDhDQUE4QztBQUM5QyxtQ0FBdUM7QUFDdkMsd0RBQXdEO0FBQ3hELHNEQUFpQztBQUVqQyxhQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBRTtJQUM1QixhQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBRWpCLE1BQU0sR0FBRyxHQUFHLElBQUksZ0JBQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxDQUFDLENBQUE7SUFFakUsb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6Qiw4SUFBOEk7SUFDOUksTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQywrSkFBK0osQ0FBQyxDQUFBO0lBQ2xNLHdDQUF3QztJQUN4QyxnQ0FBZ0M7SUFDaEMsYUFBTSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7SUFDeEUsYUFBTSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsRUFBRSxvQkFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtJQUN2RixhQUFNLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUN6RSxhQUFNLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxFQUFFLG9CQUFZLENBQUMs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