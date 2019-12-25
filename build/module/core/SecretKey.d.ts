import { IAcc } from './types/common';
export default class SecretKey {
    generateMnemonic(): string;
    genarateKeyPair(mnemonic: string): IAcc;
    recoveryKeyPair(privateKey: string): IAcc;
    verifyBech32String(accAddress: string): any;
    getBech32PubKey(publicKey: any): any;
    test(): void;
    getAddress(publicKey: Uint8Array): any;
}
