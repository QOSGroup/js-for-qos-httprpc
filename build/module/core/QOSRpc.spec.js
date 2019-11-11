import test from 'ava';
// import nacl from 'tweetnacl';
import QOSRpc from './QOSRpc';
import { encodeBase64 } from './utils';
// import { decodeBase64, encodeBase64 } from './utils';
import logger from './utils/log';
test('qosrpc test', async (t) => {
    logger.debug('1');
    const rpc = new QOSRpc({ baseUrl: 'http://47.100.168.251:9876' });
    // const Mn = rpc.generateMnemonic()
    // logger.debug('Mn', Mn)
    // const account = rpc.recoveryAccountByPrivateKey('0mvLfssOE8FN4m2xuzlw1wfC8AKEigZyHyQwQLag9RDSs8G8VniIEnJSmlZWNGDZsR6jBq5c/NY5xcWlUr0J3w==')
    const account = rpc.importAccount('violin discover song model crawl distance method guess twenty silly chaos skirt convince hero oxygen cabin palm tomato wing dolphin chief clock cradle tackle');
    // const account = rpc.importAccount(Mn)
    // logger.debug(account.address)
    logger.debug('keyPair.publicKey', (account.keypair.publicKey).join(','));
    logger.debug('keyPair.publicKey encodeBase64', encodeBase64(account.keypair.publicKey));
    logger.debug('keyPair.secretKey', (account.keypair.privateKey).join(','));
    logger.debug('keyPair.secretKey encodeBase64', encodeBase64(account.keypair.privateKey));
    logger.debug('keyPair.bech32pubkey', account.keypair.bech32pubkey);
    logger.debug(account.pubKey);
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
    logger.debug('Modify Delegation result', res02);
    logger.debug('Modify Delegation result:', res02.status, ', hash:', res02.data.hash);
    const unbond = {
        unbond_amount: '1111',
        base: myBase,
    };
    const res03 = await account.sendUnbondDelegationTx('qosval19hrl38w5lm6sklw2hzrzrjtsxudpy8hyfaea3e', unbond);
    logger.debug('unbond Delegation result', res03);
    logger.debug('Unbond Delegation result:', res03.status, ', hash:', res03.data.hash);
    const unbond1 = {
        unbond_all: true,
        base: myBase,
    };
    const res04 = await account.sendUnbondDelegationTx('qosval19hrl38w5lm6sklw2hzrzrjtsxudpy8hyfaea3e', unbond1);
    logger.debug('Unbond all Delegation result', res04);
    logger.debug('Unbond all Delegation result:', res04.status, ', hash:', res04.data.hash);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUU9TUnBjLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29yZS9RT1NScGMuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQUksTUFBTSxLQUFLLENBQUM7QUFDdkIsZ0NBQWdDO0FBQ2hDLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQztBQUs5QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3ZDLHdEQUF3RDtBQUN4RCxPQUFPLE1BQU0sTUFBTSxhQUFhLENBQUM7QUFFakMsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUU7SUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUVqQixNQUFNLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxDQUFDLENBQUE7SUFFakUsb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6Qiw4SUFBOEk7SUFDOUksTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQywrSkFBK0osQ0FBQyxDQUFBO0lBQ2xNLHdDQUF3QztJQUN4QyxnQ0FBZ0M7SUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7SUFDeEUsTUFBTSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO0lBQ3ZGLE1BQU0sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQ3pFLE1BQU0sQ0FBQyxLQUFLLENBQUMs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