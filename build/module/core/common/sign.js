// import ed25519 from 'ed25519';
import ed25519 from 'supercop.js';
import { decodeBase64, encodeBase64 } from '../utils';
export function sign(account, data) {
    // const sig = nacl.sign.detached(decodeBase64(data), account.keypair.privateKey)
    // const sig = ed25519.Sign(decodeBase64(data), account.keypair.privateKey);
    const sig = ed25519.sign(decodeBase64(data), account.keypair.publicKey, account.keypair.privateKey);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2NvbW1vbi9zaWduLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlDQUFpQztBQUNqQyxPQUFPLE9BQU8sTUFBTSxhQUFhLENBQUE7QUFHakMsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFdEQsTUFBTSxVQUFVLElBQUksQ0FBQyxPQUFnQixFQUFFLElBQVM7SUFDOUMsaUZBQWlGO0lBQ2pGLDRFQUE0RTtJQUM1RSxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRXBHLHlDQUF5QztJQUV6QyxPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUMxQixDQUFDO0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE1BQVcsRUFBRSxHQUFRO0lBQ3JELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBRSxNQUFjLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDOUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3RDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUE7SUFDeEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHO1FBQ2hDLElBQUksRUFBRSwwQkFBMEI7UUFDaEMsMERBQTBEO1FBQzFELEtBQUssRUFBRyxNQUFjLENBQUMsT0FBTyxDQUFDLE1BQU07S0FDdEMsQ0FBQTtJQUNELE9BQU8sTUFBTSxDQUFBO0FBQ2YsQ0FBQyJ9