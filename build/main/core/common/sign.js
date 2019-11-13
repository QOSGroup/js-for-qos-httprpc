"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import ed25519 from 'supercop.js'
// import nacl from 'tweetnacl';
require('qosKeys');
const utils_1 = require("../utils");
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
    resObj.value.sigature[0].signature = sig;
    resObj.value.sigature[0].pubkey = {
        type: 'tendermint/PubKeyEd25519',
        // 'value': 'lDomDLEe+ou01k4FsNLJOdU10rhlpBxVQR+BAwSpUzc='
        value: target.account.pubKey
    };
    return resObj;
}
exports.componentSignData = componentSignData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2NvbW1vbi9zaWduLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0NBQW9DO0FBQ3BDLGdDQUFnQztBQUNoQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFHbkIsb0NBQXNEO0FBRXRELFNBQWdCLElBQUksQ0FBQyxPQUFnQixFQUFFLElBQVM7SUFDOUMsaUZBQWlGO0lBQ2pGLDRFQUE0RTtJQUM1RSxNQUFNLEdBQUcsR0FBSSxNQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxvQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFekYseUNBQXlDO0lBRXpDLE9BQU8sb0JBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUMxQixDQUFDO0FBUkQsb0JBUUM7QUFFRCxTQUFnQixpQkFBaUIsQ0FBQyxNQUFVLEVBQUUsR0FBUTtJQUNwRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUUsTUFBYyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzlELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUV0QyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBO0lBQ3hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRztRQUNsQyxJQUFJLEVBQUUsMEJBQTBCO1FBQ2hDLDBEQUEwRDtRQUN4RCxLQUFLLEVBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNO0tBQzlCLENBQUE7SUFDRCxPQUFPLE1BQU0sQ0FBQTtBQUNmLENBQUM7QUFYRCw4Q0FXQyJ9