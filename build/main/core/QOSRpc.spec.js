"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
// import nacl from 'tweetnacl';
const QOSRpc_1 = __importDefault(require("./QOSRpc"));
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
    const myBase = {
        from: account.address,
        chain_id: 'aquarius-2001',
        max_gas: '200000',
    };
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
    const mod = {
        is_compound: true,
        base: myBase,
    };
    const res02 = await account.sendModifyDelegationTx('qosval19hrl38w5lm6sklw2hzrzrjtsxudpy8hyfaea3e', mod);
    log_1.default.debug('Modify Delegation result', res02);
    log_1.default.debug('Modify Delegation result:', res02.status, ', hash:', res02.data.hash);
    const unbond = {
        unbond_amount: '1111',
        base: myBase,
    };
    const res03 = await account.sendUnbondDelegationTx('qosval19hrl38w5lm6sklw2hzrzrjtsxudpy8hyfaea3e', unbond);
    log_1.default.debug('unbond Delegation result', res03);
    log_1.default.debug('Unbond Delegation result:', res03.status, ', hash:', res03.data.hash);
    const unbond1 = {
        unbond_all: true,
        base: myBase,
    };
    const res04 = await account.sendUnbondDelegationTx('qosval19hrl38w5lm6sklw2hzrzrjtsxudpy8hyfaea3e', unbond1);
    log_1.default.debug('Unbond all Delegation result', res04);
    log_1.default.debug('Unbond all Delegation result:', res04.status, ', hash:', res04.data.hash);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUU9TUnBjLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29yZS9RT1NScGMuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUF1QjtBQUN2QixnQ0FBZ0M7QUFDaEMsc0RBQThCO0FBSzlCLG1DQUF1QztBQUN2Qyx3REFBd0Q7QUFDeEQsc0RBQWlDO0FBRWpDLGFBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFFO0lBQzVCLGFBQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFFakIsTUFBTSxHQUFHLEdBQUcsSUFBSSxnQkFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLENBQUMsQ0FBQTtJQUVqRSxvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLDhJQUE4STtJQUM5SSxNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLCtKQUErSixDQUFDLENBQUE7SUFDbE0sd0NBQXdDO0lBQ3hDLGdDQUFnQztJQUNoQyxhQUFNLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUN4RSxhQUFNLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxFQUFFLG9CQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO0lBQ3ZGLGFBQU0sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQ3pFLGFBQU0sQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLEVBQUUsb0JBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7SUFFeEYsYUFBTSxD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