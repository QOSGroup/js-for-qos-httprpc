import { generateMnemonic } from 'bip39';
require('qosKeys');
export default class SecretKey {
    generateMnemonic() {
        // 商 256，生成24个助记单词, 商 128，生成12个助记单词
        const mnemonic = generateMnemonic(128);
        return mnemonic;
    }
    genarateKeyPair(mnemonic) {
        // 根据助记词得到账户信息
        // @ts-ignore
        const [hexprikey, pubkey, accaddr, prikeyBz, pubkeyBz, err] = global.qosKeys.DeriveQOSKey(mnemonic);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjcmV0S2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvcmUvU2VjcmV0S2V5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUV6QyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFbkIsTUFBTSxDQUFDLE9BQU8sT0FBTyxTQUFTO0lBQ3JCLGdCQUFnQjtRQUNyQixtQ0FBbUM7UUFDbkMsTUFBTSxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVNLGVBQWUsQ0FBQyxRQUFnQjtRQUNyQyxjQUFjO1FBQ2QsYUFBYTtRQUNiLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxHQUFJLE1BQWMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdHLE9BQU87WUFDTCxPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUU7Z0JBQ1AsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixNQUFNLEVBQUUsUUFBUTthQUVqQjtTQUNGLENBQUE7SUFDSCxDQUFDO0lBRU0sZUFBZSxDQUFDLFVBQWtCO1FBQ3ZDLGFBQWE7UUFDYixhQUFhO1FBQ2IsTUFBTSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEdBQUksTUFBYyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4SCxPQUFPO1lBQ0wsT0FBTyxFQUFFLE9BQU87WUFDaEIsT0FBTyxFQUFFO2dCQUNQLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsTUFBTSxFQUFFLFFBQVE7YUFDakI7U0FDRixDQUFBO0lBQ0gsQ0FBQztJQUdNLGtCQUFrQixDQUFDLFVBQWtCO1FBQzFDLE1BQU0sVUFBVSxHQUFJLE1BQWMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDekUsT0FBTyxVQUFVLENBQUE7SUFDbkIsQ0FBQztJQU9NLGVBQWUsQ0FBQyxTQUFTO1FBQzlCLE1BQU0sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEdBQUksTUFBYyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDaEIsTUFBTSxJQUFJLENBQUM7U0FDWjtRQUNELE9BQU8sWUFBWSxDQUFBO0lBQ3JCLENBQUM7SUFDTSxJQUFJO1FBRVQsaUJBQWlCO0lBQ25CLENBQUM7SUFFTSxVQUFVLENBQUMsU0FBcUI7UUFDckMsTUFBTSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsR0FBSSxNQUFjLENBQUMsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlGLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtZQUNmLE1BQU0sR0FBRyxDQUFDO1NBQ1g7UUFDRCxPQUFPLFVBQVUsQ0FBQTtRQUNqQix5Q0FBeUM7UUFDekMsZ0VBQWdFO1FBQ2hFLDRDQUE0QztRQUM1QyxlQUFlO0lBQ2pCLENBQUM7Q0FDRiJ9