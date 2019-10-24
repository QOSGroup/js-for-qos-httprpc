import test from 'ava';
// import nacl from 'tweetnacl';
import QOSRpc from './QOSRpc';
import { encodeBase64 } from './utils';
// import { decodeBase64, encodeBase64 } from './utils';
import logger from './utils/log';
test('qosrpc test', async (t) => {
    logger.debug('1');
    const rpc = new QOSRpc({ baseUrl: 'http://192.168.1.37:9876' });
    // const account = rpc.recoveryAccountByPrivateKey('0mvLfssOE8FN4m2xuzlw1wfC8AKEigZyHyQwQLag9RDSs8G8VniIEnJSmlZWNGDZsR6jBq5c/NY5xcWlUr0J3w==')
    const account = rpc.newAccount('fury flavor subway start spare hospital tag chief word start pencil borrow town mandate detect pencil cook bridge right scout remain this differ leader');
    // logger.debug(account.address)
    logger.debug('keyPair.publicKey', (account.keypair.publicKey).join(','));
    logger.debug('keyPair.publicKey encodeBase64', encodeBase64(account.keypair.publicKey));
    logger.debug('keyPair.secretKey', (account.keypair.privateKey).join(','));
    logger.debug('keyPair.secretKey encodeBase64', encodeBase64(account.keypair.privateKey));
    logger.debug('keyPair.bech32pubkey', account.keypair.bech32pubkey);
    // logger.debug(account.pubKey)
    try {
        // const res = await rpc.tx.sendTx()
        // logger.debug(JSON.stringify(res.data))
        const res = await account.sendTransferTx();
        logger.debug(res.data);
        // const sig = nacl.sign.detached(decodeBase64(res.data.signBytes), account.keypair.secretKey)
        // logger.debug(sig.join(','))
        // logger.debug(encodeBase64(sig))
    }
    catch (error) {
        // logger.error(error)
    }
    t.is(rpc.config.baseUrl, 'http://192.168.1.37:9876');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUU9TUnBjLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29yZS9RT1NScGMuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQUksTUFBTSxLQUFLLENBQUM7QUFDdkIsZ0NBQWdDO0FBQ2hDLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQztBQUM5QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3ZDLHdEQUF3RDtBQUN4RCxPQUFPLE1BQU0sTUFBTSxhQUFhLENBQUM7QUFFakMsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUU7SUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUVqQixNQUFNLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxDQUFDLENBQUE7SUFFL0QsOElBQThJO0lBQzlJLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMseUpBQXlKLENBQUMsQ0FBQTtJQUN6TCxnQ0FBZ0M7SUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7SUFDeEUsTUFBTSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO0lBQ3ZGLE1BQU0sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQ3pFLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtJQUV4RixNQUFNLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDbEUsK0JBQStCO0lBQy9CLElBQUk7UUFDRixvQ0FBb0M7UUFDcEMseUNBQXlDO1FBQ3pDLE1BQU0sR0FBRyxHQUFHLE1BQU0sT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBQzFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3RCLDhGQUE4RjtRQUM5Riw4QkFBOEI7UUFDOUIsa0NBQWtDO0tBQ25DO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxzQkFBc0I7S0FDdkI7SUFFRCxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLDBCQUEwQixDQUFDLENBQUE7QUFDdEQsQ0FBQyxDQUFDLENBQUMifQ==