/// <reference types="node" />
export default class SecretKey {
    generateMnemonic(): string;
    genarateKeyPair(mnemonic: string): {
        publicKey: any;
        privateKey: any;
        bech32pubkey: any;
    };
    getBech32PubKey(publicKey: any): any;
    recoveryKeyPair(privateKey: Uint8Array): {
        publicKey: Buffer;
        privateKey: Uint8Array;
        bech32pubkey: any;
    };
    test(): void;
    getAddress(publicKey: Uint8Array): any;
}
