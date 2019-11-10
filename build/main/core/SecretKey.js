"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bip39_1 = require("bip39");
require('qosKeys');
const utils_1 = require("./utils");
class SecretKey {
    generateMnemonic() {
        // 商 256，生成24个助记单词, 商 128，生成12个助记单词
        const mnemonic = bip39_1.generateMnemonic(128);
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
exports.default = SecretKey;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjcmV0S2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvcmUvU2VjcmV0S2V5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaUNBQXlDO0FBQ3pDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuQixtQ0FBa0Q7QUFFbEQsTUFBcUIsU0FBUztJQUNyQixnQkFBZ0I7UUFDckIsbUNBQW1DO1FBQ25DLE1BQU0sUUFBUSxHQUFHLHdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFTSxlQUFlLENBQUMsUUFBZ0I7UUFDckMsNkNBQTZDO1FBQzdDLGNBQWM7UUFDZCxNQUFNLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsR0FBSSxNQUFjLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRixrSEFBa0g7UUFFbEgsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2YsdUNBQXVDO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDakI7UUFDRCw2Q0FBNkM7UUFDN0MsZ0VBQWdFO1FBQ2hFLGlFQUFpRTtRQUNqRSxPQUFPO1lBQ0wsU0FBUyxFQUFFLFFBQVE7WUFDbkIsVUFBVSxFQUFFLFFBQVE7WUFDcEIsWUFBWSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO1NBQzdDLENBQUE7SUFDSCxDQUFDO0lBRU0sZUFBZSxDQUFDLFNBQVM7UUFDOUIsTUFBTSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsR0FBSSxNQUFjLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RGLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUNoQixNQUFNLElBQUksQ0FBQztTQUNaO1FBQ0QsT0FBTyxZQUFZLENBQUE7SUFDckIsQ0FBQztJQUVNLGVBQWUsQ0FBQyxVQUFzQjtRQUMzQyxNQUFNLFNBQVMsR0FBRyxzQkFBYyxDQUFDLGVBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQy9FLE9BQU87WUFDTCxTQUFTO1lBQ1QsVUFBVTtZQUNWLFlBQVksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztTQUM5QyxDQUFBO0lBQ0gsQ0FBQztJQUVNLElBQUk7UUFFVCxpQkFBaUI7SUFDbkIsQ0FBQztJQUVNLFVBQVUsQ0FBQyxTQUFxQjtRQUNyQyxNQUFNLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxHQUFJLE1BQWMsQ0FBQyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUYsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2YsTUFBTSxHQUFHLENBQUM7U0FDWDtRQUNELE9BQU8sVUFBVSxDQUFBO1FBQ2pCLHlDQUF5QztRQUN6QyxnRUFBZ0U7UUFDaEUsNENBQTRDO1FBQzVDLGVBQWU7SUFDakIsQ0FBQztDQUNGO0FBNURELDRCQTREQyJ9