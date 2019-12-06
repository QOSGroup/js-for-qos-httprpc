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
        if (err != null) {
            console.log('err==', err);
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
            console.log('err==', err);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjcmV0S2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvcmUvU2VjcmV0S2V5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUV6QyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFbkIsTUFBTSxDQUFDLE9BQU8sT0FBTyxTQUFTO0lBQ3JCLGdCQUFnQjtRQUNyQixtQ0FBbUM7UUFDbkMsTUFBTSxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVNLGVBQWUsQ0FBQyxRQUFnQjtRQUNyQyxjQUFjO1FBQ2QsYUFBYTtRQUNiLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxHQUFJLE1BQWMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdHLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1NBQzFCO1FBQ0QsT0FBTztZQUNMLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE9BQU8sRUFBRTtnQkFDUCxhQUFhLEVBQUUsU0FBUztnQkFDeEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLE1BQU0sRUFBRSxRQUFRO2FBRWpCO1NBQ0YsQ0FBQTtJQUNILENBQUM7SUFFTSxlQUFlLENBQUMsVUFBa0I7UUFDdkMsYUFBYTtRQUNiLGFBQWE7UUFDYixNQUFNLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsR0FBSSxNQUFjLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hILElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1NBQzFCO1FBQ0QsT0FBTztZQUNMLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE9BQU8sRUFBRTtnQkFDUCxhQUFhLEVBQUUsU0FBUztnQkFDeEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLE1BQU0sRUFBRSxRQUFRO2FBQ2pCO1NBQ0YsQ0FBQTtJQUNILENBQUM7SUFHTSxrQkFBa0IsQ0FBQyxVQUFrQjtRQUMxQyxNQUFNLFVBQVUsR0FBSSxNQUFjLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3pFLE9BQU8sVUFBVSxDQUFBO0lBQ25CLENBQUM7SUFPTSxlQUFlLENBQUMsU0FBUztRQUM5QixNQUFNLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxHQUFJLE1BQWMsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEYsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxDQUFDO1NBQ1o7UUFDRCxPQUFPLFlBQVksQ0FBQTtJQUNyQixDQUFDO0lBQ00sSUFBSTtRQUVULGlCQUFpQjtJQUNuQixDQUFDO0lBRU0sVUFBVSxDQUFDLFNBQXFCO1FBQ3JDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLEdBQUksTUFBYyxDQUFDLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5RixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDZixNQUFNLEdBQUcsQ0FBQztTQUNYO1FBQ0QsT0FBTyxVQUFVLENBQUE7UUFDakIseUNBQXlDO1FBQ3pDLGdFQUFnRTtRQUNoRSw0Q0FBNEM7UUFDNUMsZUFBZTtJQUNqQixDQUFDO0NBQ0YifQ==