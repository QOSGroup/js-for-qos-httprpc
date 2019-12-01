// import ed25519 from 'supercop.js'
// import nacl from 'tweetnacl';
require('qosKeys');
import { encodeBase64 } from '../utils';
export function sign(account, data) {
    // const sig = nacl.sign.detached(decodeBase64(data), account.keypair.privateKey)
    // const sig = ed25519.Sign(decodeBase64(data), account.keypair.privateKey);
    const sig = global.qosKeys.SignBase64Message(account.keypair.hexPrivateKey, data);
    // logger.debug('sig', encodeBase64(sig))
    return encodeBase64(sig);
}
export async function componentSignData(target, res) {
    const sig = sign(target.account, res.data.sign_bytes);
    const resObj = JSON.parse(res.data.tx);
    const pubkeyBase64 = global.qosKeys.EncodeBase64(target.account.pubKeyBz);
    resObj.value.sigature[0].signature = sig;
    resObj.value.sigature[0].pubkey = {
        type: 'tendermint/PubKeyEd25519',
        // 'value': 'lDomDLEe+ou01k4FsNLJOdU10rhlpBxVQR+BAwSpUzc='
        value: pubkeyBase64
    };
    return resObj;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2NvbW1vbi9zaWduLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQztBQUNwQyxnQ0FBZ0M7QUFDaEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBR25CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFeEMsTUFBTSxVQUFVLElBQUksQ0FBQyxPQUFnQixFQUFFLElBQVM7SUFDOUMsaUZBQWlGO0lBQ2pGLDRFQUE0RTtJQUM1RSxNQUFNLEdBQUcsR0FBSSxNQUFjLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRTNGLHlDQUF5QztJQUV6QyxPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUMxQixDQUFDO0FBRUQsTUFBTSxDQUFDLEtBQUssVUFBVSxpQkFBaUIsQ0FBQyxNQUFVLEVBQUUsR0FBUTtJQUMxRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUUsTUFBYyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzlELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUN0QyxNQUFNLFlBQVksR0FBSSxNQUFjLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBRWxGLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUE7SUFDeEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHO1FBQ2hDLElBQUksRUFBRSwwQkFBMEI7UUFDaEMsMERBQTBEO1FBQzFELEtBQUssRUFBRSxZQUFZO0tBQ3BCLENBQUE7SUFDRCxPQUFPLE1BQU0sQ0FBQTtBQUNmLENBQUMifQ==