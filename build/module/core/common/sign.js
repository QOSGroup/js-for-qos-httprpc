// import ed25519 from 'supercop.js'
// import nacl from 'tweetnacl';
require('qosKeys');
import { decodeBase64, encodeBase64 } from '../utils';
import logger from '../utils/log';
export function sign(account, data) {
    // const sig = nacl.sign.detached(decodeBase64(data), account.keypair.privateKey)
    // const sig = ed25519.Sign(decodeBase64(data), account.keypair.privateKey);
    const sig = global.qosKeys.Sign(account.keypair.privateKey, decodeBase64(data));
    // logger.debug('sig', encodeBase64(sig))
    return encodeBase64(sig);
}
export function componentSignData(target, res) {
    const sig = sign(target.account, res.data.sign_bytes);
    const resObj = JSON.parse(res.data.tx);
    logger.debug('target', target);
    logger.debug('res', res);
    resObj.value.sigature[0].signature = sig;
    resObj.value.sigature[0].pubkey = {
        type: 'tendermint/PubKeyEd25519',
        // 'value': 'lDomDLEe+ou01k4FsNLJOdU10rhlpBxVQR+BAwSpUzc='
        value: target.account.pubKey
    };
    logger.debug('resobj', resObj);
    logger.debug('itx', resObj.value.itx[0]);
    return resObj;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2NvbW1vbi9zaWduLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQztBQUNwQyxnQ0FBZ0M7QUFDaEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBR25CLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3RELE9BQU8sTUFBTSxNQUFNLGNBQWMsQ0FBQztBQUVsQyxNQUFNLFVBQVUsSUFBSSxDQUFDLE9BQWdCLEVBQUUsSUFBUztJQUM5QyxpRkFBaUY7SUFDakYsNEVBQTRFO0lBQzVFLE1BQU0sR0FBRyxHQUFJLE1BQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRXpGLHlDQUF5QztJQUV6QyxPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUMxQixDQUFDO0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE1BQVUsRUFBRSxHQUFRO0lBQ3BELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBRSxNQUFjLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDOUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3RDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQzlCLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUE7SUFDeEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHO1FBQ2xDLElBQUksRUFBRSwwQkFBMEI7UUFDaEMsMERBQTBEO1FBQ3hELEtBQUssRUFBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU07S0FDOUIsQ0FBQTtJQUNELE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQzlCLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDeEMsT0FBTyxNQUFNLENBQUE7QUFDZixDQUFDIn0=