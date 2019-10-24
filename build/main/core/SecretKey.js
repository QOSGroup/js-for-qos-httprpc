"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bech32_1 = __importDefault(require("bech32"));
const bip39_1 = require("bip39");
// import ed25519 from 'ed25519';
const supercop_js_1 = __importDefault(require("supercop.js"));
require('keys');
const utils_1 = require("./utils");
class SecretKey {
    generateMnemonic() {
        // 商 256，生成24个助记单词, 商 128，生成12个助记单词
        const mnemonic = bip39_1.generateMnemonic(128);
        return mnemonic;
    }
    genarateKeyPair(mnemonic) {
        const seed = bip39_1.mnemonicToSeedSync(mnemonic);
        // 从助记词中获取私钥种子
        const [privateSeed, err] = global.keys.DeriveQOSPrivateKeySeed(seed);
        // const [privateSeed, err] = (global as any).hdpath.DerivePrivateKeyForPath(secret, chaincode, "44'/389'/0'/0/0")
        if (err != null) {
            // tslint:disable-next-line: no-console
            console.log(err);
        }
        const secret256 = utils_1.getHash256(privateSeed);
        // const keyPair = ed25519.MakeKeypair(new Buffer(secret256));
        const keyPair = supercop_js_1.default.createKeyPair(new Buffer(secret256));
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
        const publicKey = utils_1.stringToBuffer(utils_1.buf2hex(privateKey).substring(64, 128), 'hex');
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
        const pkAarry = utils_1.getHash256(publicKey);
        const nw = bech32_1.default.toWords(Buffer.from(pkAarry.slice(0, 20)));
        const addr = bech32_1.default.encode('qosacc', nw);
        return addr;
    }
}
exports.default = SecretKey;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjcmV0S2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvcmUvU2VjcmV0S2V5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esb0RBQTRCO0FBQzVCLGlDQUE2RDtBQUM3RCxpQ0FBaUM7QUFDakMsOERBQWlDO0FBQ2pDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoQixtQ0FBOEQ7QUFFOUQsTUFBcUIsU0FBUztJQUNyQixnQkFBZ0I7UUFDckIsbUNBQW1DO1FBQ25DLE1BQU0sUUFBUSxHQUFHLHdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFTSxlQUFlLENBQUMsUUFBZ0I7UUFDckMsTUFBTSxJQUFJLEdBQUcsMEJBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsY0FBYztRQUNkLE1BQU0sQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLEdBQUksTUFBYyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5RSxrSEFBa0g7UUFFbEgsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2YsdUNBQXVDO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDakI7UUFDRCxNQUFNLFNBQVMsR0FBRyxrQkFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTFDLDhEQUE4RDtRQUM5RCxNQUFNLE9BQU8sR0FBRyxxQkFBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRTdELHlFQUF5RTtRQUV6RSxpRUFBaUU7UUFDakUsT0FBTztZQUNMLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUztZQUM1QixVQUFVLEVBQUUsT0FBTyxDQUFDLFNBQVM7WUFDN0IsWUFBWSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztTQUN0RCxDQUFBO0lBQ0gsQ0FBQztJQUVNLGVBQWUsQ0FBQyxTQUFTO1FBQzlCLE1BQU0sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEdBQUksTUFBYyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDaEIsTUFBTSxJQUFJLENBQUM7U0FDWjtRQUNELE9BQU8sWUFBWSxDQUFBO0lBQ3JCLENBQUM7SUFFTSxlQUFlLENBQUMsVUFBc0I7UUFDM0MsTUFBTSxTQUFTLEdBQUcsc0JBQWMsQ0FBQyxlQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUMvRSxPQUFPO1lBQ0wsU0FBUztZQUNULFVBQVU7WUFDVixZQUFZLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7U0FDOUMsQ0FBQTtJQUNILENBQUM7SUFFTSxJQUFJO1FBRVQsaUJBQWlCO0lBQ25CLENBQUM7SUFFTSxVQUFVLENBQUMsU0FBcUI7UUFDckMsTUFBTSxPQUFPLEdBQUcsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QyxNQUFNLEVBQUUsR0FBRyxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxNQUFNLElBQUksR0FBRyxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0Y7QUE3REQsNEJBNkRDIn0=