import QOSRpc from './QOSRpc';
import { IKeyPair } from './types/common';
declare class Account {
    readonly rpc: QOSRpc;
    qos: number;
    mnemonic: string;
    keypair: IKeyPair;
    address: string;
    pubKey: string;
    privateKey: string;
    bech32pubkey: string;
    constructor(controller: QOSRpc, keyPair?: IKeyPair, mnemonic?: string);
    sendTransferTx(): Promise<import("axios").AxiosResponse<any>>;
}
export default Account;
