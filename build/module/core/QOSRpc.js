import Account from './Account';
import SecretKey from './SecretKey';
import Tx from './Tx';
import { decodeBase64 } from './utils';
import createAxioRequest from './utils/request';
export class QOSRpc {
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
    post(url, data) {
        return this.request.post(url, data);
    }
    generateMnemonic() {
        return this.key.generateMnemonic();
    }
    importAccount(mnemonic) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUU9TUnBjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvcmUvUU9TUnBjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBTyxNQUFNLFdBQVcsQ0FBQztBQUNoQyxPQUFPLFNBQVMsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXRCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDdkMsT0FBTyxpQkFBaUIsTUFBTSxpQkFBaUIsQ0FBQztBQUVoRCxNQUFNLE9BQU8sTUFBTTtJQWdCakIsWUFBWSxNQUFxQztRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQWpCRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxJQUFXLEVBQUU7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNiLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDeEI7UUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUE7SUFDakIsQ0FBQztJQVNNLElBQUksQ0FBQyxHQUFVLEVBQUUsSUFBZTtRQUNyQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sZ0JBQWdCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFTSxhQUFhLENBQUMsUUFBZ0I7UUFDbkMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbkQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7O09BR0c7SUFDSSwyQkFBMkIsQ0FBQyxVQUFVO1FBQzNDLE1BQU0sZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELHFFQUFxRTtRQUNyRSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQzFELE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FFRjtBQUVELGVBQWUsTUFBTSxDQUFBIn0=