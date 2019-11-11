"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import ed25519 from 'supercop.js'
// import nacl from 'tweetnacl';
require('qosKeys');
const utils_1 = require("../utils");
const log_1 = __importDefault(require("../utils/log"));
function sign(account, data) {
    // const sig = nacl.sign.detached(decodeBase64(data), account.keypair.privateKey)
    // const sig = ed25519.Sign(decodeBase64(data), account.keypair.privateKey);
    const sig = global.qosKeys.Sign(account.keypair.privateKey, utils_1.decodeBase64(data));
    // logger.debug('sig', encodeBase64(sig))
    return utils_1.encodeBase64(sig);
}
exports.sign = sign;
function componentSignData(target, res) {
    const sig = sign(target.account, res.data.sign_bytes);
    const resObj = JSON.parse(res.data.tx);
    log_1.default.debug('target', target);
    log_1.default.debug('res', res);
    resObj.value.sigature[0].signature = sig;
    resObj.value.sigature[0].pubkey = {
        type: 'tendermint/PubKeyEd25519',
        // 'value': 'lDomDLEe+ou01k4FsNLJOdU10rhlpBxVQR+BAwSpUzc='
        value: target.account.pubKey
    };
    log_1.default.debug('resobj', resObj);
    log_1.default.debug('itx', resObj.value.itx[0]);
    return resObj;
}
exports.componentSignData = componentSignData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2NvbW1vbi9zaWduLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0NBQW9DO0FBQ3BDLGdDQUFnQztBQUNoQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFHbkIsb0NBQXNEO0FBQ3RELHVEQUFrQztBQUVsQyxTQUFnQixJQUFJLENBQUMsT0FBZ0IsRUFBRSxJQUFTO0lBQzlDLGlGQUFpRjtJQUNqRiw0RUFBNEU7SUFDNUUsTUFBTSxHQUFHLEdBQUksTUFBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsb0JBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRXpGLHlDQUF5QztJQUV6QyxPQUFPLG9CQUFZLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDMUIsQ0FBQztBQVJELG9CQVFDO0FBRUQsU0FBZ0IsaUJBQWlCLENBQUMsTUFBVSxFQUFFLEdBQVE7SUFDcEQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFFLE1BQWMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUM5RCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDdEMsYUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDOUIsYUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQTtJQUN4QyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUc7UUFDbEMsSUFBSSxFQUFFLDBCQUEwQjtRQUNoQywwREFBMEQ7UUFDeEQsS0FBSyxFQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTTtLQUM5QixDQUFBO0lBQ0QsYUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDOUIsYUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN4QyxPQUFPLE1BQU0sQ0FBQTtBQUNmLENBQUM7QUFkRCw4Q0FjQyJ9