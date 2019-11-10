// import ed25519 from 'supercop.js'
// import nacl from 'tweetnacl';
require('qosKeys');
import { decodeBase64, encodeBase64 } from '../utils';
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
    resObj.value.sigature[0].signature = sig;
    resObj.value.sigature[0].pubkey = {
        type: 'tendermint/PubKeyEd25519',
        // 'value': 'lDomDLEe+ou01k4FsNLJOdU10rhlpBxVQR+BAwSpUzc='
        value: target.account.pubkey
    };
    return resObj;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2NvbW1vbi9zaWduLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQztBQUNwQyxnQ0FBZ0M7QUFDaEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRW5CLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXRELE1BQU0sVUFBVSxJQUFJLENBQUMsT0FBZ0IsRUFBRSxJQUFTO0lBQzlDLGlGQUFpRjtJQUNqRiw0RUFBNEU7SUFDNUUsTUFBTSxHQUFHLEdBQUksTUFBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFekYseUNBQXlDO0lBRXpDLE9BQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQzFCLENBQUM7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsTUFBVyxFQUFFLEdBQVE7SUFDckQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFFLE1BQWMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUM5RCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDdEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQTtJQUN4QyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUc7UUFDaEMsSUFBSSxFQUFFLDBCQUEwQjtRQUNoQywwREFBMEQ7UUFDMUQsS0FBSyxFQUFHLE1BQWMsQ0FBQyxPQUFPLENBQUMsTUFBTTtLQUN0QyxDQUFBO0lBQ0QsT0FBTyxNQUFNLENBQUE7QUFDZixDQUFDIn0=