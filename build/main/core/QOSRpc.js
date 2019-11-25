"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = __importDefault(require("./Account"));
const SecretKey_1 = __importDefault(require("./SecretKey"));
const Tx_1 = __importDefault(require("./Tx"));
const request_1 = __importDefault(require("./utils/request"));
class QOSRpc {
    constructor(config) {
        this.config = config;
        this.key = new SecretKey_1.default();
    }
    get request() {
        return request_1.default(this.config.baseUrl);
    }
    get tx() {
        if (!this._tx) {
            this._tx = new Tx_1.default(this);
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
        return new Account_1.default(this, keyPair, mnemonic);
    }
    /**
     * 根据私钥恢复账户
     * @param {string} privateKey 私钥
     */
    recoveryAccountByPrivateKey(privateKey) {
        const keyPair = this.key.recoveryKeyPair(privateKey);
        return new Account_1.default(this, keyPair);
    }
    // 账户地址格式校验
    verifyBech32StringByAccAddress(accAddress) {
        const isValidate = this.key.verifyBech32String(accAddress);
        return isValidate;
    }
}
exports.QOSRpc = QOSRpc;
exports.default = QOSRpc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUU9TUnBjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvcmUvUU9TUnBjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQWdDO0FBQ2hDLDREQUFvQztBQUNwQyw4Q0FBc0I7QUFFdEIsOERBQWdEO0FBRWhELE1BQWEsTUFBTTtJQWdCakIsWUFBWSxNQUFxQztRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksbUJBQVMsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFqQkQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsSUFBVyxFQUFFO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDYixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksWUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ3hCO1FBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ2pCLENBQUM7SUFTTSxJQUFJLENBQUMsR0FBVSxFQUFFLElBQWU7UUFDckMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLEdBQUcsQ0FBQyxHQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLGdCQUFnQjtRQUNyQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRU0sYUFBYSxDQUFDLFFBQWdCO1FBQ25DLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRW5ELE9BQU8sSUFBSSxpQkFBTyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDJCQUEyQixDQUFDLFVBQWtCO1FBQ25ELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3BELE9BQU8sSUFBSSxpQkFBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsV0FBVztJQUNKLDhCQUE4QixDQUFDLFVBQWtCO1FBQ3RELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDMUQsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztDQUVGO0FBckRELHdCQXFEQztBQUVELGtCQUFlLE1BQU0sQ0FBQSJ9