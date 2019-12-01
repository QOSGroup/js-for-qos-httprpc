export interface IKeyPair {
    privateKey: Uint8Array;
    pubKey: Uint8Array;
    hexPrivateKey: string;
}
export interface IAcc {
    address: string;
    keyPair: IKeyPair;
}
export interface IQSC {
    coin_name: string;
    amount: number;
}
