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
    newAccount(mnemonic) {
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
exports.default = QOSRpc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUU9TUnBjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvcmUvUU9TUnBjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQWdDO0FBQ2hDLDREQUFvQztBQUNwQyw4Q0FBc0I7QUFDdEIsbUNBQXVDO0FBQ3ZDLDhEQUFnRDtBQUVoRCxNQUFNLE1BQU07SUFnQlYsWUFBWSxNQUFxQztRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksbUJBQVMsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFqQkQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsSUFBVyxFQUFFO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDYixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksWUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ3hCO1FBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ2pCLENBQUM7SUFVTSxVQUFVLENBQUMsUUFBZ0I7UUFDaEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbkQsT0FBTyxJQUFJLGlCQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksMkJBQTJCLENBQUMsVUFBVTtRQUMzQyxNQUFNLGdCQUFnQixHQUFHLG9CQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEQscUVBQXFFO1FBQ3JFLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDMUQsT0FBTyxJQUFJLGlCQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FFRjtBQUVELGtCQUFlLE1BQU0sQ0FBQSJ9