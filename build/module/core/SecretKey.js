import { generateMnemonic } from 'bip39';
require('qosKeys');
import { buf2hex, stringToBuffer } from './utils';
export default class SecretKey {
    generateMnemonic() {
        // 商 256，生成24个助记单词, 商 128，生成12个助记单词
        const mnemonic = generateMnemonic(128);
        return mnemonic;
    }
    genarateKeyPair(mnemonic) {
        // const seed = mnemonicToSeedSync(mnemonic);
        // 从助记词中获取私钥种子
        const [prikeyBz, pubkeyBz, err] = global.qosKeys.DeriveQOSKey(mnemonic);
        // const [privateSeed, err] = (global as any).hdpath.DerivePrivateKeyForPath(secret, chaincode, "44'/389'/0'/0/0")
        if (err != null) {
            // tslint:disable-next-line: no-console
            console.log(err);
        }
        // const secret256 = getHash256(privateSeed);
        // const keyPair = ed25519.createKeyPair(new Buffer(secret256));
        // keyPair.bech32pubkey = this.getBech32PubKey(keyPair.publicKey)
        return {
            publicKey: pubkeyBz,
            privateKey: prikeyBz,
            bech32pubkey: this.getBech32PubKey(pubkeyBz)
        };
    }
    getBech32PubKey(publicKey) {
        const [bech32pubkey, err2] = global.qosKeys.Bech32ifyQOSAccPubKey(publicKey);
        if (err2 != null) {
            throw err2;
        }
        return bech32pubkey;
    }
    recoveryKeyPair(privateKey) {
        const publicKey = stringToBuffer(buf2hex(privateKey).substring(64, 128), 'hex');
        return {
            publicKey,
            privateKey,
            bech32pubkey: this.getBech32PubKey(publicKey)
        };
    }
    test() {
        // return keyPair
    }
    getAddress(publicKey) {
        const [addrBech32, err] = global.qosKeys.Bech32ifyQOSAccAddressFromPubKey(publicKey);
        if (err != null) {
            throw err;
        }
        return addrBech32;
        // const pkAarry = getHash256(publicKey);
        // const nw = bech32.toWords(Buffer.from(pkAarry.slice(0, 20)));
        // const addr = bech32.encode('qosacc', nw);
        // return addr;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjcmV0S2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvcmUvU2VjcmV0S2V5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN6QyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFbEQsTUFBTSxDQUFDLE9BQU8sT0FBTyxTQUFTO0lBQ3JCLGdCQUFnQjtRQUNyQixtQ0FBbUM7UUFDbkMsTUFBTSxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVNLGVBQWUsQ0FBQyxRQUFnQjtRQUNyQyw2Q0FBNkM7UUFDN0MsY0FBYztRQUNkLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxHQUFJLE1BQWMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pGLGtIQUFrSDtRQUVsSCxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDZix1Q0FBdUM7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUNqQjtRQUNELDZDQUE2QztRQUM3QyxnRUFBZ0U7UUFDaEUsaUVBQWlFO1FBQ2pFLE9BQU87WUFDTCxTQUFTLEVBQUUsUUFBUTtZQUNuQixVQUFVLEVBQUUsUUFBUTtZQUNwQixZQUFZLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7U0FDN0MsQ0FBQTtJQUNILENBQUM7SUFFTSxlQUFlLENBQUMsU0FBUztRQUM5QixNQUFNLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxHQUFJLE1BQWMsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEYsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxDQUFDO1NBQ1o7UUFDRCxPQUFPLFlBQVksQ0FBQTtJQUNyQixDQUFDO0lBRU0sZUFBZSxDQUFDLFVBQXNCO1FBQzNDLE1BQU0sU0FBUyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUMvRSxPQUFPO1lBQ0wsU0FBUztZQUNULFVBQVU7WUFDVixZQUFZLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7U0FDOUMsQ0FBQTtJQUNILENBQUM7SUFFTSxJQUFJO1FBRVQsaUJBQWlCO0lBQ25CLENBQUM7SUFFTSxVQUFVLENBQUMsU0FBcUI7UUFDckMsTUFBTSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsR0FBSSxNQUFjLENBQUMsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlGLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtZQUNmLE1BQU0sR0FBRyxDQUFDO1NBQ1g7UUFDRCxPQUFPLFVBQVUsQ0FBQTtRQUNqQix5Q0FBeUM7UUFDekMsZ0VBQWdFO1FBQ2hFLDRDQUE0QztRQUM1QyxlQUFlO0lBQ2pCLENBQUM7Q0FDRiJ9