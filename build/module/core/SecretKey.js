import bech32 from 'bech32';
import { generateMnemonic, mnemonicToSeedSync } from 'bip39';
// import ed25519 from 'ed25519';
import ed25519 from 'supercop.js';
require('keys');
import { buf2hex, getHash256, stringToBuffer } from './utils';
export default class SecretKey {
    generateMnemonic() {
        // 商 256，生成24个助记单词, 商 128，生成12个助记单词
        const mnemonic = generateMnemonic(128);
        return mnemonic;
    }
    genarateKeyPair(mnemonic) {
        const seed = mnemonicToSeedSync(mnemonic);
        // 从助记词中获取私钥种子
        const [privateSeed, err] = global.keys.DeriveQOSPrivateKeySeed(seed);
        // const [privateSeed, err] = (global as any).hdpath.DerivePrivateKeyForPath(secret, chaincode, "44'/389'/0'/0/0")
        if (err != null) {
            // tslint:disable-next-line: no-console
            console.log(err);
        }
        const secret256 = getHash256(privateSeed);
        // const keyPair = ed25519.MakeKeypair(new Buffer(secret256));
        const keyPair = ed25519.createKeyPair(new Buffer(secret256));
        // const keyPair = nacl.sign.keyPair.fromSeed(new Uint8Array(secret256));
        // keyPair.bech32pubkey = this.getBech32PubKey(keyPair.publicKey)
        return {
            publicKey: keyPair.publicKey,
            privateKey: keyPair.secretKey,
            bech32pubkey: this.getBech32PubKey(keyPair.publicKey)
        };
    }
    getBech32PubKey(publicKey) {
        const [bech32pubkey, err2] = global.keys.Bech32ifyQOSAccPubkey(publicKey);
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
        const pkAarry = getHash256(publicKey);
        const nw = bech32.toWords(Buffer.from(pkAarry.slice(0, 20)));
        const addr = bech32.encode('qosacc', nw);
        return addr;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjcmV0S2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvcmUvU2VjcmV0S2V5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDN0QsaUNBQWlDO0FBQ2pDLE9BQU8sT0FBTyxNQUFNLGFBQWEsQ0FBQTtBQUNqQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEIsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRTlELE1BQU0sQ0FBQyxPQUFPLE9BQU8sU0FBUztJQUNyQixnQkFBZ0I7UUFDckIsbUNBQW1DO1FBQ25DLE1BQU0sUUFBUSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFTSxlQUFlLENBQUMsUUFBZ0I7UUFDckMsTUFBTSxJQUFJLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsY0FBYztRQUNkLE1BQU0sQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLEdBQUksTUFBYyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5RSxrSEFBa0g7UUFFbEgsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2YsdUNBQXVDO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDakI7UUFDRCxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFMUMsOERBQThEO1FBQzlELE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUU3RCx5RUFBeUU7UUFFekUsaUVBQWlFO1FBQ2pFLE9BQU87WUFDTCxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7WUFDNUIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxTQUFTO1lBQzdCLFlBQVksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7U0FDdEQsQ0FBQTtJQUNILENBQUM7SUFFTSxlQUFlLENBQUMsU0FBUztRQUM5QixNQUFNLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxHQUFJLE1BQWMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkYsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxDQUFDO1NBQ1o7UUFDRCxPQUFPLFlBQVksQ0FBQTtJQUNyQixDQUFDO0lBRU0sZUFBZSxDQUFDLFVBQXNCO1FBQzNDLE1BQU0sU0FBUyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUMvRSxPQUFPO1lBQ0wsU0FBUztZQUNULFVBQVU7WUFDVixZQUFZLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7U0FDOUMsQ0FBQTtJQUNILENBQUM7SUFFTSxJQUFJO1FBRVQsaUJBQWlCO0lBQ25CLENBQUM7SUFFTSxVQUFVLENBQUMsU0FBcUI7UUFDckMsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0YifQ==