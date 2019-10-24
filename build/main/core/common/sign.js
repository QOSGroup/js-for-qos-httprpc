"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import ed25519 from 'ed25519';
const supercop_js_1 = __importDefault(require("supercop.js"));
const utils_1 = require("../utils");
function sign(account, data) {
    // const sig = nacl.sign.detached(decodeBase64(data), account.keypair.privateKey)
    // const sig = ed25519.Sign(decodeBase64(data), account.keypair.privateKey);
    const sig = supercop_js_1.default.sign(utils_1.decodeBase64(data), account.keypair.publicKey, account.keypair.privateKey);
    // logger.debug('sig', encodeBase64(sig))
    return utils_1.encodeBase64(sig);
}
exports.sign = sign;
function componentSignData(target, res) {
    const sig = sign(target.account, res.data.sign_bytes);
    const resObj = JSON.parse(res.data.tx);
    resObj.value.sigature[0].signature = sig;
    resObj.value.sigature[0].pubkey = {
        type: 'tendermint/PubKeyEd25519',
        // 'value': 'lDomDLEe+ou01k4FsNLJOdU10rhlpBxVQR+BAwSpUzc='
        value: target.account.pubkey
    };
    return resObj;
}
exports.componentSignData = componentSignData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2NvbW1vbi9zaWduLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsaUNBQWlDO0FBQ2pDLDhEQUFpQztBQUdqQyxvQ0FBc0Q7QUFFdEQsU0FBZ0IsSUFBSSxDQUFDLE9BQWdCLEVBQUUsSUFBUztJQUM5QyxpRkFBaUY7SUFDakYsNEVBQTRFO0lBQzVFLE1BQU0sR0FBRyxHQUFHLHFCQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUVwRyx5Q0FBeUM7SUFFekMsT0FBTyxvQkFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQzFCLENBQUM7QUFSRCxvQkFRQztBQUVELFNBQWdCLGlCQUFpQixDQUFDLE1BQVcsRUFBRSxHQUFRO0lBQ3JELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBRSxNQUFjLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDOUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3RDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUE7SUFDeEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHO1FBQ2hDLElBQUksRUFBRSwwQkFBMEI7UUFDaEMsMERBQTBEO1FBQzFELEtBQUssRUFBRyxNQUFjLENBQUMsT0FBTyxDQUFDLE1BQU07S0FDdEMsQ0FBQTtJQUNELE9BQU8sTUFBTSxDQUFBO0FBQ2YsQ0FBQztBQVZELDhDQVVDIn0=