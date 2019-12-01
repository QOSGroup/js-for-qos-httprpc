import Account from './Account';
import SecretKey from './SecretKey';
import Tx from './Tx';
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
    get(url) {
        return this.request.get(url);
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
        const keyPair = this.key.recoveryKeyPair(privateKey);
        return new Account(this, keyPair);
    }
    // 账户地址格式校验
    verifyBech32StringByAccAddress(accAddress) {
        const isValidate = this.key.verifyBech32String(accAddress);
        return isValidate;
    }
}
export default QOSRpc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUU9TUnBjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvcmUvUU9TUnBjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBTyxNQUFNLFdBQVcsQ0FBQztBQUNoQyxPQUFPLFNBQVMsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXRCLE9BQU8saUJBQWlCLE1BQU0saUJBQWlCLENBQUM7QUFFaEQsTUFBTSxPQUFPLE1BQU07SUFnQmpCLFlBQVksTUFBcUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFqQkQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsSUFBVyxFQUFFO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDYixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ3hCO1FBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ2pCLENBQUM7SUFTTSxJQUFJLENBQUMsR0FBVSxFQUFFLElBQWU7UUFDckMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLEdBQUcsQ0FBQyxHQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLGdCQUFnQjtRQUNyQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRU0sYUFBYSxDQUFDLFFBQWdCO1FBQ25DLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRW5ELE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksMkJBQTJCLENBQUMsVUFBa0I7UUFDbkQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDcEQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELFdBQVc7SUFDSiw4QkFBOEIsQ0FBQyxVQUFrQjtRQUN0RCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzFELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Q0FFRjtBQUVELGVBQWUsTUFBTSxDQUFBIn0=