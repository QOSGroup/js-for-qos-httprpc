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
    const rpc = new QOSRpc_1.default({ baseUrl: 'http://192.168.1.37:9876' });
    // const account = rpc.recoveryAccountByPrivateKey('0mvLfssOE8FN4m2xuzlw1wfC8AKEigZyHyQwQLag9RDSs8G8VniIEnJSmlZWNGDZsR6jBq5c/NY5xcWlUr0J3w==')
    const account = rpc.newAccount('fury flavor subway start spare hospital tag chief word start pencil borrow town mandate detect pencil cook bridge right scout remain this differ leader');
    // logger.debug(account.address)
    log_1.default.debug('keyPair.publicKey', (account.keypair.publicKey).join(','));
    log_1.default.debug('keyPair.publicKey encodeBase64', utils_1.encodeBase64(account.keypair.publicKey));
    log_1.default.debug('keyPair.secretKey', (account.keypair.privateKey).join(','));
    log_1.default.debug('keyPair.secretKey encodeBase64', utils_1.encodeBase64(account.keypair.privateKey));
    log_1.default.debug('keyPair.bech32pubkey', account.keypair.bech32pubkey);
    // logger.debug(account.pubKey)
    try {
        // const res = await rpc.tx.sendTx()
        // logger.debug(JSON.stringify(res.data))
        const res = await account.sendTransferTx();
        log_1.default.debug(res.data);
        // const sig = nacl.sign.detached(decodeBase64(res.data.signBytes), account.keypair.secretKey)
        // logger.debug(sig.join(','))
        // logger.debug(encodeBase64(sig))
    }
    catch (error) {
        // logger.error(error)
    }
    t.is(rpc.config.baseUrl, 'http://192.168.1.37:9876');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUU9TUnBjLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29yZS9RT1NScGMuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUF1QjtBQUN2QixnQ0FBZ0M7QUFDaEMsc0RBQThCO0FBQzlCLG1DQUF1QztBQUN2Qyx3REFBd0Q7QUFDeEQsc0RBQWlDO0FBRWpDLGFBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFFO0lBQzVCLGFBQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFFakIsTUFBTSxHQUFHLEdBQUcsSUFBSSxnQkFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLENBQUMsQ0FBQTtJQUUvRCw4SUFBOEk7SUFDOUksTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyx5SkFBeUosQ0FBQyxDQUFBO0lBQ3pMLGdDQUFnQztJQUNoQyxhQUFNLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUN4RSxhQUFNLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxFQUFFLG9CQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO0lBQ3ZGLGFBQU0sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQ3pFLGFBQU0sQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLEVBQUUsb0JBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7SUFFeEYsYUFBTSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ2xFLCtCQUErQjtJQUMvQixJQUFJO1FBQ0Ysb0NBQW9DO1FBQ3BDLHlDQUF5QztRQUN6QyxNQUFNLEdBQUcsR0FBRyxNQUFNLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUMxQyxhQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN0Qiw4RkFBOEY7UUFDOUYsOEJBQThCO1FBQzlCLGtDQUFrQztLQUNuQztJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2Qsc0JBQXNCO0tBQ3ZCO0lBRUQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3RELENBQUMsQ0FBQyxDQUFDIn0=