"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = __importDefault(require("./Account"));
const SecretKey_1 = __importDefault(require("./SecretKey"));
const Tx_1 = __importDefault(require("./Tx"));
const utils_1 = require("./utils");
const request_1 = __importDefault(require("./utils/request"));
class QOSRpc {
    constructor(config) {
        this.config = config;
        this.key = new SecretKey_1.default();
        this.account = new Account_1.default(this);
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
        const privateKeyBuffer = utils_1.decodeBase64(privateKey);
        // const keyPair = nacl.sign.keyPair.fromSecretKey(privateKeyBuffer);
        const keyPair = this.key.recoveryKeyPair(privateKeyBuffer);
        return new Account_1.default(this, keyPair);
    }
}
exports.QOSRpc = QOSRpc;
exports.default = QOSRpc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUU9TUnBjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvcmUvUU9TUnBjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQWdDO0FBQ2hDLDREQUFvQztBQUNwQyw4Q0FBc0I7QUFFdEIsbUNBQXVDO0FBQ3ZDLDhEQUFnRDtBQUVoRCxNQUFhLE1BQU07SUFpQmpCLFlBQVksTUFBcUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLG1CQUFTLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBbkJELElBQVcsT0FBTztRQUNoQixPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELElBQVcsRUFBRTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLFlBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUN4QjtRQUNELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNqQixDQUFDO0lBV00sSUFBSSxDQUFDLEdBQVUsRUFBRSxJQUFlO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxHQUFHLENBQUMsR0FBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSxnQkFBZ0I7UUFDckIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVNLGFBQWEsQ0FBQyxRQUFnQjtRQUNuQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVuRCxPQUFPLElBQUksaUJBQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7O09BR0c7SUFDSSwyQkFBMkIsQ0FBQyxVQUFVO1FBQzNDLE1BQU0sZ0JBQWdCLEdBQUcsb0JBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRCxxRUFBcUU7UUFDckUsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUMxRCxPQUFPLElBQUksaUJBQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUVGO0FBbkRELHdCQW1EQztBQUVELGtCQUFlLE1BQU0sQ0FBQSJ9