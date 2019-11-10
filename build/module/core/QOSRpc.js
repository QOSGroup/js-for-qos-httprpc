import Account from './Account';
import SecretKey from './SecretKey';
import Tx from './Tx';
import { decodeBase64 } from './utils';
import createAxioRequest from './utils/request';
class QOSRpc {
    constructor(config) {
        this.config = config;
        this.key = new SecretKey();
    }
    get request() {
        return createAxioRequest(this.config.baseUrl);
    }
    get tx() {
        if (!this._tx) {
            this._tx = new Tx(this);
        }
        return this._tx;
    }
    newAccount(mnemonic) {
        const keyPair = this.key.genarateKeyPair(mnemonic);
        return new Account(this, keyPair, mnemonic);
    }
    /**
     * 根据私钥恢复账户
     * @param {string} privateKey 私钥
     */
    recoveryAccountByPrivateKey(privateKey) {
        const privateKeyBuffer = decodeBase64(privateKey);
        // const keyPair = nacl.sign.keyPair.fromSecretKey(privateKeyBuffer);
        const keyPair = this.key.recoveryKeyPair(privateKeyBuffer);
        return new Account(this, keyPair);
    }
}
export default QOSRpc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUU9TUnBjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvcmUvUU9TUnBjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBTyxNQUFNLFdBQVcsQ0FBQztBQUNoQyxPQUFPLFNBQVMsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDdkMsT0FBTyxpQkFBaUIsTUFBTSxpQkFBaUIsQ0FBQztBQUVoRCxNQUFNLE1BQU07SUFnQlYsWUFBWSxNQUFxQztRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUE7SUFDNUIsQ0FBQztJQWpCRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxJQUFXLEVBQUU7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNiLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDeEI7UUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUE7SUFDakIsQ0FBQztJQVVNLFVBQVUsQ0FBQyxRQUFnQjtRQUNoQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVuRCxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDJCQUEyQixDQUFDLFVBQVU7UUFDM0MsTUFBTSxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEQscUVBQXFFO1FBQ3JFLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDMUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUVGO0FBRUQsZUFBZSxNQUFNLENBQUEifQ==