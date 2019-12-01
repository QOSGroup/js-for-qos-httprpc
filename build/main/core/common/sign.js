"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import ed25519 from 'supercop.js'
// import nacl from 'tweetnacl';
require('qosKeys');
const utils_1 = require("../utils");
function sign(account, data) {
    // const sig = nacl.sign.detached(decodeBase64(data), account.keypair.privateKey)
    // const sig = ed25519.Sign(decodeBase64(data), account.keypair.privateKey);
    const sig = global.qosKeys.SignBase64Message(account.keypair.privateKey, data);
    // logger.debug('sig', encodeBase64(sig))
    return utils_1.encodeBase64(sig);
}
exports.sign = sign;
async function componentSignData(target, res) {
    const sig = sign(target.account, res.data.sign_bytes);
    const resObj = JSON.parse(res.data.tx);
    resObj.value.sigature[0].signature = sig;
    resObj.value.sigature[0].pubkey = {
        type: 'tendermint/PubKeyEd25519',
        // 'value': 'lDomDLEe+ou01k4FsNLJOdU10rhlpBxVQR+BAwSpUzc='
        value: target.account.pubKeyBz
    };
    return resObj;
}
exports.componentSignData = componentSignData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2NvbW1vbi9zaWduLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0NBQW9DO0FBQ3BDLGdDQUFnQztBQUNoQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFHbkIsb0NBQXdDO0FBRXhDLFNBQWdCLElBQUksQ0FBQyxPQUFnQixFQUFFLElBQVM7SUFDOUMsaUZBQWlGO0lBQ2pGLDRFQUE0RTtJQUM1RSxNQUFNLEdBQUcsR0FBSSxNQUFjLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXhGLHlDQUF5QztJQUV6QyxPQUFPLG9CQUFZLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDMUIsQ0FBQztBQVJELG9CQVFDO0FBRU0sS0FBSyxVQUFVLGlCQUFpQixDQUFDLE1BQVUsRUFBRSxHQUFRO0lBQzFELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBRSxNQUFjLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDOUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBRXRDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUE7SUFDeEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHO1FBQ2hDLElBQUksRUFBRSwwQkFBMEI7UUFDaEMsMERBQTBEO1FBQzFELEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVE7S0FDL0IsQ0FBQTtJQUNELE9BQU8sTUFBTSxDQUFBO0FBQ2YsQ0FBQztBQVhELDhDQVdDIn0=