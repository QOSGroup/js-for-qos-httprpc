"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bip39_1 = require("bip39");
require('qosKeys');
class SecretKey {
    generateMnemonic() {
        // 商 256，生成24个助记单词, 商 128，生成12个助记单词
        const mnemonic = bip39_1.generateMnemonic(128);
        return mnemonic;
    }
    genarateKeyPair(mnemonic) {
        // 根据助记词得到账户信息
        // @ts-ignore
        const [hexprikey, pubkey, accaddr, prikeyBz, pubkeyBz, err] = global.qosKeys.DeriveQOSKey(mnemonic);
        if (err != null) {
            throw err;
        }
        return {
            address: accaddr,
            keyPair: {
                hexPrivateKey: hexprikey,
                privateKey: prikeyBz,
                pubKey: pubkeyBz
            }
        };
    }
    recoveryKeyPair(privateKey) {
        // 根据私钥得到账户信息
        // @ts-ignore
        const [hexprikey, pubkey, accaddr, prikeyBz, pubkeyBz, err] = global.qosKeys.RecoverFromPrivateKey(privateKey);
        if (err != null) {
            throw err;
        }
        return {
            address: accaddr,
            keyPair: {
                hexPrivateKey: hexprikey,
                privateKey: prikeyBz,
                pubKey: pubkeyBz
            }
        };
    }
    verifyBech32String(accAddress) {
        const isValidate = global.qosKeys.VerifyBech32String(accAddress);
        return isValidate;
    }
    getBech32PubKey(publicKey) {
        const [bech32pubkey, err2] = global.qosKeys.Bech32ifyQOSAccPubKey(publicKey);
        if (err2 != null) {
            throw err2;
        }
        return bech32pubkey;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjcmV0S2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvcmUvU2VjcmV0S2V5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaUNBQXlDO0FBRXpDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUVuQixNQUFxQixTQUFTO0lBQ3JCLGdCQUFnQjtRQUNyQixtQ0FBbUM7UUFDbkMsTUFBTSxRQUFRLEdBQUcsd0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVNLGVBQWUsQ0FBQyxRQUFnQjtRQUNyQyxjQUFjO1FBQ2QsYUFBYTtRQUNiLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxHQUFJLE1BQWMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdHLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtZQUNmLE1BQU0sR0FBRyxDQUFBO1NBQ1Y7UUFDRCxPQUFPO1lBQ0wsT0FBTyxFQUFFLE9BQU87WUFDaEIsT0FBTyxFQUFFO2dCQUNQLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsTUFBTSxFQUFFLFFBQVE7YUFFakI7U0FDRixDQUFBO0lBQ0gsQ0FBQztJQUVNLGVBQWUsQ0FBQyxVQUFrQjtRQUN2QyxhQUFhO1FBQ2IsYUFBYTtRQUNiLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxHQUFJLE1BQWMsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEgsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2YsTUFBTSxHQUFHLENBQUE7U0FDVjtRQUNELE9BQU87WUFDTCxPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUU7Z0JBQ1AsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixNQUFNLEVBQUUsUUFBUTthQUNqQjtTQUNGLENBQUE7SUFDSCxDQUFDO0lBR00sa0JBQWtCLENBQUMsVUFBa0I7UUFDMUMsTUFBTSxVQUFVLEdBQUksTUFBYyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN6RSxPQUFPLFVBQVUsQ0FBQTtJQUNuQixDQUFDO0lBT00sZUFBZSxDQUFDLFNBQVM7UUFDOUIsTUFBTSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsR0FBSSxNQUFjLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RGLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUNoQixNQUFNLElBQUksQ0FBQztTQUNaO1FBQ0QsT0FBTyxZQUFZLENBQUE7SUFDckIsQ0FBQztJQUNNLElBQUk7UUFFVCxpQkFBaUI7SUFDbkIsQ0FBQztJQUVNLFVBQVUsQ0FBQyxTQUFxQjtRQUNyQyxNQUFNLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxHQUFJLE1BQWMsQ0FBQyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUYsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2YsTUFBTSxHQUFHLENBQUM7U0FDWDtRQUNELE9BQU8sVUFBVSxDQUFBO1FBQ2pCLHlDQUF5QztRQUN6QyxnRUFBZ0U7UUFDaEUsNENBQTRDO1FBQzVDLGVBQWU7SUFDakIsQ0FBQztDQUNGO0FBNUVELDRCQTRFQyJ9