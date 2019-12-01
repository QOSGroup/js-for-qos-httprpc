// import ed25519 from 'supercop.js'
// import nacl from 'tweetnacl';
require('qosKeys');
import { encodeBase64 } from '../utils';
export function sign(account, data) {
    // const sig = nacl.sign.detached(decodeBase64(data), account.keypair.privateKey)
    // const sig = ed25519.Sign(decodeBase64(data), account.keypair.privateKey);
    const sig = global.qosKeys.SignBase64Message(account.keypair.privateKey, data);
    // logger.debug('sig', encodeBase64(sig))
    return encodeBase64(sig);
}
export async function componentSignData(target, res) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2NvbW1vbi9zaWduLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQztBQUNwQyxnQ0FBZ0M7QUFDaEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBR25CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFeEMsTUFBTSxVQUFVLElBQUksQ0FBQyxPQUFnQixFQUFFLElBQVM7SUFDOUMsaUZBQWlGO0lBQ2pGLDRFQUE0RTtJQUM1RSxNQUFNLEdBQUcsR0FBSSxNQUFjLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXhGLHlDQUF5QztJQUV6QyxPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUMxQixDQUFDO0FBRUQsTUFBTSxDQUFDLEtBQUssVUFBVSxpQkFBaUIsQ0FBQyxNQUFVLEVBQUUsR0FBUTtJQUMxRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUUsTUFBYyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzlELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUV0QyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBO0lBQ3hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRztRQUNoQyxJQUFJLEVBQUUsMEJBQTBCO1FBQ2hDLDBEQUEwRDtRQUMxRCxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRO0tBQy9CLENBQUE7SUFDRCxPQUFPLE1BQU0sQ0FBQTtBQUNmLENBQUMifQ==